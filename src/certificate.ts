import forge from "node-forge"
import crypto from "crypto"

export const generateCertificate = (
  name: string,
  country = "CNT",
  state = "ST",
  locality = "LOC",
  organization = "O",
  OU = "OU"
) => {
  const keys = forge.pki.rsa.generateKeyPair(2048)
  const cert = forge.pki.createCertificate()
  cert.publicKey = keys.publicKey
  cert.serialNumber = "01" + crypto.randomBytes(19).toString("hex")
  cert.validity.notBefore = new Date()
  const date = new Date()
  date.setUTCFullYear(2099)
  cert.validity.notAfter = date

  const attributes = [
    { name: "commonName", value: name },
    { name: "countryName", value: country },
    { shortName: "ST", value: state },
    { name: "localityName", value: locality },
    { name: "organizationName", value: organization },
    { shortName: "OU", value: OU },
  ]
  cert.setSubject(attributes)
  cert.sign(keys.privateKey, forge.md.sha256.create())

  return {
    cert: forge.pki.certificateToPem(cert),
    key: forge.pki.privateKeyToPem(keys.privateKey),
  }
}
