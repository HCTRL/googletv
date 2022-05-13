import type { PairingMessage } from "../proto/pairingmessage"
import type { PartialDeep } from "type-fest"
import type { GTV } from "types"

import {
  PairingEncoding_EncodingType,
  PairingMessage_Status,
  RoleType,
} from "../proto/pairingmessage"
import protobuf from "protobufjs"
import path from "path"

import { debug } from "../util"
const log = debug("pairing")

export class Messages {
  private root = protobuf.loadSync(path.join(__dirname, "..", "proto", "pairingmessage.proto"))

  private PairingMessage = this.root.lookupType("pairing.PairingMessage")

  constructor(private options: GTV.GoogleTVOptions) {}

  private create = (payload: PartialDeep<PairingMessage>) => {
    const error = this.PairingMessage.verify(payload)
    if (error) throw Error(error)

    const message = this.PairingMessage.create(payload)

    log.extend("sending")(message.toJSON())
    return this.PairingMessage.encodeDelimited(message).finish()
  }

  parse = (buffer: Buffer) => {
    const decoded = this.PairingMessage.decodeDelimited(buffer) as unknown
    return decoded as protobuf.Message & PairingMessage
  }

  pairingRequest = () => {
    log("creating pairing request")
    return this.create({
      pairingRequest: {
        serviceName: this.options.serviceName,
        clientName: this.options.clientName,
      },
      status: PairingMessage_Status.STATUS_OK,
      protocolVersion: 2,
    })
  }

  pairingOption = () => {
    return this.create({
      pairingOption: {
        preferredRole: RoleType.ROLE_TYPE_INPUT,
        inputEncodings: [
          {
            type: PairingEncoding_EncodingType.ENCODING_TYPE_HEXADECIMAL,
            symbolLength: 6,
          },
        ],
      },
      status: PairingMessage_Status.STATUS_OK,
      protocolVersion: 2,
    })
  }

  pairingConfiguration = () => {
    return this.create({
      pairingConfiguration: {
        clientRole: RoleType.ROLE_TYPE_INPUT,
        encoding: {
          type: PairingEncoding_EncodingType.ENCODING_TYPE_HEXADECIMAL,
          symbolLength: 6,
        },
      },
      status: PairingMessage_Status.STATUS_OK,
      protocolVersion: 2,
    })
  }

  pairingSecret = (secret: Buffer) => {
    return this.create({
      pairingSecret: { secret },
      status: PairingMessage_Status.STATUS_OK,
      protocolVersion: 2,
    })
  }
}
