export type CustomizeType = 'keyboardType' | 'frame' | 'font' | 'keycap' | 'image'

export type CustomizeValue = {
  keyboardType: 'tkl' | 'full'
  frame: string
  font: string
  keycap: string
  image: string | null
}
