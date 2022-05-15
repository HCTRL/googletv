import { GoogleTV, RemoteKeyCode } from "../src"

import readline from "readline"
import { readFileSync, writeFileSync } from "fs"
import path from "path"

// this could be the IP or hostname of the GoogleTV
const GOOGLE_TV_ADDR = "192.168.0.132"

const line = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

!(async () => {
  const CERT_PATH = path.join(__dirname, "./pairing-cert.json")
  let gtv: GoogleTV

  try {
    const paired = readFileSync(CERT_PATH)
    const certificate = JSON.parse(paired.toString()) as { cert: string; key: string }

    console.log("using existing pairing certificate")

    gtv = new GoogleTV(GOOGLE_TV_ADDR, { certificate })
  } catch (e) {
    gtv = new GoogleTV(GOOGLE_TV_ADDR)
  }

  gtv.on("secretCodeRequest", () => {
    line.question("code: ", async code => gtv.sendPairingCode(code))
  })

  await gtv.init()
  writeFileSync(CERT_PATH, JSON.stringify(gtv.options.certificate))

  gtv.remote.on("power", state => console.log("power", state))
  gtv.remote.on("currentApp", app => console.log("currentApp", app))
  gtv.remote.on("volumeState", state => console.log("volumeState", state))
  gtv.remote.on("error", error => console.error("error", error))
  gtv.remote.on("ready", () => console.log("ready"))
  gtv.remote.on("unpaired", () => console.log("unpaired"))

  process.stdin.on("keypress", async (_, key) => {
    if (key.name === "up") gtv.sendKey(RemoteKeyCode.KEYCODE_DPAD_UP)
    else if (key.name === "down") gtv.sendKey(RemoteKeyCode.KEYCODE_DPAD_DOWN)
    else if (key.name === "left") gtv.sendKey(RemoteKeyCode.KEYCODE_DPAD_LEFT)
    else if (key.name === "right") gtv.sendKey(RemoteKeyCode.KEYCODE_DPAD_RIGHT)
    else if (key.name === "return") gtv.sendKey(RemoteKeyCode.KEYCODE_ENTER)
    else if (key.name === "backspace") gtv.sendKey(RemoteKeyCode.KEYCODE_BACK)
  })

  readline.emitKeypressEvents(process.stdin)
  process.stdin.setRawMode(true)

  console.log("you can now use the arrow keys, enter and return keys to navigate")
})()
