export type KeyboardProps = {
  key: string
  shiftKey?: string
  width?: number
}

// 650 - (4 * 9 (inner gap) = 36px) = 614px
export const FUNCTION_KEYS_ROW: KeyboardProps[][] = [
  // 14 * 40 = 560px
  [{ key: 'Esc' }],
  [{ key: 'F1' }, { key: 'F2' }, { key: 'F3' }, { key: 'F4' }],
  [{ key: 'F5' }, { key: 'F6' }, { key: 'F7' }, { key: 'F8' }],
  [{ key: 'F9' }, { key: 'F10' }, { key: 'F11' }, { key: 'F12' }],

  [
    {
      key: 'F13',
    },
  ],
]

// 620 - gap ( 4 * 13=52px ) = 598px
const NUMBER_ROW: KeyboardProps[] = [
  // 13 * 40 = 520px
  { key: '`', shiftKey: '~' },
  { key: '1', shiftKey: '!' },
  { key: '2', shiftKey: '@' },
  { key: '3', shiftKey: '#' },
  { key: '4', shiftKey: '$' },
  { key: '5', shiftKey: '%' },
  { key: '6', shiftKey: '^' },
  { key: '7', shiftKey: '&' },
  { key: '8', shiftKey: '*' },
  { key: '9', shiftKey: '(' },
  { key: '0', shiftKey: ')' },
  { key: '-', shiftKey: '_' },
  { key: '=', shiftKey: '+' },
  { key: 'Backspace', width: 130 - 52 },
]

// 650 - gap(4 * 13 = 52px)=598px;
const QWE_ROW: KeyboardProps[] = [
  { key: 'Tab', width: 85 - 26 },
  // 12 * 40 = 480px
  { key: 'Q' },
  { key: 'W' },
  { key: 'E' },
  { key: 'R' },
  { key: 'T' },
  { key: 'Y' },
  { key: 'U' },
  { key: 'I' },
  { key: 'O' },
  { key: 'P' },
  { key: '[', shiftKey: '{' },
  { key: ']', shiftKey: '}' },
  { key: '\\', shiftKey: '|', width: 85 - 26 },
]

// 650 - gap(4*12 = 48px) = 602px
const ASD_ROW: KeyboardProps[] = [
  { key: 'Caps Lock', width: 95 - 24 },
  // 440px
  { key: 'A' },
  { key: 'S' },
  { key: 'D' },
  { key: 'F' },
  { key: 'G' },
  { key: 'H' },
  { key: 'J' },
  { key: 'K' },
  { key: 'L' },
  { key: ';', shiftKey: ':' },
  { key: "'", shiftKey: '"' },

  { key: 'Enter', width: 115 - 24 },
]

// 650 - gap (4 * 11 = 44px) = available 606px
const ZXCV_ROW: KeyboardProps[] = [
  { key: 'Shift', width: 115 - 22 },
  { key: 'Z' },
  { key: 'X' },
  { key: 'C' },
  { key: 'V' },
  { key: 'B' },
  { key: 'N' },
  { key: 'M' },
  { key: ',', shiftKey: '<' },
  { key: '.', shiftKey: '>' },
  { key: '/', shiftKey: '?' },
  { key: 'Shift', width: 135 - 22 },
]

// 650 - gap (0.5 * 8 = 4) = 646
const MODIFIER_KEYS_ROW: KeyboardProps[] = [
  // { key: 'Ctrl', width: 100 },
  // { key: 'Meta', shiftKey: 'Cmd', width: 555 },
  { key: 'Ctrl', width: 50 },
  { key: 'Meta', shiftKey: 'Cmd', width: 50 },
  { key: 'Alt', width: 50 },
  { key: 'Space', width: 300 - 28 },
  { key: 'Alt', width: 50 },
  { key: 'Meta', shiftKey: 'Cmd', width: 50 },
  { key: 'Menu', width: 50 },
  { key: 'Ctrl', width: 50 },

  // { key: 'Ctrl', width: 50 },
  // { key: 'Meta', shiftKey: 'Cmd', width: 50 },
  // { key: 'Alt', width: 50 },
  // { key: 'Space', width: 280 },
  // { key: 'Alt', width: 50 },
  // { key: 'Meta', shiftKey: 'Cmd', width: 50 },
  // { key: 'Menu', width: 50 },
  // { key: 'Ctrl', width: 50 },
]

export const KEYBOARD_LAYOUT: KeyboardProps[][] = [
  NUMBER_ROW,
  QWE_ROW,
  ASD_ROW,
  ZXCV_ROW,
  MODIFIER_KEYS_ROW,
]
