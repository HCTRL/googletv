import type { GTV } from "../types/index"

import EventEmitter from "events"
import { LIBRARY_NAME, debug, wait } from "./util"
import { generateCertificate } from "./certificate"
import { PairingManager } from "./pairing/pairing"
import { RemoteManager } from "./remote/remote"

export { RemoteKeyCode } from "./proto/remotemessage"

const log = debug("main")

export class GoogleTV extends EventEmitter {
  options: GTV.GoogleTVOptions

  pairingManager?: PairingManager
  remoteManager?: RemoteManager

  static defaultOptions: GTV.GoogleTVOptions = {
    certificate: {
      cert: "",
      key: "",
    },
    paringPort: 6467,
    remotePort: 6466,
    serviceName: LIBRARY_NAME,
    clientName: LIBRARY_NAME,
  }

  /**
   * @param host the IP address or hostname of the GoogleTV
   * @param options additional options such as certificate, paringPort, remotePort and serviceName
   */
  constructor(public host: string, options: Partial<GTV.GoogleTVOptions> = {}) {
    super()

    this.options = { ...GoogleTV.defaultOptions, ...options }

    log(`new GoogleTV host=${host} options=${JSON.stringify(this.options)}`)
  }

  ensurePaired = async () => {
    if (!this.options.certificate?.cert || !this.options.certificate?.key) {
      this.options.certificate = generateCertificate(this.options.serviceName)
      this.pairingManager = new PairingManager(this.host, this.options)

      this.pairingManager.on("secret", () => this.emit("secretCodeRequest"))

      const paired = await this.pairingManager.pair()
      if (!paired) throw new Error("pairing failed")
    }
  }

  init = async () => {
    await this.ensurePaired()
    this.remoteManager = new RemoteManager(this.host, this.options)

    // TODO: check if this can be removed
    await wait(1e3)

    await this.remoteManager.init()
  }

  sendKey = (...args: Parameters<RemoteManager["sendKey"]>) => {
    this.remoteManager?.sendKey(...args)
  }

  sendPairingCode = async (code: string) => this.pairingManager?.sendPairingCode(code)
}

// this provides type-safety for the GoogleTV event emitter
export declare interface GoogleTV {
  on<U extends keyof GTV.GoogleTVEvents>(event: U, listener: GTV.GoogleTVEvents[U]): this
  emit<U extends keyof GTV.GoogleTVEvents>(
    event: U,
    ...args: Parameters<GTV.GoogleTVEvents[U]>
  ): boolean
}
