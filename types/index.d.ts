export namespace GTV {
  export interface GoogleTVOptions {
    certificate: Certificate
    paringPort: number
    remotePort: number
    serviceName: string
    /** this is whats shown on your tv when pairing */
    clientName: string
  }

  export interface Certificate {
    cert: string
    key: string
  }

  export interface GoogleTVEvents {
    secretCodeRequest: () => void
  }
}
