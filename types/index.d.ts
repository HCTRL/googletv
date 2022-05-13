export namespace GTV {
  export interface GoogleTVOptions {
    certificate: Certificate
    paringPort: number
    remotePort: number
    serviceName: string
    /** this is whats shown on your tv when pairing */
    clientName: string
  }

  export interface RemoteManagerEvents {
    ready: () => void
    unpaired: () => void
    currentApp: (app?: string) => void
    power: (state: boolean) => void
    volumeState: (state: VolumeState) => void
    error: (error: unknown) => void
  }

  export interface PairingManagerEvents {
    secret: () => void
  }

  export interface Certificate {
    cert: string
    key: string
  }

  export interface VolumeState {
    current: number
    max: number
    isMuted: boolean
  }

  export interface GoogleTVEvents {
    secretCodeRequest: () => void
  }
}
