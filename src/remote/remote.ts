import type { RemoteKeyCode } from "../proto/remotemessage"
import { RemoteDirection } from "../proto/remotemessage"
import type { GTV } from "types"

import EventEmitter from "events"
import { Messages } from "./remoteMessages"
import tls from "tls"

import { debug } from "../util"
const log = debug("remote")

interface RemoteManagerEvents {
  unpaired: () => void
}

// this provides type-safety for the GoogleTV event emitter
export declare interface RemoteManager {
  on<U extends keyof RemoteManagerEvents>(event: U, listener: RemoteManagerEvents[U]): this
  emit<U extends keyof RemoteManagerEvents>(
    event: U,
    ...args: Parameters<RemoteManagerEvents[U]>
  ): boolean
}
export class RemoteManager extends EventEmitter {
  private socket?: tls.TLSSocket
  private chunks = Buffer.from([])

  private error: unknown = null

  private messages: Messages

  constructor(public host: string, public options: GTV.GoogleTVOptions) {
    super()
    this.messages = new Messages(options)
  }

  private setupSocket = () => {
    const socketOptions: tls.ConnectionOptions = {
      host: this.host,
      port: this.options.remotePort,
      cert: this.options.certificate.cert,
      key: this.options.certificate.key,
      rejectUnauthorized: false,
    }
    const onConnect = () => log("remote socket connected")

    return tls.connect(socketOptions, onConnect)
  }

  init = () => {
    return new Promise((resolve, reject) => {
      log("initializing remote manager")

      this.socket = this.setupSocket()

      // ping interval is 5 seconds, we give it some room to slack
      this.socket.setTimeout(10e3)
      this.socket.on("timeout", () => {
        log("remote socket timed out")
        this.socket?.destroy()
      })

      this.socket.on("data", this.onData)

      this.socket.on("secureConnect", () => {
        log("remote socket connected securely")
        resolve(true)
      })

      this.socket.on("error", (error: unknown) => {
        log("remote socket error", error)
        this.error = error
      })
      this.socket.on("close", (hasError: unknown) => {
        log("remote socket closed", hasError)

        if (hasError) {
          reject(this.error)
        }
      })
    })
  }

  private onData = (data: Parameters<typeof Buffer.from>[0]) => {
    const buffer = Buffer.from(data)

    this.chunks = Buffer.concat([this.chunks, buffer])

    if (this.chunks.length <= 0) return
    if (this.chunks.readInt8(0) !== this.chunks.length - 1) return

    const message = this.messages.parse(this.chunks)
    log.extend("received")(message.toJSON())

    if (message.remoteConfigure) {
      log("remoteConfigure")
      this.socket?.write(this.messages.createRemoteConfigure())
    } else if (message.remoteSetActive) {
      this.socket?.write(this.messages.createRemoteSetActive(622))
    } else if (message.remotePingRequest) {
      const value = message.remotePingRequest.val1
      this.socket?.write(this.messages.createRemotePingResponse(value))
    }

    this.chunks = Buffer.from([])
  }

  sendKey = (key: RemoteKeyCode, pressType: RemoteDirection = RemoteDirection.SHORT) => {
    this.socket?.write(this.messages.remoteKeyInject(key, pressType))
  }
}
