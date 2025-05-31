export type KeyboardProps = {
  key: string;
  shiftKey?: string;
  width?: number;
}

const FUNCTION_KEYS_ROW: KeyboardProps[] = [
  { key: 'Esc' },
  { key: 'F1' },
  { key: 'F2' },
  { key: 'F3' },
  { key: 'F4' },
  { key: 'F5' },
  { key: 'F6' },
  { key: 'F7' },
  { key: 'F8' },
  { key: 'F9' },
  { key: 'F10' },
  { key: 'F11' },
  { key: 'F12' },
];

const NUMBER_ROW: KeyboardProps[] = [
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
  { key: 'Backspace', width: 90 },
];

const QWE_ROW: KeyboardProps[] = [
  { key: 'Tab', width: 70 },
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
  { key: '\\', shiftKey: '|', width: 70 },
];

const ASD_ROW: KeyboardProps[] = [
  { key: 'Caps Lock', width: 80 },
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
  { key: '\'', shiftKey: '"' },
  { key: 'Enter', width: 95 },
];

const ZXCV_ROW: KeyboardProps[] = [
  { key: 'Shift', width: 95 },
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
  { key: 'Shift', width: 125 },
];

const MODIFIER_KEYS_ROW: KeyboardProps[] = [
  { key: 'Ctrl', width: 50 },
  { key: 'Meta', shiftKey: 'Cmd', width: 50 },
  { key: 'Alt', width: 50 },
  { key: 'Space', width: 280 },
  { key: 'Alt', width: 50 },
  { key: 'Meta', shiftKey: 'Cmd', width: 50 },
  { key: 'Menu', width: 50 },
  { key: 'Ctrl', width: 50 },
];

export const KEYBOARD_LAYOUT: KeyboardProps[][] = [
  FUNCTION_KEYS_ROW,
  NUMBER_ROW,
  QWE_ROW,
  ASD_ROW,
  ZXCV_ROW,
  MODIFIER_KEYS_ROW,
];
