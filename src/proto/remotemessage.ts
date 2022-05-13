/* eslint-disable */
import Long from "long"
import * as _m0 from "protobufjs/minimal"

export const protobufPackage = "remote"

/** remotemessage.proto */

export enum RemoteKeyCode {
  KEYCODE_UNKNOWN = 0,
  KEYCODE_SOFT_LEFT = 1,
  KEYCODE_SOFT_RIGHT = 2,
  KEYCODE_HOME = 3,
  KEYCODE_BACK = 4,
  KEYCODE_CALL = 5,
  KEYCODE_ENDCALL = 6,
  KEYCODE_0 = 7,
  KEYCODE_1 = 8,
  KEYCODE_2 = 9,
  KEYCODE_3 = 10,
  KEYCODE_4 = 11,
  KEYCODE_5 = 12,
  KEYCODE_6 = 13,
  KEYCODE_7 = 14,
  KEYCODE_8 = 15,
  KEYCODE_9 = 16,
  KEYCODE_STAR = 17,
  KEYCODE_POUND = 18,
  KEYCODE_DPAD_UP = 19,
  KEYCODE_DPAD_DOWN = 20,
  KEYCODE_DPAD_LEFT = 21,
  KEYCODE_DPAD_RIGHT = 22,
  KEYCODE_DPAD_CENTER = 23,
  KEYCODE_VOLUME_UP = 24,
  KEYCODE_VOLUME_DOWN = 25,
  KEYCODE_POWER = 26,
  KEYCODE_CAMERA = 27,
  KEYCODE_CLEAR = 28,
  KEYCODE_A = 29,
  KEYCODE_B = 30,
  KEYCODE_C = 31,
  KEYCODE_D = 32,
  KEYCODE_E = 33,
  KEYCODE_F = 34,
  KEYCODE_G = 35,
  KEYCODE_H = 36,
  KEYCODE_I = 37,
  KEYCODE_J = 38,
  KEYCODE_K = 39,
  KEYCODE_L = 40,
  KEYCODE_M = 41,
  KEYCODE_N = 42,
  KEYCODE_O = 43,
  KEYCODE_P = 44,
  KEYCODE_Q = 45,
  KEYCODE_R = 46,
  KEYCODE_S = 47,
  KEYCODE_T = 48,
  KEYCODE_U = 49,
  KEYCODE_V = 50,
  KEYCODE_W = 51,
  KEYCODE_X = 52,
  KEYCODE_Y = 53,
  KEYCODE_Z = 54,
  KEYCODE_COMMA = 55,
  KEYCODE_PERIOD = 56,
  KEYCODE_ALT_LEFT = 57,
  KEYCODE_ALT_RIGHT = 58,
  KEYCODE_SHIFT_LEFT = 59,
  KEYCODE_SHIFT_RIGHT = 60,
  KEYCODE_TAB = 61,
  KEYCODE_SPACE = 62,
  KEYCODE_SYM = 63,
  KEYCODE_EXPLORER = 64,
  KEYCODE_ENVELOPE = 65,
  KEYCODE_ENTER = 66,
  KEYCODE_DEL = 67,
  KEYCODE_GRAVE = 68,
  KEYCODE_MINUS = 69,
  KEYCODE_EQUALS = 70,
  KEYCODE_LEFT_BRACKET = 71,
  KEYCODE_RIGHT_BRACKET = 72,
  KEYCODE_BACKSLASH = 73,
  KEYCODE_SEMICOLON = 74,
  KEYCODE_APOSTROPHE = 75,
  KEYCODE_SLASH = 76,
  KEYCODE_AT = 77,
  KEYCODE_NUM = 78,
  KEYCODE_HEADSETHOOK = 79,
  KEYCODE_FOCUS = 80,
  KEYCODE_PLUS = 81,
  KEYCODE_MENU = 82,
  KEYCODE_NOTIFICATION = 83,
  KEYCODE_SEARCH = 84,
  KEYCODE_MEDIA_PLAY_PAUSE = 85,
  KEYCODE_MEDIA_STOP = 86,
  KEYCODE_MEDIA_NEXT = 87,
  KEYCODE_MEDIA_PREVIOUS = 88,
  KEYCODE_MEDIA_REWIND = 89,
  KEYCODE_MEDIA_FAST_FORWARD = 90,
  KEYCODE_MUTE = 91,
  KEYCODE_PAGE_UP = 92,
  KEYCODE_PAGE_DOWN = 93,
  KEYCODE_PICTSYMBOLS = 94,
  KEYCODE_SWITCH_CHARSET = 95,
  KEYCODE_BUTTON_A = 96,
  KEYCODE_BUTTON_B = 97,
  KEYCODE_BUTTON_C = 98,
  KEYCODE_BUTTON_X = 99,
  KEYCODE_BUTTON_Y = 100,
  KEYCODE_BUTTON_Z = 101,
  KEYCODE_BUTTON_L1 = 102,
  KEYCODE_BUTTON_R1 = 103,
  KEYCODE_BUTTON_L2 = 104,
  KEYCODE_BUTTON_R2 = 105,
  KEYCODE_BUTTON_THUMBL = 106,
  KEYCODE_BUTTON_THUMBR = 107,
  KEYCODE_BUTTON_START = 108,
  KEYCODE_BUTTON_SELECT = 109,
  KEYCODE_BUTTON_MODE = 110,
  KEYCODE_ESCAPE = 111,
  KEYCODE_FORWARD_DEL = 112,
  KEYCODE_CTRL_LEFT = 113,
  KEYCODE_CTRL_RIGHT = 114,
  KEYCODE_CAPS_LOCK = 115,
  KEYCODE_SCROLL_LOCK = 116,
  KEYCODE_META_LEFT = 117,
  KEYCODE_META_RIGHT = 118,
  KEYCODE_FUNCTION = 119,
  KEYCODE_SYSRQ = 120,
  KEYCODE_BREAK = 121,
  KEYCODE_MOVE_HOME = 122,
  KEYCODE_MOVE_END = 123,
  KEYCODE_INSERT = 124,
  KEYCODE_FORWARD = 125,
  KEYCODE_MEDIA_PLAY = 126,
  KEYCODE_MEDIA_PAUSE = 127,
  KEYCODE_MEDIA_CLOSE = 128,
  KEYCODE_MEDIA_EJECT = 129,
  KEYCODE_MEDIA_RECORD = 130,
  KEYCODE_F1 = 131,
  KEYCODE_F2 = 132,
  KEYCODE_F3 = 133,
  KEYCODE_F4 = 134,
  KEYCODE_F5 = 135,
  KEYCODE_F6 = 136,
  KEYCODE_F7 = 137,
  KEYCODE_F8 = 138,
  KEYCODE_F9 = 139,
  KEYCODE_F10 = 140,
  KEYCODE_F11 = 141,
  KEYCODE_F12 = 142,
  KEYCODE_NUM_LOCK = 143,
  KEYCODE_NUMPAD_0 = 144,
  KEYCODE_NUMPAD_1 = 145,
  KEYCODE_NUMPAD_2 = 146,
  KEYCODE_NUMPAD_3 = 147,
  KEYCODE_NUMPAD_4 = 148,
  KEYCODE_NUMPAD_5 = 149,
  KEYCODE_NUMPAD_6 = 150,
  KEYCODE_NUMPAD_7 = 151,
  KEYCODE_NUMPAD_8 = 152,
  KEYCODE_NUMPAD_9 = 153,
  KEYCODE_NUMPAD_DIVIDE = 154,
  KEYCODE_NUMPAD_MULTIPLY = 155,
  KEYCODE_NUMPAD_SUBTRACT = 156,
  KEYCODE_NUMPAD_ADD = 157,
  KEYCODE_NUMPAD_DOT = 158,
  KEYCODE_NUMPAD_COMMA = 159,
  KEYCODE_NUMPAD_ENTER = 160,
  KEYCODE_NUMPAD_EQUALS = 161,
  KEYCODE_NUMPAD_LEFT_PAREN = 162,
  KEYCODE_NUMPAD_RIGHT_PAREN = 163,
  KEYCODE_VOLUME_MUTE = 164,
  KEYCODE_INFO = 165,
  KEYCODE_CHANNEL_UP = 166,
  KEYCODE_CHANNEL_DOWN = 167,
  KEYCODE_ZOOM_IN = 168,
  KEYCODE_ZOOM_OUT = 169,
  KEYCODE_TV = 170,
  KEYCODE_WINDOW = 171,
  KEYCODE_GUIDE = 172,
  KEYCODE_DVR = 173,
  KEYCODE_BOOKMARK = 174,
  KEYCODE_CAPTIONS = 175,
  KEYCODE_SETTINGS = 176,
  KEYCODE_TV_POWER = 177,
  KEYCODE_TV_INPUT = 178,
  KEYCODE_STB_POWER = 179,
  KEYCODE_STB_INPUT = 180,
  KEYCODE_AVR_POWER = 181,
  KEYCODE_AVR_INPUT = 182,
  KEYCODE_PROG_RED = 183,
  KEYCODE_PROG_GREEN = 184,
  KEYCODE_PROG_YELLOW = 185,
  KEYCODE_PROG_BLUE = 186,
  KEYCODE_APP_SWITCH = 187,
  KEYCODE_BUTTON_1 = 188,
  KEYCODE_BUTTON_2 = 189,
  KEYCODE_BUTTON_3 = 190,
  KEYCODE_BUTTON_4 = 191,
  KEYCODE_BUTTON_5 = 192,
  KEYCODE_BUTTON_6 = 193,
  KEYCODE_BUTTON_7 = 194,
  KEYCODE_BUTTON_8 = 195,
  KEYCODE_BUTTON_9 = 196,
  KEYCODE_BUTTON_10 = 197,
  KEYCODE_BUTTON_11 = 198,
  KEYCODE_BUTTON_12 = 199,
  KEYCODE_BUTTON_13 = 200,
  KEYCODE_BUTTON_14 = 201,
  KEYCODE_BUTTON_15 = 202,
  KEYCODE_BUTTON_16 = 203,
  KEYCODE_LANGUAGE_SWITCH = 204,
  KEYCODE_MANNER_MODE = 205,
  KEYCODE_3D_MODE = 206,
  KEYCODE_CONTACTS = 207,
  KEYCODE_CALENDAR = 208,
  KEYCODE_MUSIC = 209,
  KEYCODE_CALCULATOR = 210,
  KEYCODE_ZENKAKU_HANKAKU = 211,
  KEYCODE_EISU = 212,
  KEYCODE_MUHENKAN = 213,
  KEYCODE_HENKAN = 214,
  KEYCODE_KATAKANA_HIRAGANA = 215,
  KEYCODE_YEN = 216,
  KEYCODE_RO = 217,
  KEYCODE_KANA = 218,
  KEYCODE_ASSIST = 219,
  KEYCODE_BRIGHTNESS_DOWN = 220,
  KEYCODE_BRIGHTNESS_UP = 221,
  KEYCODE_MEDIA_AUDIO_TRACK = 222,
  KEYCODE_SLEEP = 223,
  KEYCODE_WAKEUP = 224,
  KEYCODE_PAIRING = 225,
  KEYCODE_MEDIA_TOP_MENU = 226,
  KEYCODE_11 = 227,
  KEYCODE_12 = 228,
  KEYCODE_LAST_CHANNEL = 229,
  KEYCODE_TV_DATA_SERVICE = 230,
  KEYCODE_VOICE_ASSIST = 231,
  KEYCODE_TV_RADIO_SERVICE = 232,
  KEYCODE_TV_TELETEXT = 233,
  KEYCODE_TV_NUMBER_ENTRY = 234,
  KEYCODE_TV_TERRESTRIAL_ANALOG = 235,
  KEYCODE_TV_TERRESTRIAL_DIGITAL = 236,
  KEYCODE_TV_SATELLITE = 237,
  KEYCODE_TV_SATELLITE_BS = 238,
  KEYCODE_TV_SATELLITE_CS = 239,
  KEYCODE_TV_SATELLITE_SERVICE = 240,
  KEYCODE_TV_NETWORK = 241,
  KEYCODE_TV_ANTENNA_CABLE = 242,
  KEYCODE_TV_INPUT_HDMI_1 = 243,
  KEYCODE_TV_INPUT_HDMI_2 = 244,
  KEYCODE_TV_INPUT_HDMI_3 = 245,
  KEYCODE_TV_INPUT_HDMI_4 = 246,
  KEYCODE_TV_INPUT_COMPOSITE_1 = 247,
  KEYCODE_TV_INPUT_COMPOSITE_2 = 248,
  KEYCODE_TV_INPUT_COMPONENT_1 = 249,
  KEYCODE_TV_INPUT_COMPONENT_2 = 250,
  KEYCODE_TV_INPUT_VGA_1 = 251,
  KEYCODE_TV_AUDIO_DESCRIPTION = 252,
  KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP = 253,
  KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN = 254,
  KEYCODE_TV_ZOOM_MODE = 255,
  KEYCODE_TV_CONTENTS_MENU = 256,
  KEYCODE_TV_MEDIA_CONTEXT_MENU = 257,
  KEYCODE_TV_TIMER_PROGRAMMING = 258,
  KEYCODE_HELP = 259,
  KEYCODE_NAVIGATE_PREVIOUS = 260,
  KEYCODE_NAVIGATE_NEXT = 261,
  KEYCODE_NAVIGATE_IN = 262,
  KEYCODE_NAVIGATE_OUT = 263,
  KEYCODE_STEM_PRIMARY = 264,
  KEYCODE_STEM_1 = 265,
  KEYCODE_STEM_2 = 266,
  KEYCODE_STEM_3 = 267,
  KEYCODE_DPAD_UP_LEFT = 268,
  KEYCODE_DPAD_DOWN_LEFT = 269,
  KEYCODE_DPAD_UP_RIGHT = 270,
  KEYCODE_DPAD_DOWN_RIGHT = 271,
  KEYCODE_MEDIA_SKIP_FORWARD = 272,
  KEYCODE_MEDIA_SKIP_BACKWARD = 273,
  KEYCODE_MEDIA_STEP_FORWARD = 274,
  KEYCODE_MEDIA_STEP_BACKWARD = 275,
  KEYCODE_SOFT_SLEEP = 276,
  KEYCODE_CUT = 277,
  KEYCODE_COPY = 278,
  KEYCODE_PASTE = 279,
  KEYCODE_SYSTEM_NAVIGATION_UP = 280,
  KEYCODE_SYSTEM_NAVIGATION_DOWN = 281,
  KEYCODE_SYSTEM_NAVIGATION_LEFT = 282,
  KEYCODE_SYSTEM_NAVIGATION_RIGHT = 283,
  KEYCODE_ALL_APPS = 284,
  KEYCODE_REFRESH = 285,
  KEYCODE_THUMBS_UP = 286,
  KEYCODE_THUMBS_DOWN = 287,
  KEYCODE_PROFILE_SWITCH = 288,
  KEYCODE_VIDEO_APP_1 = 289,
  KEYCODE_VIDEO_APP_2 = 290,
  KEYCODE_VIDEO_APP_3 = 291,
  KEYCODE_VIDEO_APP_4 = 292,
  KEYCODE_VIDEO_APP_5 = 293,
  KEYCODE_VIDEO_APP_6 = 294,
  KEYCODE_VIDEO_APP_7 = 295,
  KEYCODE_VIDEO_APP_8 = 296,
  KEYCODE_FEATURED_APP_1 = 297,
  KEYCODE_FEATURED_APP_2 = 298,
  KEYCODE_FEATURED_APP_3 = 299,
  KEYCODE_FEATURED_APP_4 = 300,
  KEYCODE_DEMO_APP_1 = 301,
  KEYCODE_DEMO_APP_2 = 302,
  KEYCODE_DEMO_APP_3 = 303,
  KEYCODE_DEMO_APP_4 = 304,
}

export function remoteKeyCodeFromJSON(object: any): RemoteKeyCode {
  switch (object) {
    case 0:
    case "KEYCODE_UNKNOWN":
      return RemoteKeyCode.KEYCODE_UNKNOWN
    case 1:
    case "KEYCODE_SOFT_LEFT":
      return RemoteKeyCode.KEYCODE_SOFT_LEFT
    case 2:
    case "KEYCODE_SOFT_RIGHT":
      return RemoteKeyCode.KEYCODE_SOFT_RIGHT
    case 3:
    case "KEYCODE_HOME":
      return RemoteKeyCode.KEYCODE_HOME
    case 4:
    case "KEYCODE_BACK":
      return RemoteKeyCode.KEYCODE_BACK
    case 5:
    case "KEYCODE_CALL":
      return RemoteKeyCode.KEYCODE_CALL
    case 6:
    case "KEYCODE_ENDCALL":
      return RemoteKeyCode.KEYCODE_ENDCALL
    case 7:
    case "KEYCODE_0":
      return RemoteKeyCode.KEYCODE_0
    case 8:
    case "KEYCODE_1":
      return RemoteKeyCode.KEYCODE_1
    case 9:
    case "KEYCODE_2":
      return RemoteKeyCode.KEYCODE_2
    case 10:
    case "KEYCODE_3":
      return RemoteKeyCode.KEYCODE_3
    case 11:
    case "KEYCODE_4":
      return RemoteKeyCode.KEYCODE_4
    case 12:
    case "KEYCODE_5":
      return RemoteKeyCode.KEYCODE_5
    case 13:
    case "KEYCODE_6":
      return RemoteKeyCode.KEYCODE_6
    case 14:
    case "KEYCODE_7":
      return RemoteKeyCode.KEYCODE_7
    case 15:
    case "KEYCODE_8":
      return RemoteKeyCode.KEYCODE_8
    case 16:
    case "KEYCODE_9":
      return RemoteKeyCode.KEYCODE_9
    case 17:
    case "KEYCODE_STAR":
      return RemoteKeyCode.KEYCODE_STAR
    case 18:
    case "KEYCODE_POUND":
      return RemoteKeyCode.KEYCODE_POUND
    case 19:
    case "KEYCODE_DPAD_UP":
      return RemoteKeyCode.KEYCODE_DPAD_UP
    case 20:
    case "KEYCODE_DPAD_DOWN":
      return RemoteKeyCode.KEYCODE_DPAD_DOWN
    case 21:
    case "KEYCODE_DPAD_LEFT":
      return RemoteKeyCode.KEYCODE_DPAD_LEFT
    case 22:
    case "KEYCODE_DPAD_RIGHT":
      return RemoteKeyCode.KEYCODE_DPAD_RIGHT
    case 23:
    case "KEYCODE_DPAD_CENTER":
      return RemoteKeyCode.KEYCODE_DPAD_CENTER
    case 24:
    case "KEYCODE_VOLUME_UP":
      return RemoteKeyCode.KEYCODE_VOLUME_UP
    case 25:
    case "KEYCODE_VOLUME_DOWN":
      return RemoteKeyCode.KEYCODE_VOLUME_DOWN
    case 26:
    case "KEYCODE_POWER":
      return RemoteKeyCode.KEYCODE_POWER
    case 27:
    case "KEYCODE_CAMERA":
      return RemoteKeyCode.KEYCODE_CAMERA
    case 28:
    case "KEYCODE_CLEAR":
      return RemoteKeyCode.KEYCODE_CLEAR
    case 29:
    case "KEYCODE_A":
      return RemoteKeyCode.KEYCODE_A
    case 30:
    case "KEYCODE_B":
      return RemoteKeyCode.KEYCODE_B
    case 31:
    case "KEYCODE_C":
      return RemoteKeyCode.KEYCODE_C
    case 32:
    case "KEYCODE_D":
      return RemoteKeyCode.KEYCODE_D
    case 33:
    case "KEYCODE_E":
      return RemoteKeyCode.KEYCODE_E
    case 34:
    case "KEYCODE_F":
      return RemoteKeyCode.KEYCODE_F
    case 35:
    case "KEYCODE_G":
      return RemoteKeyCode.KEYCODE_G
    case 36:
    case "KEYCODE_H":
      return RemoteKeyCode.KEYCODE_H
    case 37:
    case "KEYCODE_I":
      return RemoteKeyCode.KEYCODE_I
    case 38:
    case "KEYCODE_J":
      return RemoteKeyCode.KEYCODE_J
    case 39:
    case "KEYCODE_K":
      return RemoteKeyCode.KEYCODE_K
    case 40:
    case "KEYCODE_L":
      return RemoteKeyCode.KEYCODE_L
    case 41:
    case "KEYCODE_M":
      return RemoteKeyCode.KEYCODE_M
    case 42:
    case "KEYCODE_N":
      return RemoteKeyCode.KEYCODE_N
    case 43:
    case "KEYCODE_O":
      return RemoteKeyCode.KEYCODE_O
    case 44:
    case "KEYCODE_P":
      return RemoteKeyCode.KEYCODE_P
    case 45:
    case "KEYCODE_Q":
      return RemoteKeyCode.KEYCODE_Q
    case 46:
    case "KEYCODE_R":
      return RemoteKeyCode.KEYCODE_R
    case 47:
    case "KEYCODE_S":
      return RemoteKeyCode.KEYCODE_S
    case 48:
    case "KEYCODE_T":
      return RemoteKeyCode.KEYCODE_T
    case 49:
    case "KEYCODE_U":
      return RemoteKeyCode.KEYCODE_U
    case 50:
    case "KEYCODE_V":
      return RemoteKeyCode.KEYCODE_V
    case 51:
    case "KEYCODE_W":
      return RemoteKeyCode.KEYCODE_W
    case 52:
    case "KEYCODE_X":
      return RemoteKeyCode.KEYCODE_X
    case 53:
    case "KEYCODE_Y":
      return RemoteKeyCode.KEYCODE_Y
    case 54:
    case "KEYCODE_Z":
      return RemoteKeyCode.KEYCODE_Z
    case 55:
    case "KEYCODE_COMMA":
      return RemoteKeyCode.KEYCODE_COMMA
    case 56:
    case "KEYCODE_PERIOD":
      return RemoteKeyCode.KEYCODE_PERIOD
    case 57:
    case "KEYCODE_ALT_LEFT":
      return RemoteKeyCode.KEYCODE_ALT_LEFT
    case 58:
    case "KEYCODE_ALT_RIGHT":
      return RemoteKeyCode.KEYCODE_ALT_RIGHT
    case 59:
    case "KEYCODE_SHIFT_LEFT":
      return RemoteKeyCode.KEYCODE_SHIFT_LEFT
    case 60:
    case "KEYCODE_SHIFT_RIGHT":
      return RemoteKeyCode.KEYCODE_SHIFT_RIGHT
    case 61:
    case "KEYCODE_TAB":
      return RemoteKeyCode.KEYCODE_TAB
    case 62:
    case "KEYCODE_SPACE":
      return RemoteKeyCode.KEYCODE_SPACE
    case 63:
    case "KEYCODE_SYM":
      return RemoteKeyCode.KEYCODE_SYM
    case 64:
    case "KEYCODE_EXPLORER":
      return RemoteKeyCode.KEYCODE_EXPLORER
    case 65:
    case "KEYCODE_ENVELOPE":
      return RemoteKeyCode.KEYCODE_ENVELOPE
    case 66:
    case "KEYCODE_ENTER":
      return RemoteKeyCode.KEYCODE_ENTER
    case 67:
    case "KEYCODE_DEL":
      return RemoteKeyCode.KEYCODE_DEL
    case 68:
    case "KEYCODE_GRAVE":
      return RemoteKeyCode.KEYCODE_GRAVE
    case 69:
    case "KEYCODE_MINUS":
      return RemoteKeyCode.KEYCODE_MINUS
    case 70:
    case "KEYCODE_EQUALS":
      return RemoteKeyCode.KEYCODE_EQUALS
    case 71:
    case "KEYCODE_LEFT_BRACKET":
      return RemoteKeyCode.KEYCODE_LEFT_BRACKET
    case 72:
    case "KEYCODE_RIGHT_BRACKET":
      return RemoteKeyCode.KEYCODE_RIGHT_BRACKET
    case 73:
    case "KEYCODE_BACKSLASH":
      return RemoteKeyCode.KEYCODE_BACKSLASH
    case 74:
    case "KEYCODE_SEMICOLON":
      return RemoteKeyCode.KEYCODE_SEMICOLON
    case 75:
    case "KEYCODE_APOSTROPHE":
      return RemoteKeyCode.KEYCODE_APOSTROPHE
    case 76:
    case "KEYCODE_SLASH":
      return RemoteKeyCode.KEYCODE_SLASH
    case 77:
    case "KEYCODE_AT":
      return RemoteKeyCode.KEYCODE_AT
    case 78:
    case "KEYCODE_NUM":
      return RemoteKeyCode.KEYCODE_NUM
    case 79:
    case "KEYCODE_HEADSETHOOK":
      return RemoteKeyCode.KEYCODE_HEADSETHOOK
    case 80:
    case "KEYCODE_FOCUS":
      return RemoteKeyCode.KEYCODE_FOCUS
    case 81:
    case "KEYCODE_PLUS":
      return RemoteKeyCode.KEYCODE_PLUS
    case 82:
    case "KEYCODE_MENU":
      return RemoteKeyCode.KEYCODE_MENU
    case 83:
    case "KEYCODE_NOTIFICATION":
      return RemoteKeyCode.KEYCODE_NOTIFICATION
    case 84:
    case "KEYCODE_SEARCH":
      return RemoteKeyCode.KEYCODE_SEARCH
    case 85:
    case "KEYCODE_MEDIA_PLAY_PAUSE":
      return RemoteKeyCode.KEYCODE_MEDIA_PLAY_PAUSE
    case 86:
    case "KEYCODE_MEDIA_STOP":
      return RemoteKeyCode.KEYCODE_MEDIA_STOP
    case 87:
    case "KEYCODE_MEDIA_NEXT":
      return RemoteKeyCode.KEYCODE_MEDIA_NEXT
    case 88:
    case "KEYCODE_MEDIA_PREVIOUS":
      return RemoteKeyCode.KEYCODE_MEDIA_PREVIOUS
    case 89:
    case "KEYCODE_MEDIA_REWIND":
      return RemoteKeyCode.KEYCODE_MEDIA_REWIND
    case 90:
    case "KEYCODE_MEDIA_FAST_FORWARD":
      return RemoteKeyCode.KEYCODE_MEDIA_FAST_FORWARD
    case 91:
    case "KEYCODE_MUTE":
      return RemoteKeyCode.KEYCODE_MUTE
    case 92:
    case "KEYCODE_PAGE_UP":
      return RemoteKeyCode.KEYCODE_PAGE_UP
    case 93:
    case "KEYCODE_PAGE_DOWN":
      return RemoteKeyCode.KEYCODE_PAGE_DOWN
    case 94:
    case "KEYCODE_PICTSYMBOLS":
      return RemoteKeyCode.KEYCODE_PICTSYMBOLS
    case 95:
    case "KEYCODE_SWITCH_CHARSET":
      return RemoteKeyCode.KEYCODE_SWITCH_CHARSET
    case 96:
    case "KEYCODE_BUTTON_A":
      return RemoteKeyCode.KEYCODE_BUTTON_A
    case 97:
    case "KEYCODE_BUTTON_B":
      return RemoteKeyCode.KEYCODE_BUTTON_B
    case 98:
    case "KEYCODE_BUTTON_C":
      return RemoteKeyCode.KEYCODE_BUTTON_C
    case 99:
    case "KEYCODE_BUTTON_X":
      return RemoteKeyCode.KEYCODE_BUTTON_X
    case 100:
    case "KEYCODE_BUTTON_Y":
      return RemoteKeyCode.KEYCODE_BUTTON_Y
    case 101:
    case "KEYCODE_BUTTON_Z":
      return RemoteKeyCode.KEYCODE_BUTTON_Z
    case 102:
    case "KEYCODE_BUTTON_L1":
      return RemoteKeyCode.KEYCODE_BUTTON_L1
    case 103:
    case "KEYCODE_BUTTON_R1":
      return RemoteKeyCode.KEYCODE_BUTTON_R1
    case 104:
    case "KEYCODE_BUTTON_L2":
      return RemoteKeyCode.KEYCODE_BUTTON_L2
    case 105:
    case "KEYCODE_BUTTON_R2":
      return RemoteKeyCode.KEYCODE_BUTTON_R2
    case 106:
    case "KEYCODE_BUTTON_THUMBL":
      return RemoteKeyCode.KEYCODE_BUTTON_THUMBL
    case 107:
    case "KEYCODE_BUTTON_THUMBR":
      return RemoteKeyCode.KEYCODE_BUTTON_THUMBR
    case 108:
    case "KEYCODE_BUTTON_START":
      return RemoteKeyCode.KEYCODE_BUTTON_START
    case 109:
    case "KEYCODE_BUTTON_SELECT":
      return RemoteKeyCode.KEYCODE_BUTTON_SELECT
    case 110:
    case "KEYCODE_BUTTON_MODE":
      return RemoteKeyCode.KEYCODE_BUTTON_MODE
    case 111:
    case "KEYCODE_ESCAPE":
      return RemoteKeyCode.KEYCODE_ESCAPE
    case 112:
    case "KEYCODE_FORWARD_DEL":
      return RemoteKeyCode.KEYCODE_FORWARD_DEL
    case 113:
    case "KEYCODE_CTRL_LEFT":
      return RemoteKeyCode.KEYCODE_CTRL_LEFT
    case 114:
    case "KEYCODE_CTRL_RIGHT":
      return RemoteKeyCode.KEYCODE_CTRL_RIGHT
    case 115:
    case "KEYCODE_CAPS_LOCK":
      return RemoteKeyCode.KEYCODE_CAPS_LOCK
    case 116:
    case "KEYCODE_SCROLL_LOCK":
      return RemoteKeyCode.KEYCODE_SCROLL_LOCK
    case 117:
    case "KEYCODE_META_LEFT":
      return RemoteKeyCode.KEYCODE_META_LEFT
    case 118:
    case "KEYCODE_META_RIGHT":
      return RemoteKeyCode.KEYCODE_META_RIGHT
    case 119:
    case "KEYCODE_FUNCTION":
      return RemoteKeyCode.KEYCODE_FUNCTION
    case 120:
    case "KEYCODE_SYSRQ":
      return RemoteKeyCode.KEYCODE_SYSRQ
    case 121:
    case "KEYCODE_BREAK":
      return RemoteKeyCode.KEYCODE_BREAK
    case 122:
    case "KEYCODE_MOVE_HOME":
      return RemoteKeyCode.KEYCODE_MOVE_HOME
    case 123:
    case "KEYCODE_MOVE_END":
      return RemoteKeyCode.KEYCODE_MOVE_END
    case 124:
    case "KEYCODE_INSERT":
      return RemoteKeyCode.KEYCODE_INSERT
    case 125:
    case "KEYCODE_FORWARD":
      return RemoteKeyCode.KEYCODE_FORWARD
    case 126:
    case "KEYCODE_MEDIA_PLAY":
      return RemoteKeyCode.KEYCODE_MEDIA_PLAY
    case 127:
    case "KEYCODE_MEDIA_PAUSE":
      return RemoteKeyCode.KEYCODE_MEDIA_PAUSE
    case 128:
    case "KEYCODE_MEDIA_CLOSE":
      return RemoteKeyCode.KEYCODE_MEDIA_CLOSE
    case 129:
    case "KEYCODE_MEDIA_EJECT":
      return RemoteKeyCode.KEYCODE_MEDIA_EJECT
    case 130:
    case "KEYCODE_MEDIA_RECORD":
      return RemoteKeyCode.KEYCODE_MEDIA_RECORD
    case 131:
    case "KEYCODE_F1":
      return RemoteKeyCode.KEYCODE_F1
    case 132:
    case "KEYCODE_F2":
      return RemoteKeyCode.KEYCODE_F2
    case 133:
    case "KEYCODE_F3":
      return RemoteKeyCode.KEYCODE_F3
    case 134:
    case "KEYCODE_F4":
      return RemoteKeyCode.KEYCODE_F4
    case 135:
    case "KEYCODE_F5":
      return RemoteKeyCode.KEYCODE_F5
    case 136:
    case "KEYCODE_F6":
      return RemoteKeyCode.KEYCODE_F6
    case 137:
    case "KEYCODE_F7":
      return RemoteKeyCode.KEYCODE_F7
    case 138:
    case "KEYCODE_F8":
      return RemoteKeyCode.KEYCODE_F8
    case 139:
    case "KEYCODE_F9":
      return RemoteKeyCode.KEYCODE_F9
    case 140:
    case "KEYCODE_F10":
      return RemoteKeyCode.KEYCODE_F10
    case 141:
    case "KEYCODE_F11":
      return RemoteKeyCode.KEYCODE_F11
    case 142:
    case "KEYCODE_F12":
      return RemoteKeyCode.KEYCODE_F12
    case 143:
    case "KEYCODE_NUM_LOCK":
      return RemoteKeyCode.KEYCODE_NUM_LOCK
    case 144:
    case "KEYCODE_NUMPAD_0":
      return RemoteKeyCode.KEYCODE_NUMPAD_0
    case 145:
    case "KEYCODE_NUMPAD_1":
      return RemoteKeyCode.KEYCODE_NUMPAD_1
    case 146:
    case "KEYCODE_NUMPAD_2":
      return RemoteKeyCode.KEYCODE_NUMPAD_2
    case 147:
    case "KEYCODE_NUMPAD_3":
      return RemoteKeyCode.KEYCODE_NUMPAD_3
    case 148:
    case "KEYCODE_NUMPAD_4":
      return RemoteKeyCode.KEYCODE_NUMPAD_4
    case 149:
    case "KEYCODE_NUMPAD_5":
      return RemoteKeyCode.KEYCODE_NUMPAD_5
    case 150:
    case "KEYCODE_NUMPAD_6":
      return RemoteKeyCode.KEYCODE_NUMPAD_6
    case 151:
    case "KEYCODE_NUMPAD_7":
      return RemoteKeyCode.KEYCODE_NUMPAD_7
    case 152:
    case "KEYCODE_NUMPAD_8":
      return RemoteKeyCode.KEYCODE_NUMPAD_8
    case 153:
    case "KEYCODE_NUMPAD_9":
      return RemoteKeyCode.KEYCODE_NUMPAD_9
    case 154:
    case "KEYCODE_NUMPAD_DIVIDE":
      return RemoteKeyCode.KEYCODE_NUMPAD_DIVIDE
    case 155:
    case "KEYCODE_NUMPAD_MULTIPLY":
      return RemoteKeyCode.KEYCODE_NUMPAD_MULTIPLY
    case 156:
    case "KEYCODE_NUMPAD_SUBTRACT":
      return RemoteKeyCode.KEYCODE_NUMPAD_SUBTRACT
    case 157:
    case "KEYCODE_NUMPAD_ADD":
      return RemoteKeyCode.KEYCODE_NUMPAD_ADD
    case 158:
    case "KEYCODE_NUMPAD_DOT":
      return RemoteKeyCode.KEYCODE_NUMPAD_DOT
    case 159:
    case "KEYCODE_NUMPAD_COMMA":
      return RemoteKeyCode.KEYCODE_NUMPAD_COMMA
    case 160:
    case "KEYCODE_NUMPAD_ENTER":
      return RemoteKeyCode.KEYCODE_NUMPAD_ENTER
    case 161:
    case "KEYCODE_NUMPAD_EQUALS":
      return RemoteKeyCode.KEYCODE_NUMPAD_EQUALS
    case 162:
    case "KEYCODE_NUMPAD_LEFT_PAREN":
      return RemoteKeyCode.KEYCODE_NUMPAD_LEFT_PAREN
    case 163:
    case "KEYCODE_NUMPAD_RIGHT_PAREN":
      return RemoteKeyCode.KEYCODE_NUMPAD_RIGHT_PAREN
    case 164:
    case "KEYCODE_VOLUME_MUTE":
      return RemoteKeyCode.KEYCODE_VOLUME_MUTE
    case 165:
    case "KEYCODE_INFO":
      return RemoteKeyCode.KEYCODE_INFO
    case 166:
    case "KEYCODE_CHANNEL_UP":
      return RemoteKeyCode.KEYCODE_CHANNEL_UP
    case 167:
    case "KEYCODE_CHANNEL_DOWN":
      return RemoteKeyCode.KEYCODE_CHANNEL_DOWN
    case 168:
    case "KEYCODE_ZOOM_IN":
      return RemoteKeyCode.KEYCODE_ZOOM_IN
    case 169:
    case "KEYCODE_ZOOM_OUT":
      return RemoteKeyCode.KEYCODE_ZOOM_OUT
    case 170:
    case "KEYCODE_TV":
      return RemoteKeyCode.KEYCODE_TV
    case 171:
    case "KEYCODE_WINDOW":
      return RemoteKeyCode.KEYCODE_WINDOW
    case 172:
    case "KEYCODE_GUIDE":
      return RemoteKeyCode.KEYCODE_GUIDE
    case 173:
    case "KEYCODE_DVR":
      return RemoteKeyCode.KEYCODE_DVR
    case 174:
    case "KEYCODE_BOOKMARK":
      return RemoteKeyCode.KEYCODE_BOOKMARK
    case 175:
    case "KEYCODE_CAPTIONS":
      return RemoteKeyCode.KEYCODE_CAPTIONS
    case 176:
    case "KEYCODE_SETTINGS":
      return RemoteKeyCode.KEYCODE_SETTINGS
    case 177:
    case "KEYCODE_TV_POWER":
      return RemoteKeyCode.KEYCODE_TV_POWER
    case 178:
    case "KEYCODE_TV_INPUT":
      return RemoteKeyCode.KEYCODE_TV_INPUT
    case 179:
    case "KEYCODE_STB_POWER":
      return RemoteKeyCode.KEYCODE_STB_POWER
    case 180:
    case "KEYCODE_STB_INPUT":
      return RemoteKeyCode.KEYCODE_STB_INPUT
    case 181:
    case "KEYCODE_AVR_POWER":
      return RemoteKeyCode.KEYCODE_AVR_POWER
    case 182:
    case "KEYCODE_AVR_INPUT":
      return RemoteKeyCode.KEYCODE_AVR_INPUT
    case 183:
    case "KEYCODE_PROG_RED":
      return RemoteKeyCode.KEYCODE_PROG_RED
    case 184:
    case "KEYCODE_PROG_GREEN":
      return RemoteKeyCode.KEYCODE_PROG_GREEN
    case 185:
    case "KEYCODE_PROG_YELLOW":
      return RemoteKeyCode.KEYCODE_PROG_YELLOW
    case 186:
    case "KEYCODE_PROG_BLUE":
      return RemoteKeyCode.KEYCODE_PROG_BLUE
    case 187:
    case "KEYCODE_APP_SWITCH":
      return RemoteKeyCode.KEYCODE_APP_SWITCH
    case 188:
    case "KEYCODE_BUTTON_1":
      return RemoteKeyCode.KEYCODE_BUTTON_1
    case 189:
    case "KEYCODE_BUTTON_2":
      return RemoteKeyCode.KEYCODE_BUTTON_2
    case 190:
    case "KEYCODE_BUTTON_3":
      return RemoteKeyCode.KEYCODE_BUTTON_3
    case 191:
    case "KEYCODE_BUTTON_4":
      return RemoteKeyCode.KEYCODE_BUTTON_4
    case 192:
    case "KEYCODE_BUTTON_5":
      return RemoteKeyCode.KEYCODE_BUTTON_5
    case 193:
    case "KEYCODE_BUTTON_6":
      return RemoteKeyCode.KEYCODE_BUTTON_6
    case 194:
    case "KEYCODE_BUTTON_7":
      return RemoteKeyCode.KEYCODE_BUTTON_7
    case 195:
    case "KEYCODE_BUTTON_8":
      return RemoteKeyCode.KEYCODE_BUTTON_8
    case 196:
    case "KEYCODE_BUTTON_9":
      return RemoteKeyCode.KEYCODE_BUTTON_9
    case 197:
    case "KEYCODE_BUTTON_10":
      return RemoteKeyCode.KEYCODE_BUTTON_10
    case 198:
    case "KEYCODE_BUTTON_11":
      return RemoteKeyCode.KEYCODE_BUTTON_11
    case 199:
    case "KEYCODE_BUTTON_12":
      return RemoteKeyCode.KEYCODE_BUTTON_12
    case 200:
    case "KEYCODE_BUTTON_13":
      return RemoteKeyCode.KEYCODE_BUTTON_13
    case 201:
    case "KEYCODE_BUTTON_14":
      return RemoteKeyCode.KEYCODE_BUTTON_14
    case 202:
    case "KEYCODE_BUTTON_15":
      return RemoteKeyCode.KEYCODE_BUTTON_15
    case 203:
    case "KEYCODE_BUTTON_16":
      return RemoteKeyCode.KEYCODE_BUTTON_16
    case 204:
    case "KEYCODE_LANGUAGE_SWITCH":
      return RemoteKeyCode.KEYCODE_LANGUAGE_SWITCH
    case 205:
    case "KEYCODE_MANNER_MODE":
      return RemoteKeyCode.KEYCODE_MANNER_MODE
    case 206:
    case "KEYCODE_3D_MODE":
      return RemoteKeyCode.KEYCODE_3D_MODE
    case 207:
    case "KEYCODE_CONTACTS":
      return RemoteKeyCode.KEYCODE_CONTACTS
    case 208:
    case "KEYCODE_CALENDAR":
      return RemoteKeyCode.KEYCODE_CALENDAR
    case 209:
    case "KEYCODE_MUSIC":
      return RemoteKeyCode.KEYCODE_MUSIC
    case 210:
    case "KEYCODE_CALCULATOR":
      return RemoteKeyCode.KEYCODE_CALCULATOR
    case 211:
    case "KEYCODE_ZENKAKU_HANKAKU":
      return RemoteKeyCode.KEYCODE_ZENKAKU_HANKAKU
    case 212:
    case "KEYCODE_EISU":
      return RemoteKeyCode.KEYCODE_EISU
    case 213:
    case "KEYCODE_MUHENKAN":
      return RemoteKeyCode.KEYCODE_MUHENKAN
    case 214:
    case "KEYCODE_HENKAN":
      return RemoteKeyCode.KEYCODE_HENKAN
    case 215:
    case "KEYCODE_KATAKANA_HIRAGANA":
      return RemoteKeyCode.KEYCODE_KATAKANA_HIRAGANA
    case 216:
    case "KEYCODE_YEN":
      return RemoteKeyCode.KEYCODE_YEN
    case 217:
    case "KEYCODE_RO":
      return RemoteKeyCode.KEYCODE_RO
    case 218:
    case "KEYCODE_KANA":
      return RemoteKeyCode.KEYCODE_KANA
    case 219:
    case "KEYCODE_ASSIST":
      return RemoteKeyCode.KEYCODE_ASSIST
    case 220:
    case "KEYCODE_BRIGHTNESS_DOWN":
      return RemoteKeyCode.KEYCODE_BRIGHTNESS_DOWN
    case 221:
    case "KEYCODE_BRIGHTNESS_UP":
      return RemoteKeyCode.KEYCODE_BRIGHTNESS_UP
    case 222:
    case "KEYCODE_MEDIA_AUDIO_TRACK":
      return RemoteKeyCode.KEYCODE_MEDIA_AUDIO_TRACK
    case 223:
    case "KEYCODE_SLEEP":
      return RemoteKeyCode.KEYCODE_SLEEP
    case 224:
    case "KEYCODE_WAKEUP":
      return RemoteKeyCode.KEYCODE_WAKEUP
    case 225:
    case "KEYCODE_PAIRING":
      return RemoteKeyCode.KEYCODE_PAIRING
    case 226:
    case "KEYCODE_MEDIA_TOP_MENU":
      return RemoteKeyCode.KEYCODE_MEDIA_TOP_MENU
    case 227:
    case "KEYCODE_11":
      return RemoteKeyCode.KEYCODE_11
    case 228:
    case "KEYCODE_12":
      return RemoteKeyCode.KEYCODE_12
    case 229:
    case "KEYCODE_LAST_CHANNEL":
      return RemoteKeyCode.KEYCODE_LAST_CHANNEL
    case 230:
    case "KEYCODE_TV_DATA_SERVICE":
      return RemoteKeyCode.KEYCODE_TV_DATA_SERVICE
    case 231:
    case "KEYCODE_VOICE_ASSIST":
      return RemoteKeyCode.KEYCODE_VOICE_ASSIST
    case 232:
    case "KEYCODE_TV_RADIO_SERVICE":
      return RemoteKeyCode.KEYCODE_TV_RADIO_SERVICE
    case 233:
    case "KEYCODE_TV_TELETEXT":
      return RemoteKeyCode.KEYCODE_TV_TELETEXT
    case 234:
    case "KEYCODE_TV_NUMBER_ENTRY":
      return RemoteKeyCode.KEYCODE_TV_NUMBER_ENTRY
    case 235:
    case "KEYCODE_TV_TERRESTRIAL_ANALOG":
      return RemoteKeyCode.KEYCODE_TV_TERRESTRIAL_ANALOG
    case 236:
    case "KEYCODE_TV_TERRESTRIAL_DIGITAL":
      return RemoteKeyCode.KEYCODE_TV_TERRESTRIAL_DIGITAL
    case 237:
    case "KEYCODE_TV_SATELLITE":
      return RemoteKeyCode.KEYCODE_TV_SATELLITE
    case 238:
    case "KEYCODE_TV_SATELLITE_BS":
      return RemoteKeyCode.KEYCODE_TV_SATELLITE_BS
    case 239:
    case "KEYCODE_TV_SATELLITE_CS":
      return RemoteKeyCode.KEYCODE_TV_SATELLITE_CS
    case 240:
    case "KEYCODE_TV_SATELLITE_SERVICE":
      return RemoteKeyCode.KEYCODE_TV_SATELLITE_SERVICE
    case 241:
    case "KEYCODE_TV_NETWORK":
      return RemoteKeyCode.KEYCODE_TV_NETWORK
    case 242:
    case "KEYCODE_TV_ANTENNA_CABLE":
      return RemoteKeyCode.KEYCODE_TV_ANTENNA_CABLE
    case 243:
    case "KEYCODE_TV_INPUT_HDMI_1":
      return RemoteKeyCode.KEYCODE_TV_INPUT_HDMI_1
    case 244:
    case "KEYCODE_TV_INPUT_HDMI_2":
      return RemoteKeyCode.KEYCODE_TV_INPUT_HDMI_2
    case 245:
    case "KEYCODE_TV_INPUT_HDMI_3":
      return RemoteKeyCode.KEYCODE_TV_INPUT_HDMI_3
    case 246:
    case "KEYCODE_TV_INPUT_HDMI_4":
      return RemoteKeyCode.KEYCODE_TV_INPUT_HDMI_4
    case 247:
    case "KEYCODE_TV_INPUT_COMPOSITE_1":
      return RemoteKeyCode.KEYCODE_TV_INPUT_COMPOSITE_1
    case 248:
    case "KEYCODE_TV_INPUT_COMPOSITE_2":
      return RemoteKeyCode.KEYCODE_TV_INPUT_COMPOSITE_2
    case 249:
    case "KEYCODE_TV_INPUT_COMPONENT_1":
      return RemoteKeyCode.KEYCODE_TV_INPUT_COMPONENT_1
    case 250:
    case "KEYCODE_TV_INPUT_COMPONENT_2":
      return RemoteKeyCode.KEYCODE_TV_INPUT_COMPONENT_2
    case 251:
    case "KEYCODE_TV_INPUT_VGA_1":
      return RemoteKeyCode.KEYCODE_TV_INPUT_VGA_1
    case 252:
    case "KEYCODE_TV_AUDIO_DESCRIPTION":
      return RemoteKeyCode.KEYCODE_TV_AUDIO_DESCRIPTION
    case 253:
    case "KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP":
      return RemoteKeyCode.KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP
    case 254:
    case "KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN":
      return RemoteKeyCode.KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN
    case 255:
    case "KEYCODE_TV_ZOOM_MODE":
      return RemoteKeyCode.KEYCODE_TV_ZOOM_MODE
    case 256:
    case "KEYCODE_TV_CONTENTS_MENU":
      return RemoteKeyCode.KEYCODE_TV_CONTENTS_MENU
    case 257:
    case "KEYCODE_TV_MEDIA_CONTEXT_MENU":
      return RemoteKeyCode.KEYCODE_TV_MEDIA_CONTEXT_MENU
    case 258:
    case "KEYCODE_TV_TIMER_PROGRAMMING":
      return RemoteKeyCode.KEYCODE_TV_TIMER_PROGRAMMING
    case 259:
    case "KEYCODE_HELP":
      return RemoteKeyCode.KEYCODE_HELP
    case 260:
    case "KEYCODE_NAVIGATE_PREVIOUS":
      return RemoteKeyCode.KEYCODE_NAVIGATE_PREVIOUS
    case 261:
    case "KEYCODE_NAVIGATE_NEXT":
      return RemoteKeyCode.KEYCODE_NAVIGATE_NEXT
    case 262:
    case "KEYCODE_NAVIGATE_IN":
      return RemoteKeyCode.KEYCODE_NAVIGATE_IN
    case 263:
    case "KEYCODE_NAVIGATE_OUT":
      return RemoteKeyCode.KEYCODE_NAVIGATE_OUT
    case 264:
    case "KEYCODE_STEM_PRIMARY":
      return RemoteKeyCode.KEYCODE_STEM_PRIMARY
    case 265:
    case "KEYCODE_STEM_1":
      return RemoteKeyCode.KEYCODE_STEM_1
    case 266:
    case "KEYCODE_STEM_2":
      return RemoteKeyCode.KEYCODE_STEM_2
    case 267:
    case "KEYCODE_STEM_3":
      return RemoteKeyCode.KEYCODE_STEM_3
    case 268:
    case "KEYCODE_DPAD_UP_LEFT":
      return RemoteKeyCode.KEYCODE_DPAD_UP_LEFT
    case 269:
    case "KEYCODE_DPAD_DOWN_LEFT":
      return RemoteKeyCode.KEYCODE_DPAD_DOWN_LEFT
    case 270:
    case "KEYCODE_DPAD_UP_RIGHT":
      return RemoteKeyCode.KEYCODE_DPAD_UP_RIGHT
    case 271:
    case "KEYCODE_DPAD_DOWN_RIGHT":
      return RemoteKeyCode.KEYCODE_DPAD_DOWN_RIGHT
    case 272:
    case "KEYCODE_MEDIA_SKIP_FORWARD":
      return RemoteKeyCode.KEYCODE_MEDIA_SKIP_FORWARD
    case 273:
    case "KEYCODE_MEDIA_SKIP_BACKWARD":
      return RemoteKeyCode.KEYCODE_MEDIA_SKIP_BACKWARD
    case 274:
    case "KEYCODE_MEDIA_STEP_FORWARD":
      return RemoteKeyCode.KEYCODE_MEDIA_STEP_FORWARD
    case 275:
    case "KEYCODE_MEDIA_STEP_BACKWARD":
      return RemoteKeyCode.KEYCODE_MEDIA_STEP_BACKWARD
    case 276:
    case "KEYCODE_SOFT_SLEEP":
      return RemoteKeyCode.KEYCODE_SOFT_SLEEP
    case 277:
    case "KEYCODE_CUT":
      return RemoteKeyCode.KEYCODE_CUT
    case 278:
    case "KEYCODE_COPY":
      return RemoteKeyCode.KEYCODE_COPY
    case 279:
    case "KEYCODE_PASTE":
      return RemoteKeyCode.KEYCODE_PASTE
    case 280:
    case "KEYCODE_SYSTEM_NAVIGATION_UP":
      return RemoteKeyCode.KEYCODE_SYSTEM_NAVIGATION_UP
    case 281:
    case "KEYCODE_SYSTEM_NAVIGATION_DOWN":
      return RemoteKeyCode.KEYCODE_SYSTEM_NAVIGATION_DOWN
    case 282:
    case "KEYCODE_SYSTEM_NAVIGATION_LEFT":
      return RemoteKeyCode.KEYCODE_SYSTEM_NAVIGATION_LEFT
    case 283:
    case "KEYCODE_SYSTEM_NAVIGATION_RIGHT":
      return RemoteKeyCode.KEYCODE_SYSTEM_NAVIGATION_RIGHT
    case 284:
    case "KEYCODE_ALL_APPS":
      return RemoteKeyCode.KEYCODE_ALL_APPS
    case 285:
    case "KEYCODE_REFRESH":
      return RemoteKeyCode.KEYCODE_REFRESH
    case 286:
    case "KEYCODE_THUMBS_UP":
      return RemoteKeyCode.KEYCODE_THUMBS_UP
    case 287:
    case "KEYCODE_THUMBS_DOWN":
      return RemoteKeyCode.KEYCODE_THUMBS_DOWN
    case 288:
    case "KEYCODE_PROFILE_SWITCH":
      return RemoteKeyCode.KEYCODE_PROFILE_SWITCH
    case 289:
    case "KEYCODE_VIDEO_APP_1":
      return RemoteKeyCode.KEYCODE_VIDEO_APP_1
    case 290:
    case "KEYCODE_VIDEO_APP_2":
      return RemoteKeyCode.KEYCODE_VIDEO_APP_2
    case 291:
    case "KEYCODE_VIDEO_APP_3":
      return RemoteKeyCode.KEYCODE_VIDEO_APP_3
    case 292:
    case "KEYCODE_VIDEO_APP_4":
      return RemoteKeyCode.KEYCODE_VIDEO_APP_4
    case 293:
    case "KEYCODE_VIDEO_APP_5":
      return RemoteKeyCode.KEYCODE_VIDEO_APP_5
    case 294:
    case "KEYCODE_VIDEO_APP_6":
      return RemoteKeyCode.KEYCODE_VIDEO_APP_6
    case 295:
    case "KEYCODE_VIDEO_APP_7":
      return RemoteKeyCode.KEYCODE_VIDEO_APP_7
    case 296:
    case "KEYCODE_VIDEO_APP_8":
      return RemoteKeyCode.KEYCODE_VIDEO_APP_8
    case 297:
    case "KEYCODE_FEATURED_APP_1":
      return RemoteKeyCode.KEYCODE_FEATURED_APP_1
    case 298:
    case "KEYCODE_FEATURED_APP_2":
      return RemoteKeyCode.KEYCODE_FEATURED_APP_2
    case 299:
    case "KEYCODE_FEATURED_APP_3":
      return RemoteKeyCode.KEYCODE_FEATURED_APP_3
    case 300:
    case "KEYCODE_FEATURED_APP_4":
      return RemoteKeyCode.KEYCODE_FEATURED_APP_4
    case 301:
    case "KEYCODE_DEMO_APP_1":
      return RemoteKeyCode.KEYCODE_DEMO_APP_1
    case 302:
    case "KEYCODE_DEMO_APP_2":
      return RemoteKeyCode.KEYCODE_DEMO_APP_2
    case 303:
    case "KEYCODE_DEMO_APP_3":
      return RemoteKeyCode.KEYCODE_DEMO_APP_3
    case 304:
    case "KEYCODE_DEMO_APP_4":
      return RemoteKeyCode.KEYCODE_DEMO_APP_4
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum RemoteKeyCode"
      )
  }
}

export function remoteKeyCodeToJSON(object: RemoteKeyCode): string {
  switch (object) {
    case RemoteKeyCode.KEYCODE_UNKNOWN:
      return "KEYCODE_UNKNOWN"
    case RemoteKeyCode.KEYCODE_SOFT_LEFT:
      return "KEYCODE_SOFT_LEFT"
    case RemoteKeyCode.KEYCODE_SOFT_RIGHT:
      return "KEYCODE_SOFT_RIGHT"
    case RemoteKeyCode.KEYCODE_HOME:
      return "KEYCODE_HOME"
    case RemoteKeyCode.KEYCODE_BACK:
      return "KEYCODE_BACK"
    case RemoteKeyCode.KEYCODE_CALL:
      return "KEYCODE_CALL"
    case RemoteKeyCode.KEYCODE_ENDCALL:
      return "KEYCODE_ENDCALL"
    case RemoteKeyCode.KEYCODE_0:
      return "KEYCODE_0"
    case RemoteKeyCode.KEYCODE_1:
      return "KEYCODE_1"
    case RemoteKeyCode.KEYCODE_2:
      return "KEYCODE_2"
    case RemoteKeyCode.KEYCODE_3:
      return "KEYCODE_3"
    case RemoteKeyCode.KEYCODE_4:
      return "KEYCODE_4"
    case RemoteKeyCode.KEYCODE_5:
      return "KEYCODE_5"
    case RemoteKeyCode.KEYCODE_6:
      return "KEYCODE_6"
    case RemoteKeyCode.KEYCODE_7:
      return "KEYCODE_7"
    case RemoteKeyCode.KEYCODE_8:
      return "KEYCODE_8"
    case RemoteKeyCode.KEYCODE_9:
      return "KEYCODE_9"
    case RemoteKeyCode.KEYCODE_STAR:
      return "KEYCODE_STAR"
    case RemoteKeyCode.KEYCODE_POUND:
      return "KEYCODE_POUND"
    case RemoteKeyCode.KEYCODE_DPAD_UP:
      return "KEYCODE_DPAD_UP"
    case RemoteKeyCode.KEYCODE_DPAD_DOWN:
      return "KEYCODE_DPAD_DOWN"
    case RemoteKeyCode.KEYCODE_DPAD_LEFT:
      return "KEYCODE_DPAD_LEFT"
    case RemoteKeyCode.KEYCODE_DPAD_RIGHT:
      return "KEYCODE_DPAD_RIGHT"
    case RemoteKeyCode.KEYCODE_DPAD_CENTER:
      return "KEYCODE_DPAD_CENTER"
    case RemoteKeyCode.KEYCODE_VOLUME_UP:
      return "KEYCODE_VOLUME_UP"
    case RemoteKeyCode.KEYCODE_VOLUME_DOWN:
      return "KEYCODE_VOLUME_DOWN"
    case RemoteKeyCode.KEYCODE_POWER:
      return "KEYCODE_POWER"
    case RemoteKeyCode.KEYCODE_CAMERA:
      return "KEYCODE_CAMERA"
    case RemoteKeyCode.KEYCODE_CLEAR:
      return "KEYCODE_CLEAR"
    case RemoteKeyCode.KEYCODE_A:
      return "KEYCODE_A"
    case RemoteKeyCode.KEYCODE_B:
      return "KEYCODE_B"
    case RemoteKeyCode.KEYCODE_C:
      return "KEYCODE_C"
    case RemoteKeyCode.KEYCODE_D:
      return "KEYCODE_D"
    case RemoteKeyCode.KEYCODE_E:
      return "KEYCODE_E"
    case RemoteKeyCode.KEYCODE_F:
      return "KEYCODE_F"
    case RemoteKeyCode.KEYCODE_G:
      return "KEYCODE_G"
    case RemoteKeyCode.KEYCODE_H:
      return "KEYCODE_H"
    case RemoteKeyCode.KEYCODE_I:
      return "KEYCODE_I"
    case RemoteKeyCode.KEYCODE_J:
      return "KEYCODE_J"
    case RemoteKeyCode.KEYCODE_K:
      return "KEYCODE_K"
    case RemoteKeyCode.KEYCODE_L:
      return "KEYCODE_L"
    case RemoteKeyCode.KEYCODE_M:
      return "KEYCODE_M"
    case RemoteKeyCode.KEYCODE_N:
      return "KEYCODE_N"
    case RemoteKeyCode.KEYCODE_O:
      return "KEYCODE_O"
    case RemoteKeyCode.KEYCODE_P:
      return "KEYCODE_P"
    case RemoteKeyCode.KEYCODE_Q:
      return "KEYCODE_Q"
    case RemoteKeyCode.KEYCODE_R:
      return "KEYCODE_R"
    case RemoteKeyCode.KEYCODE_S:
      return "KEYCODE_S"
    case RemoteKeyCode.KEYCODE_T:
      return "KEYCODE_T"
    case RemoteKeyCode.KEYCODE_U:
      return "KEYCODE_U"
    case RemoteKeyCode.KEYCODE_V:
      return "KEYCODE_V"
    case RemoteKeyCode.KEYCODE_W:
      return "KEYCODE_W"
    case RemoteKeyCode.KEYCODE_X:
      return "KEYCODE_X"
    case RemoteKeyCode.KEYCODE_Y:
      return "KEYCODE_Y"
    case RemoteKeyCode.KEYCODE_Z:
      return "KEYCODE_Z"
    case RemoteKeyCode.KEYCODE_COMMA:
      return "KEYCODE_COMMA"
    case RemoteKeyCode.KEYCODE_PERIOD:
      return "KEYCODE_PERIOD"
    case RemoteKeyCode.KEYCODE_ALT_LEFT:
      return "KEYCODE_ALT_LEFT"
    case RemoteKeyCode.KEYCODE_ALT_RIGHT:
      return "KEYCODE_ALT_RIGHT"
    case RemoteKeyCode.KEYCODE_SHIFT_LEFT:
      return "KEYCODE_SHIFT_LEFT"
    case RemoteKeyCode.KEYCODE_SHIFT_RIGHT:
      return "KEYCODE_SHIFT_RIGHT"
    case RemoteKeyCode.KEYCODE_TAB:
      return "KEYCODE_TAB"
    case RemoteKeyCode.KEYCODE_SPACE:
      return "KEYCODE_SPACE"
    case RemoteKeyCode.KEYCODE_SYM:
      return "KEYCODE_SYM"
    case RemoteKeyCode.KEYCODE_EXPLORER:
      return "KEYCODE_EXPLORER"
    case RemoteKeyCode.KEYCODE_ENVELOPE:
      return "KEYCODE_ENVELOPE"
    case RemoteKeyCode.KEYCODE_ENTER:
      return "KEYCODE_ENTER"
    case RemoteKeyCode.KEYCODE_DEL:
      return "KEYCODE_DEL"
    case RemoteKeyCode.KEYCODE_GRAVE:
      return "KEYCODE_GRAVE"
    case RemoteKeyCode.KEYCODE_MINUS:
      return "KEYCODE_MINUS"
    case RemoteKeyCode.KEYCODE_EQUALS:
      return "KEYCODE_EQUALS"
    case RemoteKeyCode.KEYCODE_LEFT_BRACKET:
      return "KEYCODE_LEFT_BRACKET"
    case RemoteKeyCode.KEYCODE_RIGHT_BRACKET:
      return "KEYCODE_RIGHT_BRACKET"
    case RemoteKeyCode.KEYCODE_BACKSLASH:
      return "KEYCODE_BACKSLASH"
    case RemoteKeyCode.KEYCODE_SEMICOLON:
      return "KEYCODE_SEMICOLON"
    case RemoteKeyCode.KEYCODE_APOSTROPHE:
      return "KEYCODE_APOSTROPHE"
    case RemoteKeyCode.KEYCODE_SLASH:
      return "KEYCODE_SLASH"
    case RemoteKeyCode.KEYCODE_AT:
      return "KEYCODE_AT"
    case RemoteKeyCode.KEYCODE_NUM:
      return "KEYCODE_NUM"
    case RemoteKeyCode.KEYCODE_HEADSETHOOK:
      return "KEYCODE_HEADSETHOOK"
    case RemoteKeyCode.KEYCODE_FOCUS:
      return "KEYCODE_FOCUS"
    case RemoteKeyCode.KEYCODE_PLUS:
      return "KEYCODE_PLUS"
    case RemoteKeyCode.KEYCODE_MENU:
      return "KEYCODE_MENU"
    case RemoteKeyCode.KEYCODE_NOTIFICATION:
      return "KEYCODE_NOTIFICATION"
    case RemoteKeyCode.KEYCODE_SEARCH:
      return "KEYCODE_SEARCH"
    case RemoteKeyCode.KEYCODE_MEDIA_PLAY_PAUSE:
      return "KEYCODE_MEDIA_PLAY_PAUSE"
    case RemoteKeyCode.KEYCODE_MEDIA_STOP:
      return "KEYCODE_MEDIA_STOP"
    case RemoteKeyCode.KEYCODE_MEDIA_NEXT:
      return "KEYCODE_MEDIA_NEXT"
    case RemoteKeyCode.KEYCODE_MEDIA_PREVIOUS:
      return "KEYCODE_MEDIA_PREVIOUS"
    case RemoteKeyCode.KEYCODE_MEDIA_REWIND:
      return "KEYCODE_MEDIA_REWIND"
    case RemoteKeyCode.KEYCODE_MEDIA_FAST_FORWARD:
      return "KEYCODE_MEDIA_FAST_FORWARD"
    case RemoteKeyCode.KEYCODE_MUTE:
      return "KEYCODE_MUTE"
    case RemoteKeyCode.KEYCODE_PAGE_UP:
      return "KEYCODE_PAGE_UP"
    case RemoteKeyCode.KEYCODE_PAGE_DOWN:
      return "KEYCODE_PAGE_DOWN"
    case RemoteKeyCode.KEYCODE_PICTSYMBOLS:
      return "KEYCODE_PICTSYMBOLS"
    case RemoteKeyCode.KEYCODE_SWITCH_CHARSET:
      return "KEYCODE_SWITCH_CHARSET"
    case RemoteKeyCode.KEYCODE_BUTTON_A:
      return "KEYCODE_BUTTON_A"
    case RemoteKeyCode.KEYCODE_BUTTON_B:
      return "KEYCODE_BUTTON_B"
    case RemoteKeyCode.KEYCODE_BUTTON_C:
      return "KEYCODE_BUTTON_C"
    case RemoteKeyCode.KEYCODE_BUTTON_X:
      return "KEYCODE_BUTTON_X"
    case RemoteKeyCode.KEYCODE_BUTTON_Y:
      return "KEYCODE_BUTTON_Y"
    case RemoteKeyCode.KEYCODE_BUTTON_Z:
      return "KEYCODE_BUTTON_Z"
    case RemoteKeyCode.KEYCODE_BUTTON_L1:
      return "KEYCODE_BUTTON_L1"
    case RemoteKeyCode.KEYCODE_BUTTON_R1:
      return "KEYCODE_BUTTON_R1"
    case RemoteKeyCode.KEYCODE_BUTTON_L2:
      return "KEYCODE_BUTTON_L2"
    case RemoteKeyCode.KEYCODE_BUTTON_R2:
      return "KEYCODE_BUTTON_R2"
    case RemoteKeyCode.KEYCODE_BUTTON_THUMBL:
      return "KEYCODE_BUTTON_THUMBL"
    case RemoteKeyCode.KEYCODE_BUTTON_THUMBR:
      return "KEYCODE_BUTTON_THUMBR"
    case RemoteKeyCode.KEYCODE_BUTTON_START:
      return "KEYCODE_BUTTON_START"
    case RemoteKeyCode.KEYCODE_BUTTON_SELECT:
      return "KEYCODE_BUTTON_SELECT"
    case RemoteKeyCode.KEYCODE_BUTTON_MODE:
      return "KEYCODE_BUTTON_MODE"
    case RemoteKeyCode.KEYCODE_ESCAPE:
      return "KEYCODE_ESCAPE"
    case RemoteKeyCode.KEYCODE_FORWARD_DEL:
      return "KEYCODE_FORWARD_DEL"
    case RemoteKeyCode.KEYCODE_CTRL_LEFT:
      return "KEYCODE_CTRL_LEFT"
    case RemoteKeyCode.KEYCODE_CTRL_RIGHT:
      return "KEYCODE_CTRL_RIGHT"
    case RemoteKeyCode.KEYCODE_CAPS_LOCK:
      return "KEYCODE_CAPS_LOCK"
    case RemoteKeyCode.KEYCODE_SCROLL_LOCK:
      return "KEYCODE_SCROLL_LOCK"
    case RemoteKeyCode.KEYCODE_META_LEFT:
      return "KEYCODE_META_LEFT"
    case RemoteKeyCode.KEYCODE_META_RIGHT:
      return "KEYCODE_META_RIGHT"
    case RemoteKeyCode.KEYCODE_FUNCTION:
      return "KEYCODE_FUNCTION"
    case RemoteKeyCode.KEYCODE_SYSRQ:
      return "KEYCODE_SYSRQ"
    case RemoteKeyCode.KEYCODE_BREAK:
      return "KEYCODE_BREAK"
    case RemoteKeyCode.KEYCODE_MOVE_HOME:
      return "KEYCODE_MOVE_HOME"
    case RemoteKeyCode.KEYCODE_MOVE_END:
      return "KEYCODE_MOVE_END"
    case RemoteKeyCode.KEYCODE_INSERT:
      return "KEYCODE_INSERT"
    case RemoteKeyCode.KEYCODE_FORWARD:
      return "KEYCODE_FORWARD"
    case RemoteKeyCode.KEYCODE_MEDIA_PLAY:
      return "KEYCODE_MEDIA_PLAY"
    case RemoteKeyCode.KEYCODE_MEDIA_PAUSE:
      return "KEYCODE_MEDIA_PAUSE"
    case RemoteKeyCode.KEYCODE_MEDIA_CLOSE:
      return "KEYCODE_MEDIA_CLOSE"
    case RemoteKeyCode.KEYCODE_MEDIA_EJECT:
      return "KEYCODE_MEDIA_EJECT"
    case RemoteKeyCode.KEYCODE_MEDIA_RECORD:
      return "KEYCODE_MEDIA_RECORD"
    case RemoteKeyCode.KEYCODE_F1:
      return "KEYCODE_F1"
    case RemoteKeyCode.KEYCODE_F2:
      return "KEYCODE_F2"
    case RemoteKeyCode.KEYCODE_F3:
      return "KEYCODE_F3"
    case RemoteKeyCode.KEYCODE_F4:
      return "KEYCODE_F4"
    case RemoteKeyCode.KEYCODE_F5:
      return "KEYCODE_F5"
    case RemoteKeyCode.KEYCODE_F6:
      return "KEYCODE_F6"
    case RemoteKeyCode.KEYCODE_F7:
      return "KEYCODE_F7"
    case RemoteKeyCode.KEYCODE_F8:
      return "KEYCODE_F8"
    case RemoteKeyCode.KEYCODE_F9:
      return "KEYCODE_F9"
    case RemoteKeyCode.KEYCODE_F10:
      return "KEYCODE_F10"
    case RemoteKeyCode.KEYCODE_F11:
      return "KEYCODE_F11"
    case RemoteKeyCode.KEYCODE_F12:
      return "KEYCODE_F12"
    case RemoteKeyCode.KEYCODE_NUM_LOCK:
      return "KEYCODE_NUM_LOCK"
    case RemoteKeyCode.KEYCODE_NUMPAD_0:
      return "KEYCODE_NUMPAD_0"
    case RemoteKeyCode.KEYCODE_NUMPAD_1:
      return "KEYCODE_NUMPAD_1"
    case RemoteKeyCode.KEYCODE_NUMPAD_2:
      return "KEYCODE_NUMPAD_2"
    case RemoteKeyCode.KEYCODE_NUMPAD_3:
      return "KEYCODE_NUMPAD_3"
    case RemoteKeyCode.KEYCODE_NUMPAD_4:
      return "KEYCODE_NUMPAD_4"
    case RemoteKeyCode.KEYCODE_NUMPAD_5:
      return "KEYCODE_NUMPAD_5"
    case RemoteKeyCode.KEYCODE_NUMPAD_6:
      return "KEYCODE_NUMPAD_6"
    case RemoteKeyCode.KEYCODE_NUMPAD_7:
      return "KEYCODE_NUMPAD_7"
    case RemoteKeyCode.KEYCODE_NUMPAD_8:
      return "KEYCODE_NUMPAD_8"
    case RemoteKeyCode.KEYCODE_NUMPAD_9:
      return "KEYCODE_NUMPAD_9"
    case RemoteKeyCode.KEYCODE_NUMPAD_DIVIDE:
      return "KEYCODE_NUMPAD_DIVIDE"
    case RemoteKeyCode.KEYCODE_NUMPAD_MULTIPLY:
      return "KEYCODE_NUMPAD_MULTIPLY"
    case RemoteKeyCode.KEYCODE_NUMPAD_SUBTRACT:
      return "KEYCODE_NUMPAD_SUBTRACT"
    case RemoteKeyCode.KEYCODE_NUMPAD_ADD:
      return "KEYCODE_NUMPAD_ADD"
    case RemoteKeyCode.KEYCODE_NUMPAD_DOT:
      return "KEYCODE_NUMPAD_DOT"
    case RemoteKeyCode.KEYCODE_NUMPAD_COMMA:
      return "KEYCODE_NUMPAD_COMMA"
    case RemoteKeyCode.KEYCODE_NUMPAD_ENTER:
      return "KEYCODE_NUMPAD_ENTER"
    case RemoteKeyCode.KEYCODE_NUMPAD_EQUALS:
      return "KEYCODE_NUMPAD_EQUALS"
    case RemoteKeyCode.KEYCODE_NUMPAD_LEFT_PAREN:
      return "KEYCODE_NUMPAD_LEFT_PAREN"
    case RemoteKeyCode.KEYCODE_NUMPAD_RIGHT_PAREN:
      return "KEYCODE_NUMPAD_RIGHT_PAREN"
    case RemoteKeyCode.KEYCODE_VOLUME_MUTE:
      return "KEYCODE_VOLUME_MUTE"
    case RemoteKeyCode.KEYCODE_INFO:
      return "KEYCODE_INFO"
    case RemoteKeyCode.KEYCODE_CHANNEL_UP:
      return "KEYCODE_CHANNEL_UP"
    case RemoteKeyCode.KEYCODE_CHANNEL_DOWN:
      return "KEYCODE_CHANNEL_DOWN"
    case RemoteKeyCode.KEYCODE_ZOOM_IN:
      return "KEYCODE_ZOOM_IN"
    case RemoteKeyCode.KEYCODE_ZOOM_OUT:
      return "KEYCODE_ZOOM_OUT"
    case RemoteKeyCode.KEYCODE_TV:
      return "KEYCODE_TV"
    case RemoteKeyCode.KEYCODE_WINDOW:
      return "KEYCODE_WINDOW"
    case RemoteKeyCode.KEYCODE_GUIDE:
      return "KEYCODE_GUIDE"
    case RemoteKeyCode.KEYCODE_DVR:
      return "KEYCODE_DVR"
    case RemoteKeyCode.KEYCODE_BOOKMARK:
      return "KEYCODE_BOOKMARK"
    case RemoteKeyCode.KEYCODE_CAPTIONS:
      return "KEYCODE_CAPTIONS"
    case RemoteKeyCode.KEYCODE_SETTINGS:
      return "KEYCODE_SETTINGS"
    case RemoteKeyCode.KEYCODE_TV_POWER:
      return "KEYCODE_TV_POWER"
    case RemoteKeyCode.KEYCODE_TV_INPUT:
      return "KEYCODE_TV_INPUT"
    case RemoteKeyCode.KEYCODE_STB_POWER:
      return "KEYCODE_STB_POWER"
    case RemoteKeyCode.KEYCODE_STB_INPUT:
      return "KEYCODE_STB_INPUT"
    case RemoteKeyCode.KEYCODE_AVR_POWER:
      return "KEYCODE_AVR_POWER"
    case RemoteKeyCode.KEYCODE_AVR_INPUT:
      return "KEYCODE_AVR_INPUT"
    case RemoteKeyCode.KEYCODE_PROG_RED:
      return "KEYCODE_PROG_RED"
    case RemoteKeyCode.KEYCODE_PROG_GREEN:
      return "KEYCODE_PROG_GREEN"
    case RemoteKeyCode.KEYCODE_PROG_YELLOW:
      return "KEYCODE_PROG_YELLOW"
    case RemoteKeyCode.KEYCODE_PROG_BLUE:
      return "KEYCODE_PROG_BLUE"
    case RemoteKeyCode.KEYCODE_APP_SWITCH:
      return "KEYCODE_APP_SWITCH"
    case RemoteKeyCode.KEYCODE_BUTTON_1:
      return "KEYCODE_BUTTON_1"
    case RemoteKeyCode.KEYCODE_BUTTON_2:
      return "KEYCODE_BUTTON_2"
    case RemoteKeyCode.KEYCODE_BUTTON_3:
      return "KEYCODE_BUTTON_3"
    case RemoteKeyCode.KEYCODE_BUTTON_4:
      return "KEYCODE_BUTTON_4"
    case RemoteKeyCode.KEYCODE_BUTTON_5:
      return "KEYCODE_BUTTON_5"
    case RemoteKeyCode.KEYCODE_BUTTON_6:
      return "KEYCODE_BUTTON_6"
    case RemoteKeyCode.KEYCODE_BUTTON_7:
      return "KEYCODE_BUTTON_7"
    case RemoteKeyCode.KEYCODE_BUTTON_8:
      return "KEYCODE_BUTTON_8"
    case RemoteKeyCode.KEYCODE_BUTTON_9:
      return "KEYCODE_BUTTON_9"
    case RemoteKeyCode.KEYCODE_BUTTON_10:
      return "KEYCODE_BUTTON_10"
    case RemoteKeyCode.KEYCODE_BUTTON_11:
      return "KEYCODE_BUTTON_11"
    case RemoteKeyCode.KEYCODE_BUTTON_12:
      return "KEYCODE_BUTTON_12"
    case RemoteKeyCode.KEYCODE_BUTTON_13:
      return "KEYCODE_BUTTON_13"
    case RemoteKeyCode.KEYCODE_BUTTON_14:
      return "KEYCODE_BUTTON_14"
    case RemoteKeyCode.KEYCODE_BUTTON_15:
      return "KEYCODE_BUTTON_15"
    case RemoteKeyCode.KEYCODE_BUTTON_16:
      return "KEYCODE_BUTTON_16"
    case RemoteKeyCode.KEYCODE_LANGUAGE_SWITCH:
      return "KEYCODE_LANGUAGE_SWITCH"
    case RemoteKeyCode.KEYCODE_MANNER_MODE:
      return "KEYCODE_MANNER_MODE"
    case RemoteKeyCode.KEYCODE_3D_MODE:
      return "KEYCODE_3D_MODE"
    case RemoteKeyCode.KEYCODE_CONTACTS:
      return "KEYCODE_CONTACTS"
    case RemoteKeyCode.KEYCODE_CALENDAR:
      return "KEYCODE_CALENDAR"
    case RemoteKeyCode.KEYCODE_MUSIC:
      return "KEYCODE_MUSIC"
    case RemoteKeyCode.KEYCODE_CALCULATOR:
      return "KEYCODE_CALCULATOR"
    case RemoteKeyCode.KEYCODE_ZENKAKU_HANKAKU:
      return "KEYCODE_ZENKAKU_HANKAKU"
    case RemoteKeyCode.KEYCODE_EISU:
      return "KEYCODE_EISU"
    case RemoteKeyCode.KEYCODE_MUHENKAN:
      return "KEYCODE_MUHENKAN"
    case RemoteKeyCode.KEYCODE_HENKAN:
      return "KEYCODE_HENKAN"
    case RemoteKeyCode.KEYCODE_KATAKANA_HIRAGANA:
      return "KEYCODE_KATAKANA_HIRAGANA"
    case RemoteKeyCode.KEYCODE_YEN:
      return "KEYCODE_YEN"
    case RemoteKeyCode.KEYCODE_RO:
      return "KEYCODE_RO"
    case RemoteKeyCode.KEYCODE_KANA:
      return "KEYCODE_KANA"
    case RemoteKeyCode.KEYCODE_ASSIST:
      return "KEYCODE_ASSIST"
    case RemoteKeyCode.KEYCODE_BRIGHTNESS_DOWN:
      return "KEYCODE_BRIGHTNESS_DOWN"
    case RemoteKeyCode.KEYCODE_BRIGHTNESS_UP:
      return "KEYCODE_BRIGHTNESS_UP"
    case RemoteKeyCode.KEYCODE_MEDIA_AUDIO_TRACK:
      return "KEYCODE_MEDIA_AUDIO_TRACK"
    case RemoteKeyCode.KEYCODE_SLEEP:
      return "KEYCODE_SLEEP"
    case RemoteKeyCode.KEYCODE_WAKEUP:
      return "KEYCODE_WAKEUP"
    case RemoteKeyCode.KEYCODE_PAIRING:
      return "KEYCODE_PAIRING"
    case RemoteKeyCode.KEYCODE_MEDIA_TOP_MENU:
      return "KEYCODE_MEDIA_TOP_MENU"
    case RemoteKeyCode.KEYCODE_11:
      return "KEYCODE_11"
    case RemoteKeyCode.KEYCODE_12:
      return "KEYCODE_12"
    case RemoteKeyCode.KEYCODE_LAST_CHANNEL:
      return "KEYCODE_LAST_CHANNEL"
    case RemoteKeyCode.KEYCODE_TV_DATA_SERVICE:
      return "KEYCODE_TV_DATA_SERVICE"
    case RemoteKeyCode.KEYCODE_VOICE_ASSIST:
      return "KEYCODE_VOICE_ASSIST"
    case RemoteKeyCode.KEYCODE_TV_RADIO_SERVICE:
      return "KEYCODE_TV_RADIO_SERVICE"
    case RemoteKeyCode.KEYCODE_TV_TELETEXT:
      return "KEYCODE_TV_TELETEXT"
    case RemoteKeyCode.KEYCODE_TV_NUMBER_ENTRY:
      return "KEYCODE_TV_NUMBER_ENTRY"
    case RemoteKeyCode.KEYCODE_TV_TERRESTRIAL_ANALOG:
      return "KEYCODE_TV_TERRESTRIAL_ANALOG"
    case RemoteKeyCode.KEYCODE_TV_TERRESTRIAL_DIGITAL:
      return "KEYCODE_TV_TERRESTRIAL_DIGITAL"
    case RemoteKeyCode.KEYCODE_TV_SATELLITE:
      return "KEYCODE_TV_SATELLITE"
    case RemoteKeyCode.KEYCODE_TV_SATELLITE_BS:
      return "KEYCODE_TV_SATELLITE_BS"
    case RemoteKeyCode.KEYCODE_TV_SATELLITE_CS:
      return "KEYCODE_TV_SATELLITE_CS"
    case RemoteKeyCode.KEYCODE_TV_SATELLITE_SERVICE:
      return "KEYCODE_TV_SATELLITE_SERVICE"
    case RemoteKeyCode.KEYCODE_TV_NETWORK:
      return "KEYCODE_TV_NETWORK"
    case RemoteKeyCode.KEYCODE_TV_ANTENNA_CABLE:
      return "KEYCODE_TV_ANTENNA_CABLE"
    case RemoteKeyCode.KEYCODE_TV_INPUT_HDMI_1:
      return "KEYCODE_TV_INPUT_HDMI_1"
    case RemoteKeyCode.KEYCODE_TV_INPUT_HDMI_2:
      return "KEYCODE_TV_INPUT_HDMI_2"
    case RemoteKeyCode.KEYCODE_TV_INPUT_HDMI_3:
      return "KEYCODE_TV_INPUT_HDMI_3"
    case RemoteKeyCode.KEYCODE_TV_INPUT_HDMI_4:
      return "KEYCODE_TV_INPUT_HDMI_4"
    case RemoteKeyCode.KEYCODE_TV_INPUT_COMPOSITE_1:
      return "KEYCODE_TV_INPUT_COMPOSITE_1"
    case RemoteKeyCode.KEYCODE_TV_INPUT_COMPOSITE_2:
      return "KEYCODE_TV_INPUT_COMPOSITE_2"
    case RemoteKeyCode.KEYCODE_TV_INPUT_COMPONENT_1:
      return "KEYCODE_TV_INPUT_COMPONENT_1"
    case RemoteKeyCode.KEYCODE_TV_INPUT_COMPONENT_2:
      return "KEYCODE_TV_INPUT_COMPONENT_2"
    case RemoteKeyCode.KEYCODE_TV_INPUT_VGA_1:
      return "KEYCODE_TV_INPUT_VGA_1"
    case RemoteKeyCode.KEYCODE_TV_AUDIO_DESCRIPTION:
      return "KEYCODE_TV_AUDIO_DESCRIPTION"
    case RemoteKeyCode.KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP:
      return "KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP"
    case RemoteKeyCode.KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN:
      return "KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN"
    case RemoteKeyCode.KEYCODE_TV_ZOOM_MODE:
      return "KEYCODE_TV_ZOOM_MODE"
    case RemoteKeyCode.KEYCODE_TV_CONTENTS_MENU:
      return "KEYCODE_TV_CONTENTS_MENU"
    case RemoteKeyCode.KEYCODE_TV_MEDIA_CONTEXT_MENU:
      return "KEYCODE_TV_MEDIA_CONTEXT_MENU"
    case RemoteKeyCode.KEYCODE_TV_TIMER_PROGRAMMING:
      return "KEYCODE_TV_TIMER_PROGRAMMING"
    case RemoteKeyCode.KEYCODE_HELP:
      return "KEYCODE_HELP"
    case RemoteKeyCode.KEYCODE_NAVIGATE_PREVIOUS:
      return "KEYCODE_NAVIGATE_PREVIOUS"
    case RemoteKeyCode.KEYCODE_NAVIGATE_NEXT:
      return "KEYCODE_NAVIGATE_NEXT"
    case RemoteKeyCode.KEYCODE_NAVIGATE_IN:
      return "KEYCODE_NAVIGATE_IN"
    case RemoteKeyCode.KEYCODE_NAVIGATE_OUT:
      return "KEYCODE_NAVIGATE_OUT"
    case RemoteKeyCode.KEYCODE_STEM_PRIMARY:
      return "KEYCODE_STEM_PRIMARY"
    case RemoteKeyCode.KEYCODE_STEM_1:
      return "KEYCODE_STEM_1"
    case RemoteKeyCode.KEYCODE_STEM_2:
      return "KEYCODE_STEM_2"
    case RemoteKeyCode.KEYCODE_STEM_3:
      return "KEYCODE_STEM_3"
    case RemoteKeyCode.KEYCODE_DPAD_UP_LEFT:
      return "KEYCODE_DPAD_UP_LEFT"
    case RemoteKeyCode.KEYCODE_DPAD_DOWN_LEFT:
      return "KEYCODE_DPAD_DOWN_LEFT"
    case RemoteKeyCode.KEYCODE_DPAD_UP_RIGHT:
      return "KEYCODE_DPAD_UP_RIGHT"
    case RemoteKeyCode.KEYCODE_DPAD_DOWN_RIGHT:
      return "KEYCODE_DPAD_DOWN_RIGHT"
    case RemoteKeyCode.KEYCODE_MEDIA_SKIP_FORWARD:
      return "KEYCODE_MEDIA_SKIP_FORWARD"
    case RemoteKeyCode.KEYCODE_MEDIA_SKIP_BACKWARD:
      return "KEYCODE_MEDIA_SKIP_BACKWARD"
    case RemoteKeyCode.KEYCODE_MEDIA_STEP_FORWARD:
      return "KEYCODE_MEDIA_STEP_FORWARD"
    case RemoteKeyCode.KEYCODE_MEDIA_STEP_BACKWARD:
      return "KEYCODE_MEDIA_STEP_BACKWARD"
    case RemoteKeyCode.KEYCODE_SOFT_SLEEP:
      return "KEYCODE_SOFT_SLEEP"
    case RemoteKeyCode.KEYCODE_CUT:
      return "KEYCODE_CUT"
    case RemoteKeyCode.KEYCODE_COPY:
      return "KEYCODE_COPY"
    case RemoteKeyCode.KEYCODE_PASTE:
      return "KEYCODE_PASTE"
    case RemoteKeyCode.KEYCODE_SYSTEM_NAVIGATION_UP:
      return "KEYCODE_SYSTEM_NAVIGATION_UP"
    case RemoteKeyCode.KEYCODE_SYSTEM_NAVIGATION_DOWN:
      return "KEYCODE_SYSTEM_NAVIGATION_DOWN"
    case RemoteKeyCode.KEYCODE_SYSTEM_NAVIGATION_LEFT:
      return "KEYCODE_SYSTEM_NAVIGATION_LEFT"
    case RemoteKeyCode.KEYCODE_SYSTEM_NAVIGATION_RIGHT:
      return "KEYCODE_SYSTEM_NAVIGATION_RIGHT"
    case RemoteKeyCode.KEYCODE_ALL_APPS:
      return "KEYCODE_ALL_APPS"
    case RemoteKeyCode.KEYCODE_REFRESH:
      return "KEYCODE_REFRESH"
    case RemoteKeyCode.KEYCODE_THUMBS_UP:
      return "KEYCODE_THUMBS_UP"
    case RemoteKeyCode.KEYCODE_THUMBS_DOWN:
      return "KEYCODE_THUMBS_DOWN"
    case RemoteKeyCode.KEYCODE_PROFILE_SWITCH:
      return "KEYCODE_PROFILE_SWITCH"
    case RemoteKeyCode.KEYCODE_VIDEO_APP_1:
      return "KEYCODE_VIDEO_APP_1"
    case RemoteKeyCode.KEYCODE_VIDEO_APP_2:
      return "KEYCODE_VIDEO_APP_2"
    case RemoteKeyCode.KEYCODE_VIDEO_APP_3:
      return "KEYCODE_VIDEO_APP_3"
    case RemoteKeyCode.KEYCODE_VIDEO_APP_4:
      return "KEYCODE_VIDEO_APP_4"
    case RemoteKeyCode.KEYCODE_VIDEO_APP_5:
      return "KEYCODE_VIDEO_APP_5"
    case RemoteKeyCode.KEYCODE_VIDEO_APP_6:
      return "KEYCODE_VIDEO_APP_6"
    case RemoteKeyCode.KEYCODE_VIDEO_APP_7:
      return "KEYCODE_VIDEO_APP_7"
    case RemoteKeyCode.KEYCODE_VIDEO_APP_8:
      return "KEYCODE_VIDEO_APP_8"
    case RemoteKeyCode.KEYCODE_FEATURED_APP_1:
      return "KEYCODE_FEATURED_APP_1"
    case RemoteKeyCode.KEYCODE_FEATURED_APP_2:
      return "KEYCODE_FEATURED_APP_2"
    case RemoteKeyCode.KEYCODE_FEATURED_APP_3:
      return "KEYCODE_FEATURED_APP_3"
    case RemoteKeyCode.KEYCODE_FEATURED_APP_4:
      return "KEYCODE_FEATURED_APP_4"
    case RemoteKeyCode.KEYCODE_DEMO_APP_1:
      return "KEYCODE_DEMO_APP_1"
    case RemoteKeyCode.KEYCODE_DEMO_APP_2:
      return "KEYCODE_DEMO_APP_2"
    case RemoteKeyCode.KEYCODE_DEMO_APP_3:
      return "KEYCODE_DEMO_APP_3"
    case RemoteKeyCode.KEYCODE_DEMO_APP_4:
      return "KEYCODE_DEMO_APP_4"
    default:
      return "UNKNOWN"
  }
}

export enum RemoteDirection {
  UNKNOWN_DIRECTION = 0,
  START_LONG = 1,
  END_LONG = 2,
  SHORT = 3,
}

export function remoteDirectionFromJSON(object: any): RemoteDirection {
  switch (object) {
    case 0:
    case "UNKNOWN_DIRECTION":
      return RemoteDirection.UNKNOWN_DIRECTION
    case 1:
    case "START_LONG":
      return RemoteDirection.START_LONG
    case 2:
    case "END_LONG":
      return RemoteDirection.END_LONG
    case 3:
    case "SHORT":
      return RemoteDirection.SHORT
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum RemoteDirection"
      )
  }
}

export function remoteDirectionToJSON(object: RemoteDirection): string {
  switch (object) {
    case RemoteDirection.UNKNOWN_DIRECTION:
      return "UNKNOWN_DIRECTION"
    case RemoteDirection.START_LONG:
      return "START_LONG"
    case RemoteDirection.END_LONG:
      return "END_LONG"
    case RemoteDirection.SHORT:
      return "SHORT"
    default:
      return "UNKNOWN"
  }
}

export interface RemoteAppLinkLaunchRequest {
  appLink: string
}

export interface RemoteResetPreferredAudioDevice {}

export interface RemoteSetPreferredAudioDevice {}

export interface RemoteAdjustVolumeLevel {}

export interface RemoteSetVolumeLevel {
  unknown1: number
  unknown2: number
  playerModel: string
  unknown4: number
  unknown5: number
  volumeMax: number
  volumeLevel: number
  volumeMuted: boolean
}

export interface RemoteStart {
  started: boolean
}

export interface RemoteVoiceEnd {}

export interface RemoteVoicePayload {}

export interface RemoteVoiceBegin {}

export interface RemoteTextFieldStatus {
  counterField: number
  value: string
  start: number
  end: number
  int5: number
  label: string
}

export interface RemoteImeShowRequest {
  remoteTextFieldStatus: RemoteTextFieldStatus | undefined
}

export interface RemoteEditInfo {
  insert: number
}

export interface RemoteImeBatchEdit {
  imeCounter: number
  fieldCounter: number
  editInfo: RemoteEditInfo | undefined
}

export interface RemoteAppInfo {
  counter: number
  int2: number
  int3: number
  int4: string
  int7: number
  int8: number
  label: string
  appPackage: string
  int13: number
}

export interface RemoteImeKeyInject {
  appInfo: RemoteAppInfo | undefined
  textFieldStatus: RemoteTextFieldStatus | undefined
}

export interface RemoteKeyInject {
  keyCode: RemoteKeyCode
  direction: RemoteDirection
}

export interface RemotePingResponse {
  val1: number
}

export interface RemotePingRequest {
  val1: number
  val2: number
}

export interface RemoteSetActive {
  active: number
}

export interface RemoteDeviceInfo {
  model: string
  vendor: string
  unknown1: number
  unknown2: string
  packageName: string
  appVersion: string
}

export interface RemoteConfigure {
  code1: number
  deviceInfo: RemoteDeviceInfo | undefined
}

export interface RemoteError {
  value: boolean
  message: RemoteMessage | undefined
}

export interface RemoteMessage {
  remoteConfigure: RemoteConfigure | undefined
  remoteSetActive: RemoteSetActive | undefined
  remoteError: RemoteError | undefined
  remotePingRequest: RemotePingRequest | undefined
  remotePingResponse: RemotePingResponse | undefined
  remoteKeyInject: RemoteKeyInject | undefined
  remoteImeKeyInject: RemoteImeKeyInject | undefined
  remoteImeBatchEdit: RemoteImeBatchEdit | undefined
  remoteImeShowRequest: RemoteImeShowRequest | undefined
  remoteVoiceBegin: RemoteVoiceBegin | undefined
  remoteVoicePayload: RemoteVoicePayload | undefined
  remoteVoiceEnd: RemoteVoiceEnd | undefined
  remoteStart: RemoteStart | undefined
  remoteSetVolumeLevel: RemoteSetVolumeLevel | undefined
  remoteAdjustVolumeLevel: RemoteAdjustVolumeLevel | undefined
  remoteSetPreferredAudioDevice: RemoteSetPreferredAudioDevice | undefined
  remoteResetPreferredAudioDevice: RemoteResetPreferredAudioDevice | undefined
  remoteAppLinkLaunchRequest: RemoteAppLinkLaunchRequest | undefined
}

function createBaseRemoteAppLinkLaunchRequest(): RemoteAppLinkLaunchRequest {
  return { appLink: "" }
}

export const RemoteAppLinkLaunchRequest = {
  encode(
    message: RemoteAppLinkLaunchRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.appLink !== "") {
      writer.uint32(10).string(message.appLink)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteAppLinkLaunchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteAppLinkLaunchRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.appLink = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoteAppLinkLaunchRequest {
    return {
      appLink: isSet(object.appLink) ? String(object.appLink) : "",
    }
  },

  toJSON(message: RemoteAppLinkLaunchRequest): unknown {
    const obj: any = {}
    message.appLink !== undefined && (obj.appLink = message.appLink)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteAppLinkLaunchRequest>, I>>(
    object: I
  ): RemoteAppLinkLaunchRequest {
    const message = createBaseRemoteAppLinkLaunchRequest()
    message.appLink = object.appLink ?? ""
    return message
  },
}

function createBaseRemoteResetPreferredAudioDevice(): RemoteResetPreferredAudioDevice {
  return {}
}

export const RemoteResetPreferredAudioDevice = {
  encode(
    _: RemoteResetPreferredAudioDevice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteResetPreferredAudioDevice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteResetPreferredAudioDevice()
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

  fromJSON(_: any): RemoteResetPreferredAudioDevice {
    return {}
  },

  toJSON(_: RemoteResetPreferredAudioDevice): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteResetPreferredAudioDevice>, I>>(
    _: I
  ): RemoteResetPreferredAudioDevice {
    const message = createBaseRemoteResetPreferredAudioDevice()
    return message
  },
}

function createBaseRemoteSetPreferredAudioDevice(): RemoteSetPreferredAudioDevice {
  return {}
}

export const RemoteSetPreferredAudioDevice = {
  encode(
    _: RemoteSetPreferredAudioDevice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteSetPreferredAudioDevice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteSetPreferredAudioDevice()
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

  fromJSON(_: any): RemoteSetPreferredAudioDevice {
    return {}
  },

  toJSON(_: RemoteSetPreferredAudioDevice): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteSetPreferredAudioDevice>, I>>(
    _: I
  ): RemoteSetPreferredAudioDevice {
    const message = createBaseRemoteSetPreferredAudioDevice()
    return message
  },
}

function createBaseRemoteAdjustVolumeLevel(): RemoteAdjustVolumeLevel {
  return {}
}

export const RemoteAdjustVolumeLevel = {
  encode(_: RemoteAdjustVolumeLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteAdjustVolumeLevel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteAdjustVolumeLevel()
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

  fromJSON(_: any): RemoteAdjustVolumeLevel {
    return {}
  },

  toJSON(_: RemoteAdjustVolumeLevel): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteAdjustVolumeLevel>, I>>(
    _: I
  ): RemoteAdjustVolumeLevel {
    const message = createBaseRemoteAdjustVolumeLevel()
    return message
  },
}

function createBaseRemoteSetVolumeLevel(): RemoteSetVolumeLevel {
  return {
    unknown1: 0,
    unknown2: 0,
    playerModel: "",
    unknown4: 0,
    unknown5: 0,
    volumeMax: 0,
    volumeLevel: 0,
    volumeMuted: false,
  }
}

export const RemoteSetVolumeLevel = {
  encode(message: RemoteSetVolumeLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unknown1 !== 0) {
      writer.uint32(8).uint32(message.unknown1)
    }
    if (message.unknown2 !== 0) {
      writer.uint32(16).uint32(message.unknown2)
    }
    if (message.playerModel !== "") {
      writer.uint32(26).string(message.playerModel)
    }
    if (message.unknown4 !== 0) {
      writer.uint32(32).uint32(message.unknown4)
    }
    if (message.unknown5 !== 0) {
      writer.uint32(40).uint32(message.unknown5)
    }
    if (message.volumeMax !== 0) {
      writer.uint32(48).uint32(message.volumeMax)
    }
    if (message.volumeLevel !== 0) {
      writer.uint32(56).uint32(message.volumeLevel)
    }
    if (message.volumeMuted === true) {
      writer.uint32(64).bool(message.volumeMuted)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteSetVolumeLevel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteSetVolumeLevel()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.unknown1 = reader.uint32()
          break
        case 2:
          message.unknown2 = reader.uint32()
          break
        case 3:
          message.playerModel = reader.string()
          break
        case 4:
          message.unknown4 = reader.uint32()
          break
        case 5:
          message.unknown5 = reader.uint32()
          break
        case 6:
          message.volumeMax = reader.uint32()
          break
        case 7:
          message.volumeLevel = reader.uint32()
          break
        case 8:
          message.volumeMuted = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoteSetVolumeLevel {
    return {
      unknown1: isSet(object.unknown1) ? Number(object.unknown1) : 0,
      unknown2: isSet(object.unknown2) ? Number(object.unknown2) : 0,
      playerModel: isSet(object.playerModel) ? String(object.playerModel) : "",
      unknown4: isSet(object.unknown4) ? Number(object.unknown4) : 0,
      unknown5: isSet(object.unknown5) ? Number(object.unknown5) : 0,
      volumeMax: isSet(object.volumeMax) ? Number(object.volumeMax) : 0,
      volumeLevel: isSet(object.volumeLevel) ? Number(object.volumeLevel) : 0,
      volumeMuted: isSet(object.volumeMuted) ? Boolean(object.volumeMuted) : false,
    }
  },

  toJSON(message: RemoteSetVolumeLevel): unknown {
    const obj: any = {}
    message.unknown1 !== undefined && (obj.unknown1 = Math.round(message.unknown1))
    message.unknown2 !== undefined && (obj.unknown2 = Math.round(message.unknown2))
    message.playerModel !== undefined && (obj.playerModel = message.playerModel)
    message.unknown4 !== undefined && (obj.unknown4 = Math.round(message.unknown4))
    message.unknown5 !== undefined && (obj.unknown5 = Math.round(message.unknown5))
    message.volumeMax !== undefined && (obj.volumeMax = Math.round(message.volumeMax))
    message.volumeLevel !== undefined && (obj.volumeLevel = Math.round(message.volumeLevel))
    message.volumeMuted !== undefined && (obj.volumeMuted = message.volumeMuted)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteSetVolumeLevel>, I>>(
    object: I
  ): RemoteSetVolumeLevel {
    const message = createBaseRemoteSetVolumeLevel()
    message.unknown1 = object.unknown1 ?? 0
    message.unknown2 = object.unknown2 ?? 0
    message.playerModel = object.playerModel ?? ""
    message.unknown4 = object.unknown4 ?? 0
    message.unknown5 = object.unknown5 ?? 0
    message.volumeMax = object.volumeMax ?? 0
    message.volumeLevel = object.volumeLevel ?? 0
    message.volumeMuted = object.volumeMuted ?? false
    return message
  },
}

function createBaseRemoteStart(): RemoteStart {
  return { started: false }
}

export const RemoteStart = {
  encode(message: RemoteStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.started === true) {
      writer.uint32(8).bool(message.started)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteStart {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteStart()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.started = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoteStart {
    return {
      started: isSet(object.started) ? Boolean(object.started) : false,
    }
  },

  toJSON(message: RemoteStart): unknown {
    const obj: any = {}
    message.started !== undefined && (obj.started = message.started)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteStart>, I>>(object: I): RemoteStart {
    const message = createBaseRemoteStart()
    message.started = object.started ?? false
    return message
  },
}

function createBaseRemoteVoiceEnd(): RemoteVoiceEnd {
  return {}
}

export const RemoteVoiceEnd = {
  encode(_: RemoteVoiceEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteVoiceEnd {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteVoiceEnd()
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

  fromJSON(_: any): RemoteVoiceEnd {
    return {}
  },

  toJSON(_: RemoteVoiceEnd): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteVoiceEnd>, I>>(_: I): RemoteVoiceEnd {
    const message = createBaseRemoteVoiceEnd()
    return message
  },
}

function createBaseRemoteVoicePayload(): RemoteVoicePayload {
  return {}
}

export const RemoteVoicePayload = {
  encode(_: RemoteVoicePayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteVoicePayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteVoicePayload()
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

  fromJSON(_: any): RemoteVoicePayload {
    return {}
  },

  toJSON(_: RemoteVoicePayload): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteVoicePayload>, I>>(_: I): RemoteVoicePayload {
    const message = createBaseRemoteVoicePayload()
    return message
  },
}

function createBaseRemoteVoiceBegin(): RemoteVoiceBegin {
  return {}
}

export const RemoteVoiceBegin = {
  encode(_: RemoteVoiceBegin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteVoiceBegin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteVoiceBegin()
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

  fromJSON(_: any): RemoteVoiceBegin {
    return {}
  },

  toJSON(_: RemoteVoiceBegin): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteVoiceBegin>, I>>(_: I): RemoteVoiceBegin {
    const message = createBaseRemoteVoiceBegin()
    return message
  },
}

function createBaseRemoteTextFieldStatus(): RemoteTextFieldStatus {
  return { counterField: 0, value: "", start: 0, end: 0, int5: 0, label: "" }
}

export const RemoteTextFieldStatus = {
  encode(
    message: RemoteTextFieldStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.counterField !== 0) {
      writer.uint32(8).int32(message.counterField)
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value)
    }
    if (message.start !== 0) {
      writer.uint32(24).int32(message.start)
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end)
    }
    if (message.int5 !== 0) {
      writer.uint32(40).int32(message.int5)
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteTextFieldStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteTextFieldStatus()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.counterField = reader.int32()
          break
        case 2:
          message.value = reader.string()
          break
        case 3:
          message.start = reader.int32()
          break
        case 4:
          message.end = reader.int32()
          break
        case 5:
          message.int5 = reader.int32()
          break
        case 6:
          message.label = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoteTextFieldStatus {
    return {
      counterField: isSet(object.counterField) ? Number(object.counterField) : 0,
      value: isSet(object.value) ? String(object.value) : "",
      start: isSet(object.start) ? Number(object.start) : 0,
      end: isSet(object.end) ? Number(object.end) : 0,
      int5: isSet(object.int5) ? Number(object.int5) : 0,
      label: isSet(object.label) ? String(object.label) : "",
    }
  },

  toJSON(message: RemoteTextFieldStatus): unknown {
    const obj: any = {}
    message.counterField !== undefined && (obj.counterField = Math.round(message.counterField))
    message.value !== undefined && (obj.value = message.value)
    message.start !== undefined && (obj.start = Math.round(message.start))
    message.end !== undefined && (obj.end = Math.round(message.end))
    message.int5 !== undefined && (obj.int5 = Math.round(message.int5))
    message.label !== undefined && (obj.label = message.label)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteTextFieldStatus>, I>>(
    object: I
  ): RemoteTextFieldStatus {
    const message = createBaseRemoteTextFieldStatus()
    message.counterField = object.counterField ?? 0
    message.value = object.value ?? ""
    message.start = object.start ?? 0
    message.end = object.end ?? 0
    message.int5 = object.int5 ?? 0
    message.label = object.label ?? ""
    return message
  },
}

function createBaseRemoteImeShowRequest(): RemoteImeShowRequest {
  return { remoteTextFieldStatus: undefined }
}

export const RemoteImeShowRequest = {
  encode(message: RemoteImeShowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remoteTextFieldStatus !== undefined) {
      RemoteTextFieldStatus.encode(
        message.remoteTextFieldStatus,
        writer.uint32(18).fork()
      ).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteImeShowRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteImeShowRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 2:
          message.remoteTextFieldStatus = RemoteTextFieldStatus.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoteImeShowRequest {
    return {
      remoteTextFieldStatus: isSet(object.remoteTextFieldStatus)
        ? RemoteTextFieldStatus.fromJSON(object.remoteTextFieldStatus)
        : undefined,
    }
  },

  toJSON(message: RemoteImeShowRequest): unknown {
    const obj: any = {}
    message.remoteTextFieldStatus !== undefined &&
      (obj.remoteTextFieldStatus = message.remoteTextFieldStatus
        ? RemoteTextFieldStatus.toJSON(message.remoteTextFieldStatus)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteImeShowRequest>, I>>(
    object: I
  ): RemoteImeShowRequest {
    const message = createBaseRemoteImeShowRequest()
    message.remoteTextFieldStatus =
      object.remoteTextFieldStatus !== undefined && object.remoteTextFieldStatus !== null
        ? RemoteTextFieldStatus.fromPartial(object.remoteTextFieldStatus)
        : undefined
    return message
  },
}

function createBaseRemoteEditInfo(): RemoteEditInfo {
  return { insert: 0 }
}

export const RemoteEditInfo = {
  encode(message: RemoteEditInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.insert !== 0) {
      writer.uint32(16).int32(message.insert)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteEditInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteEditInfo()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 2:
          message.insert = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoteEditInfo {
    return {
      insert: isSet(object.insert) ? Number(object.insert) : 0,
    }
  },

  toJSON(message: RemoteEditInfo): unknown {
    const obj: any = {}
    message.insert !== undefined && (obj.insert = Math.round(message.insert))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteEditInfo>, I>>(object: I): RemoteEditInfo {
    const message = createBaseRemoteEditInfo()
    message.insert = object.insert ?? 0
    return message
  },
}

function createBaseRemoteImeBatchEdit(): RemoteImeBatchEdit {
  return { imeCounter: 0, fieldCounter: 0, editInfo: undefined }
}

export const RemoteImeBatchEdit = {
  encode(message: RemoteImeBatchEdit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.imeCounter !== 0) {
      writer.uint32(8).int32(message.imeCounter)
    }
    if (message.fieldCounter !== 0) {
      writer.uint32(16).int32(message.fieldCounter)
    }
    if (message.editInfo !== undefined) {
      RemoteEditInfo.encode(message.editInfo, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteImeBatchEdit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteImeBatchEdit()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.imeCounter = reader.int32()
          break
        case 2:
          message.fieldCounter = reader.int32()
          break
        case 3:
          message.editInfo = RemoteEditInfo.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoteImeBatchEdit {
    return {
      imeCounter: isSet(object.imeCounter) ? Number(object.imeCounter) : 0,
      fieldCounter: isSet(object.fieldCounter) ? Number(object.fieldCounter) : 0,
      editInfo: isSet(object.editInfo) ? RemoteEditInfo.fromJSON(object.editInfo) : undefined,
    }
  },

  toJSON(message: RemoteImeBatchEdit): unknown {
    const obj: any = {}
    message.imeCounter !== undefined && (obj.imeCounter = Math.round(message.imeCounter))
    message.fieldCounter !== undefined && (obj.fieldCounter = Math.round(message.fieldCounter))
    message.editInfo !== undefined &&
      (obj.editInfo = message.editInfo ? RemoteEditInfo.toJSON(message.editInfo) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteImeBatchEdit>, I>>(
    object: I
  ): RemoteImeBatchEdit {
    const message = createBaseRemoteImeBatchEdit()
    message.imeCounter = object.imeCounter ?? 0
    message.fieldCounter = object.fieldCounter ?? 0
    message.editInfo =
      object.editInfo !== undefined && object.editInfo !== null
        ? RemoteEditInfo.fromPartial(object.editInfo)
        : undefined
    return message
  },
}

function createBaseRemoteAppInfo(): RemoteAppInfo {
  return {
    counter: 0,
    int2: 0,
    int3: 0,
    int4: "",
    int7: 0,
    int8: 0,
    label: "",
    appPackage: "",
    int13: 0,
  }
}

export const RemoteAppInfo = {
  encode(message: RemoteAppInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.counter !== 0) {
      writer.uint32(8).int32(message.counter)
    }
    if (message.int2 !== 0) {
      writer.uint32(16).int32(message.int2)
    }
    if (message.int3 !== 0) {
      writer.uint32(24).int32(message.int3)
    }
    if (message.int4 !== "") {
      writer.uint32(34).string(message.int4)
    }
    if (message.int7 !== 0) {
      writer.uint32(56).int32(message.int7)
    }
    if (message.int8 !== 0) {
      writer.uint32(64).int32(message.int8)
    }
    if (message.label !== "") {
      writer.uint32(82).string(message.label)
    }
    if (message.appPackage !== "") {
      writer.uint32(98).string(message.appPackage)
    }
    if (message.int13 !== 0) {
      writer.uint32(104).int32(message.int13)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteAppInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteAppInfo()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.counter = reader.int32()
          break
        case 2:
          message.int2 = reader.int32()
          break
        case 3:
          message.int3 = reader.int32()
          break
        case 4:
          message.int4 = reader.string()
          break
        case 7:
          message.int7 = reader.int32()
          break
        case 8:
          message.int8 = reader.int32()
          break
        case 10:
          message.label = reader.string()
          break
        case 12:
          message.appPackage = reader.string()
          break
        case 13:
          message.int13 = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoteAppInfo {
    return {
      counter: isSet(object.counter) ? Number(object.counter) : 0,
      int2: isSet(object.int2) ? Number(object.int2) : 0,
      int3: isSet(object.int3) ? Number(object.int3) : 0,
      int4: isSet(object.int4) ? String(object.int4) : "",
      int7: isSet(object.int7) ? Number(object.int7) : 0,
      int8: isSet(object.int8) ? Number(object.int8) : 0,
      label: isSet(object.label) ? String(object.label) : "",
      appPackage: isSet(object.appPackage) ? String(object.appPackage) : "",
      int13: isSet(object.int13) ? Number(object.int13) : 0,
    }
  },

  toJSON(message: RemoteAppInfo): unknown {
    const obj: any = {}
    message.counter !== undefined && (obj.counter = Math.round(message.counter))
    message.int2 !== undefined && (obj.int2 = Math.round(message.int2))
    message.int3 !== undefined && (obj.int3 = Math.round(message.int3))
    message.int4 !== undefined && (obj.int4 = message.int4)
    message.int7 !== undefined && (obj.int7 = Math.round(message.int7))
    message.int8 !== undefined && (obj.int8 = Math.round(message.int8))
    message.label !== undefined && (obj.label = message.label)
    message.appPackage !== undefined && (obj.appPackage = message.appPackage)
    message.int13 !== undefined && (obj.int13 = Math.round(message.int13))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteAppInfo>, I>>(object: I): RemoteAppInfo {
    const message = createBaseRemoteAppInfo()
    message.counter = object.counter ?? 0
    message.int2 = object.int2 ?? 0
    message.int3 = object.int3 ?? 0
    message.int4 = object.int4 ?? ""
    message.int7 = object.int7 ?? 0
    message.int8 = object.int8 ?? 0
    message.label = object.label ?? ""
    message.appPackage = object.appPackage ?? ""
    message.int13 = object.int13 ?? 0
    return message
  },
}

function createBaseRemoteImeKeyInject(): RemoteImeKeyInject {
  return { appInfo: undefined, textFieldStatus: undefined }
}

export const RemoteImeKeyInject = {
  encode(message: RemoteImeKeyInject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appInfo !== undefined) {
      RemoteAppInfo.encode(message.appInfo, writer.uint32(10).fork()).ldelim()
    }
    if (message.textFieldStatus !== undefined) {
      RemoteTextFieldStatus.encode(message.textFieldStatus, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteImeKeyInject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteImeKeyInject()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.appInfo = RemoteAppInfo.decode(reader, reader.uint32())
          break
        case 2:
          message.textFieldStatus = RemoteTextFieldStatus.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoteImeKeyInject {
    return {
      appInfo: isSet(object.appInfo) ? RemoteAppInfo.fromJSON(object.appInfo) : undefined,
      textFieldStatus: isSet(object.textFieldStatus)
        ? RemoteTextFieldStatus.fromJSON(object.textFieldStatus)
        : undefined,
    }
  },

  toJSON(message: RemoteImeKeyInject): unknown {
    const obj: any = {}
    message.appInfo !== undefined &&
      (obj.appInfo = message.appInfo ? RemoteAppInfo.toJSON(message.appInfo) : undefined)
    message.textFieldStatus !== undefined &&
      (obj.textFieldStatus = message.textFieldStatus
        ? RemoteTextFieldStatus.toJSON(message.textFieldStatus)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteImeKeyInject>, I>>(
    object: I
  ): RemoteImeKeyInject {
    const message = createBaseRemoteImeKeyInject()
    message.appInfo =
      object.appInfo !== undefined && object.appInfo !== null
        ? RemoteAppInfo.fromPartial(object.appInfo)
        : undefined
    message.textFieldStatus =
      object.textFieldStatus !== undefined && object.textFieldStatus !== null
        ? RemoteTextFieldStatus.fromPartial(object.textFieldStatus)
        : undefined
    return message
  },
}

function createBaseRemoteKeyInject(): RemoteKeyInject {
  return { keyCode: 0, direction: 0 }
}

export const RemoteKeyInject = {
  encode(message: RemoteKeyInject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyCode !== 0) {
      writer.uint32(8).int32(message.keyCode)
    }
    if (message.direction !== 0) {
      writer.uint32(16).int32(message.direction)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteKeyInject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteKeyInject()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.keyCode = reader.int32() as any
          break
        case 2:
          message.direction = reader.int32() as any
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoteKeyInject {
    return {
      keyCode: isSet(object.keyCode) ? remoteKeyCodeFromJSON(object.keyCode) : 0,
      direction: isSet(object.direction) ? remoteDirectionFromJSON(object.direction) : 0,
    }
  },

  toJSON(message: RemoteKeyInject): unknown {
    const obj: any = {}
    message.keyCode !== undefined && (obj.keyCode = remoteKeyCodeToJSON(message.keyCode))
    message.direction !== undefined &&
      (obj.direction = remoteDirectionToJSON(message.direction))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteKeyInject>, I>>(object: I): RemoteKeyInject {
    const message = createBaseRemoteKeyInject()
    message.keyCode = object.keyCode ?? 0
    message.direction = object.direction ?? 0
    return message
  },
}

function createBaseRemotePingResponse(): RemotePingResponse {
  return { val1: 0 }
}

export const RemotePingResponse = {
  encode(message: RemotePingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.val1 !== 0) {
      writer.uint32(8).int32(message.val1)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemotePingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemotePingResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.val1 = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemotePingResponse {
    return {
      val1: isSet(object.val1) ? Number(object.val1) : 0,
    }
  },

  toJSON(message: RemotePingResponse): unknown {
    const obj: any = {}
    message.val1 !== undefined && (obj.val1 = Math.round(message.val1))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemotePingResponse>, I>>(
    object: I
  ): RemotePingResponse {
    const message = createBaseRemotePingResponse()
    message.val1 = object.val1 ?? 0
    return message
  },
}

function createBaseRemotePingRequest(): RemotePingRequest {
  return { val1: 0, val2: 0 }
}

export const RemotePingRequest = {
  encode(message: RemotePingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.val1 !== 0) {
      writer.uint32(8).int32(message.val1)
    }
    if (message.val2 !== 0) {
      writer.uint32(16).int32(message.val2)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemotePingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemotePingRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.val1 = reader.int32()
          break
        case 2:
          message.val2 = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemotePingRequest {
    return {
      val1: isSet(object.val1) ? Number(object.val1) : 0,
      val2: isSet(object.val2) ? Number(object.val2) : 0,
    }
  },

  toJSON(message: RemotePingRequest): unknown {
    const obj: any = {}
    message.val1 !== undefined && (obj.val1 = Math.round(message.val1))
    message.val2 !== undefined && (obj.val2 = Math.round(message.val2))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemotePingRequest>, I>>(
    object: I
  ): RemotePingRequest {
    const message = createBaseRemotePingRequest()
    message.val1 = object.val1 ?? 0
    message.val2 = object.val2 ?? 0
    return message
  },
}

function createBaseRemoteSetActive(): RemoteSetActive {
  return { active: 0 }
}

export const RemoteSetActive = {
  encode(message: RemoteSetActive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active !== 0) {
      writer.uint32(8).int32(message.active)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteSetActive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteSetActive()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.active = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoteSetActive {
    return {
      active: isSet(object.active) ? Number(object.active) : 0,
    }
  },

  toJSON(message: RemoteSetActive): unknown {
    const obj: any = {}
    message.active !== undefined && (obj.active = Math.round(message.active))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteSetActive>, I>>(object: I): RemoteSetActive {
    const message = createBaseRemoteSetActive()
    message.active = object.active ?? 0
    return message
  },
}

function createBaseRemoteDeviceInfo(): RemoteDeviceInfo {
  return { model: "", vendor: "", unknown1: 0, unknown2: "", packageName: "", appVersion: "" }
}

export const RemoteDeviceInfo = {
  encode(message: RemoteDeviceInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.model !== "") {
      writer.uint32(10).string(message.model)
    }
    if (message.vendor !== "") {
      writer.uint32(18).string(message.vendor)
    }
    if (message.unknown1 !== 0) {
      writer.uint32(24).int32(message.unknown1)
    }
    if (message.unknown2 !== "") {
      writer.uint32(34).string(message.unknown2)
    }
    if (message.packageName !== "") {
      writer.uint32(42).string(message.packageName)
    }
    if (message.appVersion !== "") {
      writer.uint32(50).string(message.appVersion)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteDeviceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteDeviceInfo()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.model = reader.string()
          break
        case 2:
          message.vendor = reader.string()
          break
        case 3:
          message.unknown1 = reader.int32()
          break
        case 4:
          message.unknown2 = reader.string()
          break
        case 5:
          message.packageName = reader.string()
          break
        case 6:
          message.appVersion = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoteDeviceInfo {
    return {
      model: isSet(object.model) ? String(object.model) : "",
      vendor: isSet(object.vendor) ? String(object.vendor) : "",
      unknown1: isSet(object.unknown1) ? Number(object.unknown1) : 0,
      unknown2: isSet(object.unknown2) ? String(object.unknown2) : "",
      packageName: isSet(object.packageName) ? String(object.packageName) : "",
      appVersion: isSet(object.appVersion) ? String(object.appVersion) : "",
    }
  },

  toJSON(message: RemoteDeviceInfo): unknown {
    const obj: any = {}
    message.model !== undefined && (obj.model = message.model)
    message.vendor !== undefined && (obj.vendor = message.vendor)
    message.unknown1 !== undefined && (obj.unknown1 = Math.round(message.unknown1))
    message.unknown2 !== undefined && (obj.unknown2 = message.unknown2)
    message.packageName !== undefined && (obj.packageName = message.packageName)
    message.appVersion !== undefined && (obj.appVersion = message.appVersion)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteDeviceInfo>, I>>(object: I): RemoteDeviceInfo {
    const message = createBaseRemoteDeviceInfo()
    message.model = object.model ?? ""
    message.vendor = object.vendor ?? ""
    message.unknown1 = object.unknown1 ?? 0
    message.unknown2 = object.unknown2 ?? ""
    message.packageName = object.packageName ?? ""
    message.appVersion = object.appVersion ?? ""
    return message
  },
}

function createBaseRemoteConfigure(): RemoteConfigure {
  return { code1: 0, deviceInfo: undefined }
}

export const RemoteConfigure = {
  encode(message: RemoteConfigure, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code1 !== 0) {
      writer.uint32(8).int32(message.code1)
    }
    if (message.deviceInfo !== undefined) {
      RemoteDeviceInfo.encode(message.deviceInfo, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteConfigure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteConfigure()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.code1 = reader.int32()
          break
        case 2:
          message.deviceInfo = RemoteDeviceInfo.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoteConfigure {
    return {
      code1: isSet(object.code1) ? Number(object.code1) : 0,
      deviceInfo: isSet(object.deviceInfo)
        ? RemoteDeviceInfo.fromJSON(object.deviceInfo)
        : undefined,
    }
  },

  toJSON(message: RemoteConfigure): unknown {
    const obj: any = {}
    message.code1 !== undefined && (obj.code1 = Math.round(message.code1))
    message.deviceInfo !== undefined &&
      (obj.deviceInfo = message.deviceInfo
        ? RemoteDeviceInfo.toJSON(message.deviceInfo)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteConfigure>, I>>(object: I): RemoteConfigure {
    const message = createBaseRemoteConfigure()
    message.code1 = object.code1 ?? 0
    message.deviceInfo =
      object.deviceInfo !== undefined && object.deviceInfo !== null
        ? RemoteDeviceInfo.fromPartial(object.deviceInfo)
        : undefined
    return message
  },
}

function createBaseRemoteError(): RemoteError {
  return { value: false, message: undefined }
}

export const RemoteError = {
  encode(message: RemoteError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value)
    }
    if (message.message !== undefined) {
      RemoteMessage.encode(message.message, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteError()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bool()
          break
        case 2:
          message.message = RemoteMessage.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoteError {
    return {
      value: isSet(object.value) ? Boolean(object.value) : false,
      message: isSet(object.message) ? RemoteMessage.fromJSON(object.message) : undefined,
    }
  },

  toJSON(message: RemoteError): unknown {
    const obj: any = {}
    message.value !== undefined && (obj.value = message.value)
    message.message !== undefined &&
      (obj.message = message.message ? RemoteMessage.toJSON(message.message) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteError>, I>>(object: I): RemoteError {
    const message = createBaseRemoteError()
    message.value = object.value ?? false
    message.message =
      object.message !== undefined && object.message !== null
        ? RemoteMessage.fromPartial(object.message)
        : undefined
    return message
  },
}

function createBaseRemoteMessage(): RemoteMessage {
  return {
    remoteConfigure: undefined,
    remoteSetActive: undefined,
    remoteError: undefined,
    remotePingRequest: undefined,
    remotePingResponse: undefined,
    remoteKeyInject: undefined,
    remoteImeKeyInject: undefined,
    remoteImeBatchEdit: undefined,
    remoteImeShowRequest: undefined,
    remoteVoiceBegin: undefined,
    remoteVoicePayload: undefined,
    remoteVoiceEnd: undefined,
    remoteStart: undefined,
    remoteSetVolumeLevel: undefined,
    remoteAdjustVolumeLevel: undefined,
    remoteSetPreferredAudioDevice: undefined,
    remoteResetPreferredAudioDevice: undefined,
    remoteAppLinkLaunchRequest: undefined,
  }
}

export const RemoteMessage = {
  encode(message: RemoteMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.remoteConfigure !== undefined) {
      RemoteConfigure.encode(message.remoteConfigure, writer.uint32(10).fork()).ldelim()
    }
    if (message.remoteSetActive !== undefined) {
      RemoteSetActive.encode(message.remoteSetActive, writer.uint32(18).fork()).ldelim()
    }
    if (message.remoteError !== undefined) {
      RemoteError.encode(message.remoteError, writer.uint32(26).fork()).ldelim()
    }
    if (message.remotePingRequest !== undefined) {
      RemotePingRequest.encode(message.remotePingRequest, writer.uint32(66).fork()).ldelim()
    }
    if (message.remotePingResponse !== undefined) {
      RemotePingResponse.encode(message.remotePingResponse, writer.uint32(74).fork()).ldelim()
    }
    if (message.remoteKeyInject !== undefined) {
      RemoteKeyInject.encode(message.remoteKeyInject, writer.uint32(82).fork()).ldelim()
    }
    if (message.remoteImeKeyInject !== undefined) {
      RemoteImeKeyInject.encode(message.remoteImeKeyInject, writer.uint32(162).fork()).ldelim()
    }
    if (message.remoteImeBatchEdit !== undefined) {
      RemoteImeBatchEdit.encode(message.remoteImeBatchEdit, writer.uint32(170).fork()).ldelim()
    }
    if (message.remoteImeShowRequest !== undefined) {
      RemoteImeShowRequest.encode(
        message.remoteImeShowRequest,
        writer.uint32(178).fork()
      ).ldelim()
    }
    if (message.remoteVoiceBegin !== undefined) {
      RemoteVoiceBegin.encode(message.remoteVoiceBegin, writer.uint32(242).fork()).ldelim()
    }
    if (message.remoteVoicePayload !== undefined) {
      RemoteVoicePayload.encode(message.remoteVoicePayload, writer.uint32(250).fork()).ldelim()
    }
    if (message.remoteVoiceEnd !== undefined) {
      RemoteVoiceEnd.encode(message.remoteVoiceEnd, writer.uint32(258).fork()).ldelim()
    }
    if (message.remoteStart !== undefined) {
      RemoteStart.encode(message.remoteStart, writer.uint32(322).fork()).ldelim()
    }
    if (message.remoteSetVolumeLevel !== undefined) {
      RemoteSetVolumeLevel.encode(
        message.remoteSetVolumeLevel,
        writer.uint32(402).fork()
      ).ldelim()
    }
    if (message.remoteAdjustVolumeLevel !== undefined) {
      RemoteAdjustVolumeLevel.encode(
        message.remoteAdjustVolumeLevel,
        writer.uint32(410).fork()
      ).ldelim()
    }
    if (message.remoteSetPreferredAudioDevice !== undefined) {
      RemoteSetPreferredAudioDevice.encode(
        message.remoteSetPreferredAudioDevice,
        writer.uint32(482).fork()
      ).ldelim()
    }
    if (message.remoteResetPreferredAudioDevice !== undefined) {
      RemoteResetPreferredAudioDevice.encode(
        message.remoteResetPreferredAudioDevice,
        writer.uint32(490).fork()
      ).ldelim()
    }
    if (message.remoteAppLinkLaunchRequest !== undefined) {
      RemoteAppLinkLaunchRequest.encode(
        message.remoteAppLinkLaunchRequest,
        writer.uint32(722).fork()
      ).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoteMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseRemoteMessage()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.remoteConfigure = RemoteConfigure.decode(reader, reader.uint32())
          break
        case 2:
          message.remoteSetActive = RemoteSetActive.decode(reader, reader.uint32())
          break
        case 3:
          message.remoteError = RemoteError.decode(reader, reader.uint32())
          break
        case 8:
          message.remotePingRequest = RemotePingRequest.decode(reader, reader.uint32())
          break
        case 9:
          message.remotePingResponse = RemotePingResponse.decode(reader, reader.uint32())
          break
        case 10:
          message.remoteKeyInject = RemoteKeyInject.decode(reader, reader.uint32())
          break
        case 20:
          message.remoteImeKeyInject = RemoteImeKeyInject.decode(reader, reader.uint32())
          break
        case 21:
          message.remoteImeBatchEdit = RemoteImeBatchEdit.decode(reader, reader.uint32())
          break
        case 22:
          message.remoteImeShowRequest = RemoteImeShowRequest.decode(reader, reader.uint32())
          break
        case 30:
          message.remoteVoiceBegin = RemoteVoiceBegin.decode(reader, reader.uint32())
          break
        case 31:
          message.remoteVoicePayload = RemoteVoicePayload.decode(reader, reader.uint32())
          break
        case 32:
          message.remoteVoiceEnd = RemoteVoiceEnd.decode(reader, reader.uint32())
          break
        case 40:
          message.remoteStart = RemoteStart.decode(reader, reader.uint32())
          break
        case 50:
          message.remoteSetVolumeLevel = RemoteSetVolumeLevel.decode(reader, reader.uint32())
          break
        case 51:
          message.remoteAdjustVolumeLevel = RemoteAdjustVolumeLevel.decode(
            reader,
            reader.uint32()
          )
          break
        case 60:
          message.remoteSetPreferredAudioDevice = RemoteSetPreferredAudioDevice.decode(
            reader,
            reader.uint32()
          )
          break
        case 61:
          message.remoteResetPreferredAudioDevice = RemoteResetPreferredAudioDevice.decode(
            reader,
            reader.uint32()
          )
          break
        case 90:
          message.remoteAppLinkLaunchRequest = RemoteAppLinkLaunchRequest.decode(
            reader,
            reader.uint32()
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RemoteMessage {
    return {
      remoteConfigure: isSet(object.remoteConfigure)
        ? RemoteConfigure.fromJSON(object.remoteConfigure)
        : undefined,
      remoteSetActive: isSet(object.remoteSetActive)
        ? RemoteSetActive.fromJSON(object.remoteSetActive)
        : undefined,
      remoteError: isSet(object.remoteError)
        ? RemoteError.fromJSON(object.remoteError)
        : undefined,
      remotePingRequest: isSet(object.remotePingRequest)
        ? RemotePingRequest.fromJSON(object.remotePingRequest)
        : undefined,
      remotePingResponse: isSet(object.remotePingResponse)
        ? RemotePingResponse.fromJSON(object.remotePingResponse)
        : undefined,
      remoteKeyInject: isSet(object.remoteKeyInject)
        ? RemoteKeyInject.fromJSON(object.remoteKeyInject)
        : undefined,
      remoteImeKeyInject: isSet(object.remoteImeKeyInject)
        ? RemoteImeKeyInject.fromJSON(object.remoteImeKeyInject)
        : undefined,
      remoteImeBatchEdit: isSet(object.remoteImeBatchEdit)
        ? RemoteImeBatchEdit.fromJSON(object.remoteImeBatchEdit)
        : undefined,
      remoteImeShowRequest: isSet(object.remoteImeShowRequest)
        ? RemoteImeShowRequest.fromJSON(object.remoteImeShowRequest)
        : undefined,
      remoteVoiceBegin: isSet(object.remoteVoiceBegin)
        ? RemoteVoiceBegin.fromJSON(object.remoteVoiceBegin)
        : undefined,
      remoteVoicePayload: isSet(object.remoteVoicePayload)
        ? RemoteVoicePayload.fromJSON(object.remoteVoicePayload)
        : undefined,
      remoteVoiceEnd: isSet(object.remoteVoiceEnd)
        ? RemoteVoiceEnd.fromJSON(object.remoteVoiceEnd)
        : undefined,
      remoteStart: isSet(object.remoteStart)
        ? RemoteStart.fromJSON(object.remoteStart)
        : undefined,
      remoteSetVolumeLevel: isSet(object.remoteSetVolumeLevel)
        ? RemoteSetVolumeLevel.fromJSON(object.remoteSetVolumeLevel)
        : undefined,
      remoteAdjustVolumeLevel: isSet(object.remoteAdjustVolumeLevel)
        ? RemoteAdjustVolumeLevel.fromJSON(object.remoteAdjustVolumeLevel)
        : undefined,
      remoteSetPreferredAudioDevice: isSet(object.remoteSetPreferredAudioDevice)
        ? RemoteSetPreferredAudioDevice.fromJSON(object.remoteSetPreferredAudioDevice)
        : undefined,
      remoteResetPreferredAudioDevice: isSet(object.remoteResetPreferredAudioDevice)
        ? RemoteResetPreferredAudioDevice.fromJSON(object.remoteResetPreferredAudioDevice)
        : undefined,
      remoteAppLinkLaunchRequest: isSet(object.remoteAppLinkLaunchRequest)
        ? RemoteAppLinkLaunchRequest.fromJSON(object.remoteAppLinkLaunchRequest)
        : undefined,
    }
  },

  toJSON(message: RemoteMessage): unknown {
    const obj: any = {}
    message.remoteConfigure !== undefined &&
      (obj.remoteConfigure = message.remoteConfigure
        ? RemoteConfigure.toJSON(message.remoteConfigure)
        : undefined)
    message.remoteSetActive !== undefined &&
      (obj.remoteSetActive = message.remoteSetActive
        ? RemoteSetActive.toJSON(message.remoteSetActive)
        : undefined)
    message.remoteError !== undefined &&
      (obj.remoteError = message.remoteError
        ? RemoteError.toJSON(message.remoteError)
        : undefined)
    message.remotePingRequest !== undefined &&
      (obj.remotePingRequest = message.remotePingRequest
        ? RemotePingRequest.toJSON(message.remotePingRequest)
        : undefined)
    message.remotePingResponse !== undefined &&
      (obj.remotePingResponse = message.remotePingResponse
        ? RemotePingResponse.toJSON(message.remotePingResponse)
        : undefined)
    message.remoteKeyInject !== undefined &&
      (obj.remoteKeyInject = message.remoteKeyInject
        ? RemoteKeyInject.toJSON(message.remoteKeyInject)
        : undefined)
    message.remoteImeKeyInject !== undefined &&
      (obj.remoteImeKeyInject = message.remoteImeKeyInject
        ? RemoteImeKeyInject.toJSON(message.remoteImeKeyInject)
        : undefined)
    message.remoteImeBatchEdit !== undefined &&
      (obj.remoteImeBatchEdit = message.remoteImeBatchEdit
        ? RemoteImeBatchEdit.toJSON(message.remoteImeBatchEdit)
        : undefined)
    message.remoteImeShowRequest !== undefined &&
      (obj.remoteImeShowRequest = message.remoteImeShowRequest
        ? RemoteImeShowRequest.toJSON(message.remoteImeShowRequest)
        : undefined)
    message.remoteVoiceBegin !== undefined &&
      (obj.remoteVoiceBegin = message.remoteVoiceBegin
        ? RemoteVoiceBegin.toJSON(message.remoteVoiceBegin)
        : undefined)
    message.remoteVoicePayload !== undefined &&
      (obj.remoteVoicePayload = message.remoteVoicePayload
        ? RemoteVoicePayload.toJSON(message.remoteVoicePayload)
        : undefined)
    message.remoteVoiceEnd !== undefined &&
      (obj.remoteVoiceEnd = message.remoteVoiceEnd
        ? RemoteVoiceEnd.toJSON(message.remoteVoiceEnd)
        : undefined)
    message.remoteStart !== undefined &&
      (obj.remoteStart = message.remoteStart
        ? RemoteStart.toJSON(message.remoteStart)
        : undefined)
    message.remoteSetVolumeLevel !== undefined &&
      (obj.remoteSetVolumeLevel = message.remoteSetVolumeLevel
        ? RemoteSetVolumeLevel.toJSON(message.remoteSetVolumeLevel)
        : undefined)
    message.remoteAdjustVolumeLevel !== undefined &&
      (obj.remoteAdjustVolumeLevel = message.remoteAdjustVolumeLevel
        ? RemoteAdjustVolumeLevel.toJSON(message.remoteAdjustVolumeLevel)
        : undefined)
    message.remoteSetPreferredAudioDevice !== undefined &&
      (obj.remoteSetPreferredAudioDevice = message.remoteSetPreferredAudioDevice
        ? RemoteSetPreferredAudioDevice.toJSON(message.remoteSetPreferredAudioDevice)
        : undefined)
    message.remoteResetPreferredAudioDevice !== undefined &&
      (obj.remoteResetPreferredAudioDevice = message.remoteResetPreferredAudioDevice
        ? RemoteResetPreferredAudioDevice.toJSON(message.remoteResetPreferredAudioDevice)
        : undefined)
    message.remoteAppLinkLaunchRequest !== undefined &&
      (obj.remoteAppLinkLaunchRequest = message.remoteAppLinkLaunchRequest
        ? RemoteAppLinkLaunchRequest.toJSON(message.remoteAppLinkLaunchRequest)
        : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<RemoteMessage>, I>>(object: I): RemoteMessage {
    const message = createBaseRemoteMessage()
    message.remoteConfigure =
      object.remoteConfigure !== undefined && object.remoteConfigure !== null
        ? RemoteConfigure.fromPartial(object.remoteConfigure)
        : undefined
    message.remoteSetActive =
      object.remoteSetActive !== undefined && object.remoteSetActive !== null
        ? RemoteSetActive.fromPartial(object.remoteSetActive)
        : undefined
    message.remoteError =
      object.remoteError !== undefined && object.remoteError !== null
        ? RemoteError.fromPartial(object.remoteError)
        : undefined
    message.remotePingRequest =
      object.remotePingRequest !== undefined && object.remotePingRequest !== null
        ? RemotePingRequest.fromPartial(object.remotePingRequest)
        : undefined
    message.remotePingResponse =
      object.remotePingResponse !== undefined && object.remotePingResponse !== null
        ? RemotePingResponse.fromPartial(object.remotePingResponse)
        : undefined
    message.remoteKeyInject =
      object.remoteKeyInject !== undefined && object.remoteKeyInject !== null
        ? RemoteKeyInject.fromPartial(object.remoteKeyInject)
        : undefined
    message.remoteImeKeyInject =
      object.remoteImeKeyInject !== undefined && object.remoteImeKeyInject !== null
        ? RemoteImeKeyInject.fromPartial(object.remoteImeKeyInject)
        : undefined
    message.remoteImeBatchEdit =
      object.remoteImeBatchEdit !== undefined && object.remoteImeBatchEdit !== null
        ? RemoteImeBatchEdit.fromPartial(object.remoteImeBatchEdit)
        : undefined
    message.remoteImeShowRequest =
      object.remoteImeShowRequest !== undefined && object.remoteImeShowRequest !== null
        ? RemoteImeShowRequest.fromPartial(object.remoteImeShowRequest)
        : undefined
    message.remoteVoiceBegin =
      object.remoteVoiceBegin !== undefined && object.remoteVoiceBegin !== null
        ? RemoteVoiceBegin.fromPartial(object.remoteVoiceBegin)
        : undefined
    message.remoteVoicePayload =
      object.remoteVoicePayload !== undefined && object.remoteVoicePayload !== null
        ? RemoteVoicePayload.fromPartial(object.remoteVoicePayload)
        : undefined
    message.remoteVoiceEnd =
      object.remoteVoiceEnd !== undefined && object.remoteVoiceEnd !== null
        ? RemoteVoiceEnd.fromPartial(object.remoteVoiceEnd)
        : undefined
    message.remoteStart =
      object.remoteStart !== undefined && object.remoteStart !== null
        ? RemoteStart.fromPartial(object.remoteStart)
        : undefined
    message.remoteSetVolumeLevel =
      object.remoteSetVolumeLevel !== undefined && object.remoteSetVolumeLevel !== null
        ? RemoteSetVolumeLevel.fromPartial(object.remoteSetVolumeLevel)
        : undefined
    message.remoteAdjustVolumeLevel =
      object.remoteAdjustVolumeLevel !== undefined && object.remoteAdjustVolumeLevel !== null
        ? RemoteAdjustVolumeLevel.fromPartial(object.remoteAdjustVolumeLevel)
        : undefined
    message.remoteSetPreferredAudioDevice =
      object.remoteSetPreferredAudioDevice !== undefined &&
      object.remoteSetPreferredAudioDevice !== null
        ? RemoteSetPreferredAudioDevice.fromPartial(object.remoteSetPreferredAudioDevice)
        : undefined
    message.remoteResetPreferredAudioDevice =
      object.remoteResetPreferredAudioDevice !== undefined &&
      object.remoteResetPreferredAudioDevice !== null
        ? RemoteResetPreferredAudioDevice.fromPartial(object.remoteResetPreferredAudioDevice)
        : undefined
    message.remoteAppLinkLaunchRequest =
      object.remoteAppLinkLaunchRequest !== undefined &&
      object.remoteAppLinkLaunchRequest !== null
        ? RemoteAppLinkLaunchRequest.fromPartial(object.remoteAppLinkLaunchRequest)
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
