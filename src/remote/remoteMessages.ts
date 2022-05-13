import type { RemoteDirection, RemoteKeyCode, RemoteMessage } from "../proto/remotemessage"
import type { PartialDeep } from "type-fest"
import type { GTV } from "types"

import { debug, LIBRARY_NAME } from "../util"

import {} from "../proto/remotemessage"
import protobuf from "protobufjs"
import path from "path"

const log = debug("remote")

export class Messages {
  private root = protobuf.loadSync(path.join(__dirname, "..", "proto", "remotemessage.proto"))

  private RemoteMessage = this.root.lookupType("remote.RemoteMessage")

  constructor(private options: GTV.GoogleTVOptions) {}

  private create = (payload: PartialDeep<RemoteMessage>) => {
    const error = this.RemoteMessage.verify(payload)
    if (error) throw Error(error)

    const message = this.RemoteMessage.create(payload)

    log.extend("sending")(payload)
    return this.RemoteMessage.encodeDelimited(message).finish()
  }

  remoteKeyInject = (key: RemoteKeyCode, pressType: RemoteDirection) => {
    return this.create({
      remoteKeyInject: {
        keyCode: key,
        direction: pressType,
      },
    })
  }

  // not sure what any of these do
  remoteConfigure() {
    return this.create({
      remoteConfigure: {
        code1: 622,
        deviceInfo: {
          model: this.options.clientName,
          vendor: this.options.serviceName,
          unknown1: 1,
          unknown2: "1",
          packageName: LIBRARY_NAME,
          appVersion: "1.0.0",
        },
      },
    })
  }

  remoteSetActive(active: number) {
    return this.create({ remoteSetActive: { active } })
  }

  pingResponse(val1: number) {
    return this.create({ remotePingResponse: { val1 } })
  }

  parse = (buffer: Buffer) => {
    const decoded = this.RemoteMessage.decodeDelimited(buffer) as unknown
    return decoded as protobuf.Message & RemoteMessage
  }
}
