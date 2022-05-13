import type { RemoteKeyCode } from "../proto/remotemessage"
import type { GTV } from "types"

import { RemoteDirection } from "../proto/remotemessage"

import EventEmitter from "events"
import { Messages } from "./remoteMessages"
import tls from "tls"

import { debug } from "../util"
const log = debug("remote")

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
          this.emit("error", this.error)
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
      //? i believe this initializes the remote
      log("remoteConfigure")
      this.socket?.write(this.messages.remoteConfigure())
      this.emit("ready")
    } else if (message.remoteSetActive) {
      //? set the remote to "active"
      this.socket?.write(this.messages.remoteSetActive(622))
    } else if (message.remotePingRequest) {
      //? self-explanatory
      const value = message.remotePingRequest.val1
      this.socket?.write(this.messages.pingResponse(value))
    } else if (message.remoteKeyInject) {
      //? this is the currently-running app
      const app = message.remoteImeKeyInject?.appInfo?.appPackage
      log.extend("current-app")(app)
      this.emit("currentApp", app)
    } else if (message.remoteImeBatchEdit) {
      // log(`remoteImeBatchEdit ${message.remoteImeBatchEdit}`)
    } else if (message.remoteImeShowRequest) {
      // log(`remoteImeShowRequest ${message.remoteImeShowRequest}`)
    } else if (message.remoteVoiceBegin) {
      // log(`remoteVoiceBegin ${message.remoteVoiceBegin}`)
    } else if (message.remoteVoicePayload) {
      // log(`remoteVoicePayload ${message.remoteVoicePayload}`)
    } else if (message.remoteVoiceEnd) {
      // log(`remoteVoiceEnd ${message.remoteVoiceEnd}`)
    } else if (message.remoteStart) {
      log.extend("power-state")(message.remoteStart.started ? "on" : "off")
      this.emit("power", message.remoteStart.started)
    } else if (message.remoteSetVolumeLevel) {
      const state = {
        current: message.remoteSetVolumeLevel.volumeLevel,
        max: message.remoteSetVolumeLevel.volumeMax,
        isMuted: message.remoteSetVolumeLevel.volumeMuted,
      }

      log.extend("volume-state")(state)
      this.emit("volumeState", state)
    } else if (message.remoteSetPreferredAudioDevice) {
      // log(`remoteSetPreferredAudioDevice ${message.remoteSetPreferredAudioDevice}`)
    } else if (message.remoteError) {
      log.extend("error")(message.remoteError)
      this.emit("error", { error: message.remoteError })
    } else {
      log("something is fucked")
    }

    this.chunks = Buffer.from([])
  }

  sendKey = (key: RemoteKeyCode, pressType: RemoteDirection = RemoteDirection.SHORT) => {
    this.socket?.write(this.messages.remoteKeyInject(key, pressType))
  }
}

// this provides type-safety for the RemoteManager event emitter
export declare interface RemoteManager {
  on<U extends keyof GTV.RemoteManagerEvents>(
    event: U,
    listener: GTV.RemoteManagerEvents[U]
  ): this
  emit<U extends keyof GTV.RemoteManagerEvents>(
    event: U,
    ...args: Parameters<GTV.RemoteManagerEvents[U]>
  ): boolean
}
