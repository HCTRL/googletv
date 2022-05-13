import _debug from "debug"

export const LIBRARY_NAME = "hctrl/googletv"
export const debug = (namespace: string) => _debug(LIBRARY_NAME).extend(namespace)
export const wait = (t: number): Promise<void> => new Promise(r => setTimeout(r, t))

export const hexStringToBytes = (hexString: string) => {
  const bytes = []
  for (let i = 0; i < hexString.length; i += 2) {
    let byte = parseInt(hexString.substring(i, i + 2), 16)
    if (byte > 127) {
      byte = -(~byte & 0xff) - 1
    }
    bytes.push(byte)
  }
  return bytes
}
