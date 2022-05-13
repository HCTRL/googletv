/* eslint-disable */
import Long from "long"
import * as _m0 from "protobufjs/minimal"

export const protobufPackage = "pairing"

/** pairingmessage.proto */

export enum RoleType {
  ROLE_TYPE_UNKNOWN = 0,
  ROLE_TYPE_INPUT = 1,
  ROLE_TYPE_OUTPUT = 2,
  UNRECOGNIZED = -1,
}

export function roleTypeFromJSON(object: any): RoleType {
  switch (object) {
    case 0:
    case "ROLE_TYPE_UNKNOWN":
      return RoleType.ROLE_TYPE_UNKNOWN
    case 1:
    case "ROLE_TYPE_INPUT":
      return RoleType.ROLE_TYPE_INPUT
    case 2:
    case "ROLE_TYPE_OUTPUT":
      return RoleType.ROLE_TYPE_OUTPUT
    case -1:
    case "UNRECOGNIZED":
      return RoleType.UNRECOGNIZED
    default:
      throw new globalThis.Error("Unrecognized enum value " + object + " for enum RoleType")
  }
}

export function roleTypeToJSON(object: RoleType): string {
  switch (object) {
    case RoleType.ROLE_TYPE_UNKNOWN:
      return "ROLE_TYPE_UNKNOWN"
    case RoleType.ROLE_TYPE_INPUT:
      return "ROLE_TYPE_INPUT"
    case RoleType.ROLE_TYPE_OUTPUT:
      return "ROLE_TYPE_OUTPUT"
    case RoleType.UNRECOGNIZED:
      return "UNRECOGNIZED"
    default:
      return "UNKNOWN"
  }
}

export interface PairingRequest {
  clientName: string
  serviceName: string
}

export interface PairingRequestAck {
  serverName: string
}

export interface PairingEncoding {
  type: PairingEncoding_EncodingType
  symbolLength: number
}

export enum PairingEncoding_EncodingType {
  ENCODING_TYPE_UNKNOWN = 0,
  ENCODING_TYPE_ALPHANUMERIC = 1,
  ENCODING_TYPE_NUMERIC = 2,
  ENCODING_TYPE_HEXADECIMAL = 3,
  ENCODING_TYPE_QRCODE = 4,
  UNRECOGNIZED = -1,
}

export function pairingEncoding_EncodingTypeFromJSON(
  object: any
): PairingEncoding_EncodingType {
  switch (object) {
    case 0:
    case "ENCODING_TYPE_UNKNOWN":
      return PairingEncoding_EncodingType.ENCODING_TYPE_UNKNOWN
    case 1:
    case "ENCODING_TYPE_ALPHANUMERIC":
      return PairingEncoding_EncodingType.ENCODING_TYPE_ALPHANUMERIC
    case 2:
    case "ENCODING_TYPE_NUMERIC":
      return PairingEncoding_EncodingType.ENCODING_TYPE_NUMERIC
    case 3:
    case "ENCODING_TYPE_HEXADECIMAL":
      return PairingEncoding_EncodingType.ENCODING_TYPE_HEXADECIMAL
    case 4:
    case "ENCODING_TYPE_QRCODE":
      return PairingEncoding_EncodingType.ENCODING_TYPE_QRCODE
    case -1:
    case "UNRECOGNIZED":
      return PairingEncoding_EncodingType.UNRECOGNIZED
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum PairingEncoding_EncodingType"
      )
  }
}

export function pairingEncoding_EncodingTypeToJSON(
  object: PairingEncoding_EncodingType
): string {
  switch (object) {
    case PairingEncoding_EncodingType.ENCODING_TYPE_UNKNOWN:
      return "ENCODING_TYPE_UNKNOWN"
    case PairingEncoding_EncodingType.ENCODING_TYPE_ALPHANUMERIC:
      return "ENCODING_TYPE_ALPHANUMERIC"
    case PairingEncoding_EncodingType.ENCODING_TYPE_NUMERIC:
      return "ENCODING_TYPE_NUMERIC"
    case PairingEncoding_EncodingType.ENCODING_TYPE_HEXADECIMAL:
      return "ENCODING_TYPE_HEXADECIMAL"
    case PairingEncoding_EncodingType.ENCODING_TYPE_QRCODE:
      return "ENCODING_TYPE_QRCODE"
    case PairingEncoding_EncodingType.UNRECOGNIZED:
      return "UNRECOGNIZED"
    default:
      return "UNKNOWN"
  }
}

export interface PairingOption {
  inputEncodings: PairingEncoding[]
  outputEncodings: PairingEncoding[]
  preferredRole: RoleType
}

export interface PairingConfiguration {
  encoding: PairingEncoding | undefined
  clientRole: RoleType
}

export interface PairingConfigurationAck {}

export interface PairingSecret {
  secret: Uint8Array
}

export interface PairingSecretAck {
  secret: Uint8Array
}

export interface PairingMessage {
  protocolVersion: number
  status: PairingMessage_Status
  requestCase: number
  pairingRequest: PairingRequest | undefined
  pairingRequestAck: PairingRequestAck | undefined
  pairingOption: PairingOption | undefined
  pairingConfiguration: PairingConfiguration | undefined
  pairingConfigurationAck: PairingConfigurationAck | undefined
  pairingSecret: PairingSecret | undefined
  pairingSecretAck: PairingSecretAck | undefined
}

export enum PairingMessage_Status {
  UNKNOWN = 0,
  STATUS_OK = 200,
  STATUS_ERROR = 400,
  STATUS_BAD_CONFIGURATION = 401,
  STATUS_BAD_SECRET = 402,
  UNRECOGNIZED = -1,
}

export function pairingMessage_StatusFromJSON(object: any): PairingMessage_Status {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return PairingMessage_Status.UNKNOWN
    case 200:
    case "STATUS_OK":
      return PairingMessage_Status.STATUS_OK
    case 400:
    case "STATUS_ERROR":
      return PairingMessage_Status.STATUS_ERROR
    case 401:
    case "STATUS_BAD_CONFIGURATION":
      return PairingMessage_Status.STATUS_BAD_CONFIGURATION
    case 402:
    case "STATUS_BAD_SECRET":
      return PairingMessage_Status.STATUS_BAD_SECRET
    case -1:
    case "UNRECOGNIZED":
      return PairingMessage_Status.UNRECOGNIZED
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum PairingMessage_Status"
      )
  }
}

export function pairingMessage_StatusToJSON(object: PairingMessage_Status): string {
  switch (object) {
    case PairingMessage_Status.UNKNOWN:
      return "UNKNOWN"
    case PairingMessage_Status.STATUS_OK:
      return "STATUS_OK"
    case PairingMessage_Status.STATUS_ERROR:
      return "STATUS_ERROR"
    case PairingMessage_Status.STATUS_BAD_CONFIGURATION:
      return "STATUS_BAD_CONFIGURATION"
    case PairingMessage_Status.STATUS_BAD_SECRET:
      return "STATUS_BAD_SECRET"
    case PairingMessage_Status.UNRECOGNIZED:
      return "UNRECOGNIZED"
    default:
      return "UNKNOWN"
  }
}

function createBasePairingRequest(): PairingRequest {
  return { clientName: "", serviceName: "" }
}

export const PairingRequest = {
  encode(message: PairingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientName !== "") {
      writer.uint32(18).string(message.clientName)
    }
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PairingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePairingRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 2:
          message.clientName = reader.string()
          break
        case 1:
          message.serviceName = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PairingRequest {
    return {
      clientName: isSet(object.clientName) ? String(object.clientName) : "",
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
    }
  },

  toJSON(message: PairingRequest): unknown {
    const obj: any = {}
    message.clientName !== undefined && (obj.clientName = message.clientName)
    message.serviceName !== undefined && (obj.serviceName = message.serviceName)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PairingRequest>, I>>(object: I): PairingRequest {
    const message = createBasePairingRequest()
    message.clientName = object.clientName ?? ""
    message.serviceName = object.serviceName ?? ""
    return message
  },
}

function createBasePairingRequestAck(): PairingRequestAck {
  return { serverName: "" }
}

export const PairingRequestAck = {
  encode(message: PairingRequestAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverName !== "") {
      writer.uint32(10).string(message.serverName)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PairingRequestAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePairingRequestAck()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.serverName = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PairingRequestAck {
    return {
      serverName: isSet(object.serverName) ? String(object.serverName) : "",
    }
  },

  toJSON(message: PairingRequestAck): unknown {
    const obj: any = {}
    message.serverName !== undefined && (obj.serverName = message.serverName)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PairingRequestAck>, I>>(
    object: I
  ): PairingRequestAck {
    const message = createBasePairingRequestAck()
    message.serverName = object.serverName ?? ""
    return message
  },
}

function createBasePairingEncoding(): PairingEncoding {
  return { type: 0, symbolLength: 0 }
}

export const PairingEncoding = {
  encode(message: PairingEncoding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type)
    }
    if (message.symbolLength !== 0) {
      writer.uint32(16).uint32(message.symbolLength)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PairingEncoding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePairingEncoding()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any
          break
        case 2:
          message.symbolLength = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PairingEncoding {
    return {
      type: isSet(object.type) ? pairingEncoding_EncodingTypeFromJSON(object.type) : 0,
      symbolLength: isSet(object.symbolLength) ? Number(object.symbolLength) : 0,
    }
  },

  toJSON(message: PairingEncoding): unknown {
    const obj: any = {}
    message.type !== undefined && (obj.type = pairingEncoding_EncodingTypeToJSON(message.type))
    message.symbolLength !== undefined && (obj.symbolLength = Math.round(message.symbolLength))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PairingEncoding>, I>>(object: I): PairingEncoding {
    const message = createBasePairingEncoding()
    message.type = object.type ?? 0
    message.symbolLength = object.symbolLength ?? 0
    return message
  },
}

function createBasePairingOption(): PairingOption {
  return { inputEncodings: [], outputEncodings: [], preferredRole: 0 }
}

export const PairingOption = {
  encode(message: PairingOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inputEncodings) {
      PairingEncoding.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.outputEncodings) {
      PairingEncoding.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    if (message.preferredRole !== 0) {
      writer.uint32(24).int32(message.preferredRole)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PairingOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePairingOption()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.inputEncodings.push(PairingEncoding.decode(reader, reader.uint32()))
          break
        case 2:
          message.outputEncodings.push(PairingEncoding.decode(reader, reader.uint32()))
          break
        case 3:
          message.preferredRole = reader.int32() as any
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PairingOption {
    return {
      inputEncodings: Array.isArray(object?.inputEncodings)
        ? object.inputEncodings.map((e: any) => PairingEncoding.fromJSON(e))
        : [],
      outputEncodings: Array.isArray(object?.outputEncodings)
        ? object.outputEncodings.map((e: any) => PairingEncoding.fromJSON(e))
        : [],
      preferredRole: isSet(object.preferredRole) ? roleTypeFromJSON(object.preferredRole) : 0,
    }
  },

  toJSON(message: PairingOption): unknown {
    const obj: any = {}
    if (message.inputEncodings) {
      obj.inputEncodings = message.inputEncodings.map(e =>
        e ? PairingEncoding.toJSON(e) : undefined
      )
    } else {
      obj.inputEncodings = []
    }
    if (message.outputEncodings) {
      obj.outputEncodings = message.outputEncodings.map(e =>
        e ? PairingEncoding.toJSON(e) : undefined
      )
    } else {
      obj.outputEncodings = []
    }
    message.preferredRole !== undefined &&
      (obj.preferredRole = roleTypeToJSON(message.preferredRole))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PairingOption>, I>>(object: I): PairingOption {
    const message = createBasePairingOption()
    message.inputEncodings =
      object.inputEncodings?.map(e => PairingEncoding.fromPartial(e)) || []
    message.outputEncodings =
      object.outputEncodings?.map(e => PairingEncoding.fromPartial(e)) || []
    message.preferredRole = object.preferredRole ?? 0
    return message
  },
}

function createBasePairingConfiguration(): PairingConfiguration {
  return { encoding: undefined, clientRole: 0 }
}

export const PairingConfiguration = {
  encode(message: PairingConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encoding !== undefined) {
      PairingEncoding.encode(message.encoding, writer.uint32(10).fork()).ldelim()
    }
    if (message.clientRole !== 0) {
      writer.uint32(16).int32(message.clientRole)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PairingConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePairingConfiguration()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.encoding = PairingEncoding.decode(reader, reader.uint32())
          break
        case 2:
          message.clientRole = reader.int32() as any
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PairingConfiguration {
    return {
      encoding: isSet(object.encoding) ? PairingEncoding.fromJSON(object.encoding) : undefined,
      clientRole: isSet(object.clientRole) ? roleTypeFromJSON(object.clientRole) : 0,
    }
  },

  toJSON(message: PairingConfiguration): unknown {
    const obj: any = {}
    message.encoding !== undefined &&
      (obj.encoding = message.encoding ? PairingEncoding.toJSON(message.encoding) : undefined)
    message.clientRole !== undefined && (obj.clientRole = roleTypeToJSON(message.clientRole))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PairingConfiguration>, I>>(
    object: I
  ): PairingConfiguration {
    const message = createBasePairingConfiguration()
    message.encoding =
      object.encoding !== undefined && object.encoding !== null
        ? PairingEncoding.fromPartial(object.encoding)
        : undefined
    message.clientRole = object.clientRole ?? 0
    return message
  },
}

function createBasePairingConfigurationAck(): PairingConfigurationAck {
  return {}
}

export const PairingConfigurationAck = {
  encode(_: PairingConfigurationAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PairingConfigurationAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePairingConfigurationAck()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): PairingConfigurationAck {
    return {}
  },

  toJSON(_: PairingConfigurationAck): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PairingConfigurationAck>, I>>(
    _: I
  ): PairingConfigurationAck {
    const message = createBasePairingConfigurationAck()
    return message
  },
}

function createBasePairingSecret(): PairingSecret {
  return { secret: new Uint8Array() }
}

export const PairingSecret = {
  encode(message: PairingSecret, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secret.length !== 0) {
      writer.uint32(10).bytes(message.secret)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PairingSecret {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePairingSecret()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.secret = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PairingSecret {
    return {
      secret: isSet(object.secret) ? bytesFromBase64(object.secret) : new Uint8Array(),
    }
  },

  toJSON(message: PairingSecret): unknown {
    const obj: any = {}
    message.secret !== undefined &&
      (obj.secret = base64FromBytes(
        message.secret !== undefined ? message.secret : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PairingSecret>, I>>(object: I): PairingSecret {
    const message = createBasePairingSecret()
    message.secret = object.secret ?? new Uint8Array()
    return message
  },
}

function createBasePairingSecretAck(): PairingSecretAck {
  return { secret: new Uint8Array() }
}

export const PairingSecretAck = {
  encode(message: PairingSecretAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secret.length !== 0) {
      writer.uint32(10).bytes(message.secret)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PairingSecretAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePairingSecretAck()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.secret = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PairingSecretAck {
    return {
      secret: isSet(object.secret) ? bytesFromBase64(object.secret) : new Uint8Array(),
    }
  },

  toJSON(message: PairingSecretAck): unknown {
    const obj: any = {}
    message.secret !== undefined &&
      (obj.secret = base64FromBytes(
        message.secret !== undefined ? message.secret : new Uint8Array()
      ))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PairingSecretAck>, I>>(object: I): PairingSecretAck {
    const message = createBasePairingSecretAck()
    message.secret = object.secret ?? new Uint8Array()
    return message
  },
}

function createBasePairingMessage(): PairingMessage {
  return {
    protocolVersion: 0,
    status: 0,
    requestCase: 0,
    pairingRequest: undefined,
    pairingRequestAck: undefined,
    pairingOption: undefined,
    pairingConfiguration: undefined,
    pairingConfigurationAck: undefined,
    pairingSecret: undefined,
    pairingSecretAck: undefined,
  }
}

export const PairingMessage = {
  encode(message: PairingMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocolVersion !== 0) {
      writer.uint32(8).int32(message.protocolVersion)
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status)
    }
    if (message.requestCase !== 0) {
      writer.uint32(24).int32(message.requestCase)
    }
    if (message.pairingRequest !== undefined) {
      PairingRequest.encode(message.pairingRequest, writer.uint32(82).fork()).ldelim()
    }
    if (message.pairingRequestAck !== undefined) {
      PairingRequestAck.encode(message.pairingRequestAck, writer.uint32(90).fork()).ldelim()
    }
    if (message.pairingOption !== undefined) {
      PairingOption.encode(message.pairingOption, writer.uint32(162).fork()).ldelim()
    }
    if (message.pairingConfiguration !== undefined) {
      PairingConfiguration.encode(
        message.pairingConfiguration,
        writer.uint32(242).fork()
      ).ldelim()
    }
    if (message.pairingConfigurationAck !== undefined) {
      PairingConfigurationAck.encode(
        message.pairingConfigurationAck,
        writer.uint32(250).fork()
      ).ldelim()
    }
    if (message.pairingSecret !== undefined) {
      PairingSecret.encode(message.pairingSecret, writer.uint32(322).fork()).ldelim()
    }
    if (message.pairingSecretAck !== undefined) {
      PairingSecretAck.encode(message.pairingSecretAck, writer.uint32(330).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PairingMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePairingMessage()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.protocolVersion = reader.int32()
          break
        case 2:
          message.status = reader.int32() as any
          break
        case 3:
          message.requestCase = reader.int32()
          break
        case 10:
          message.pairingRequest = PairingRequest.decode(reader, reader.uint32())
          break
        case 11:
          message.pairingRequestAck = PairingRequestAck.decode(reader, reader.uint32())
          break
        case 20:
          message.pairingOption = PairingOption.decode(reader, reader.uint32())
          break
        case 30:
          message.pairingConfiguration = PairingConfiguration.decode(reader, reader.uint32())
          break
        case 31:
          message.pairingConfigurationAck = PairingConfigurationAck.decode(
            reader,
            reader.uint32()
          )
          break
        case 40:
          message.pairingSecret = PairingSecret.decode(reader, reader.uint32())
          break
        case 41:
          message.pairingSecretAck = PairingSecretAck.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PairingMessage {
    return {
      protocolVersion: isSet(object.protocolVersion) ? Number(object.protocolVersion) : 0,
      status: isSet(object.status) ? pairingMessage_StatusFromJSON(object.status) : 0,
      requestCase: isSet(object.requestCase) ? Number(object.requestCase) : 0,
      pairingRequest: isSet(object.pairingRequest)
        ? PairingRequest.fromJSON(object.pairingRequest)
        : undefined,
      pairingRequestAck: isSet(object.pairingRequestAck)
        ? PairingRequestAck.fromJSON(object.pairingRequestAck)
        : undefined,
      pairingOption: isSet(object.pairingOption)
        ? PairingOption.fromJSON(object.pairingOption)
        : undefined,
      pairingConfiguration: isSet(object.pairingConfiguration)
        ? PairingConfiguration.fromJSON(object.pairingConfiguration)
        : undefined,
      pairingConfigurationAck: isSet(object.pairingConfigurationAck)
        ? PairingConfigurationAck.fromJSON(object.pairingConfigurationAck)
        : undefined,
      pairingSecret: isSet(object.pairingSecret)
        ? PairingSecret.fromJSON(object.pairingSecret)
        : undefined,
      pairingSecretAck: isSet(object.pairingSecretAck)
        ? PairingSecretAck.fromJSON(object.pairingSecretAck)
        : undefined,
    }
  },

  toJSON(message: PairingMessage): unknown {
    const obj: any = {}
    message.protocolVersion !== undefined &&
      (obj.protocolVersion = Math.round(message.protocolVersion))
    message.status !== undefined && (obj.status = pairingMessage_StatusToJSON(message.status))
    message.requestCase !== undefined && (obj.requestCase = Math.round(message.requestCase))
    message.pairingRequest !== undefined &&
      (obj.pairingRequest = message.pairingRequest
        ? PairingRequest.toJSON(message.pairingRequest)
        : undefined)
    message.pairingRequestAck !== undefined &&
      (obj.pairingRequestAck = message.pairingRequestAck
        ? PairingRequestAck.toJSON(message.pairingRequestAck)
        : undefined)
    message.pairingOption !== undefined &&
      (obj.pairingOption = message.pairingOption
        ? PairingOption.toJSON(message.pairingOption)
        : undefined)
    message.pairingConfiguration !== undefined &&
      (obj.pairingConfiguration = message.pairingConfiguration
        ? PairingConfiguration.toJSON(message.pairingConfiguration)
        : undefined)
    message.pairingConfigurationAck !== undefined &&
      (obj.pairingConfigurationAck = message.pairingConfigurationAck
        ? PairingConfigurationAck.toJSON(message.pairingConfigurationAck)
        : undefined)
    message.pairingSecret !== undefined &&
      (obj.pairingSecret = message.pairingSecret
        ? PairingSecret.toJSON(message.pairingSecret)
        : undefined)
    message.pairingSecretAck !== undefined &&
      (obj.pairingSecretAck = message.pairingSecretAck
        ? PairingSecretAck.toJSON(message.pairingSecretAck)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<PairingMessage>, I>>(object: I): PairingMessage {
    const message = createBasePairingMessage()
    message.protocolVersion = object.protocolVersion ?? 0
    message.status = object.status ?? 0
    message.requestCase = object.requestCase ?? 0
    message.pairingRequest =
      object.pairingRequest !== undefined && object.pairingRequest !== null
        ? PairingRequest.fromPartial(object.pairingRequest)
        : undefined
    message.pairingRequestAck =
      object.pairingRequestAck !== undefined && object.pairingRequestAck !== null
        ? PairingRequestAck.fromPartial(object.pairingRequestAck)
        : undefined
    message.pairingOption =
      object.pairingOption !== undefined && object.pairingOption !== null
        ? PairingOption.fromPartial(object.pairingOption)
        : undefined
    message.pairingConfiguration =
      object.pairingConfiguration !== undefined && object.pairingConfiguration !== null
        ? PairingConfiguration.fromPartial(object.pairingConfiguration)
        : undefined
    message.pairingConfigurationAck =
      object.pairingConfigurationAck !== undefined && object.pairingConfigurationAck !== null
        ? PairingConfigurationAck.fromPartial(object.pairingConfigurationAck)
        : undefined
    message.pairingSecret =
      object.pairingSecret !== undefined && object.pairingSecret !== null
        ? PairingSecret.fromPartial(object.pairingSecret)
        : undefined
    message.pairingSecretAck =
      object.pairingSecretAck !== undefined && object.pairingSecretAck !== null
        ? PairingSecretAck.fromPartial(object.pairingSecretAck)
        : undefined
    return message
  },
}

declare var self: any | undefined
declare var window: any | undefined
declare var global: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis
  if (typeof self !== "undefined") return self
  if (typeof window !== "undefined") return window
  if (typeof global !== "undefined") return global
  throw "Unable to locate global object"
})()

const atob: (b64: string) => string =
  globalThis.atob || (b64 => globalThis.Buffer.from(b64, "base64").toString("binary"))
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64)
  const arr = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i)
  }
  return arr
}

const btoa: (bin: string) => string =
  globalThis.btoa || (bin => globalThis.Buffer.from(bin, "binary").toString("base64"))
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = []
  arr.forEach(byte => {
    bin.push(String.fromCharCode(byte))
  })
  return btoa(bin.join(""))
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
