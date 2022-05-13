import type { GTV } from "types"

import EventEmitter from "events"
import tls from "tls"
import Crypto from "crypto-js"

import { debug, hexStringToBytes } from "../util"

import { PairingMessage_Status } from "../proto/pairingmessage"
import { Messages } from "./pairingMessages"

const log = debug("pairing")

export interface PairingManagerEvents {
  secret: () => void
}
export declare interface PairingManager {
  on<U extends keyof PairingManagerEvents>(event: U, listener: PairingManagerEvents[U]): this
  emit<U extends keyof PairingManagerEvents>(
    event: U,
    ...args: Parameters<PairingManagerEvents[U]>
  ): boolean
}
export class PairingManager extends EventEmitter {
  private socket?: tls.TLSSocket
  private chunks = Buffer.from([])

  private messages: Messages

  constructor(public host: string, public options: GTV.GoogleTVOptions) {
    super()
    this.messages = new Messages(options)
  }

  private setupSocket = () => {
    const socketOptions: tls.ConnectionOptions = {
      host: this.host,
      port: this.options.paringPort,
      cert: this.options.certificate.cert,
      key: this.options.certificate.key,
      rejectUnauthorized: false,
    }
    const onConnect = () => log("pairing socket connected")

    log("connecting pairing socket")
    return tls.connect(socketOptions, onConnect)
  }

  pair = () => {
    return new Promise((resolve, reject) => {
      log("starting to pair")

      this.socket = this.setupSocket()

      this.socket.on("secureConnect", () => {
        log("pairing socket connected securely")

        const pairingRequest = this.messages.createPairingRequest()
        this.socket?.write(pairingRequest)
      })

      this.socket.on("data", this.onData)
      this.socket.on("error", console.error)
      this.socket.on("close", (error: unknown) => {
        log("pairing socket closed", { error })
        if (error) reject(false)
        else resolve(true)
      })
    })
  }

  sendPairingCode(code: string) {
    log("sending code:", code)

    if (!this.socket) throw new Error("socket not connected")

    const code_bytes = hexStringToBytes(code)

    const server_certificate = this.socket.getPeerCertificate()
    const client_certificate = this.socket.getCertificate()
    if (!client_certificate) throw new Error("client certificate not found")
    if (!("modulus" in client_certificate)) throw new Error("client certificate not found")

    const sha256 = Crypto.algo.SHA256.create()

    sha256.update(Crypto.enc.Hex.parse(client_certificate.modulus))
    sha256.update(Crypto.enc.Hex.parse("0" + client_certificate.exponent.slice(2)))
    sha256.update(Crypto.enc.Hex.parse(server_certificate.modulus))
    sha256.update(Crypto.enc.Hex.parse("0" + server_certificate.exponent.slice(2)))
    sha256.update(Crypto.enc.Hex.parse(code.slice(2)))

    const hash = sha256.finalize()
    const hash_array = hexStringToBytes(hash.toString())
    const check = hash_array[0]

    if (check !== code_bytes[0]) {
      this.socket.destroy(new Error("bad code"))
      return false
    } else {
      this.socket.write(this.messages.createPairingSecret(Buffer.from(hash_array)))
      return true
    }
  }

  private onData = (data: Parameters<typeof Buffer.from>[0]) => {
    const buffer = Buffer.from(data)

    // TODO: check if this needs to be on the class instance
    this.chunks = Buffer.concat([this.chunks, buffer])

    if (this.chunks.length <= 0) return
    if (this.chunks.readInt8(0) !== this.chunks.length - 1) return

    const message = this.messages.parse(this.chunks)
    log.extend("received")(message)

    if (message.status !== PairingMessage_Status.STATUS_OK) {
      this.socket?.destroy(new Error(message.status.toString()))
    } else {
      if (message.pairingRequestAck) {
        this.socket?.write(this.messages.createPairingOption())
      } else if (message.pairingOption) {
        this.socket?.write(this.messages.createPairingConfiguration())
      } else if (message.pairingConfigurationAck) {
        this.emit("secret")
      } else if (message.pairingSecretAck) {
        log("pairing successful")
        this.socket?.destroy()
      } else {
        log("something is fucked")
      }
    }

    this.chunks = Buffer.from([])
  }
}
