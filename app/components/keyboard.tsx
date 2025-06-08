import { FUNCTION_KEYS_ROW, KEYBOARD_LAYOUT, type KeyboardProps } from '@/interfaces'
import { Keycap, type KeycapRef } from './keycap'
import { KEYBOARD_HEIGHT, KEYBOARD_WIDTH } from '@/constants'
import { forwardRef, type Ref, useImperativeHandle, useRef } from 'react'

type KeyboardLayoutProps = {
  color?: string
  frameColor: string
  fontColor: string
  image?: string
  type: 'color' | 'image'
  ref: Ref<HTMLDivElement>
}

const FUNCTION_KEYS_ROW_WITH_POSITION: {
  key: KeyboardProps
  x: number
  y: number
}[][] = []

let xOffset = 0
for (let idx = 0; idx < FUNCTION_KEYS_ROW.length; idx++) {
  const row = FUNCTION_KEYS_ROW[idx]
  const resultRow: { key: KeyboardProps; x: number; y: number }[] = []

  for (let innerIdx = 0; innerIdx < row.length; innerIdx++) {
    const key = row[innerIdx]
    const keyWidth = key.width || 40

    resultRow.push({
      key,
      x: xOffset,
      y: 0,
    })

    xOffset += keyWidth
    if (innerIdx !== row.length - 1) {
      xOffset += 4 // gap between keys
    }
  }

  FUNCTION_KEYS_ROW_WITH_POSITION.push(resultRow)

  if (idx !== FUNCTION_KEYS_ROW.length - 1) {
    xOffset += 14 // gap between rows
  }
}

const KEYBORD_LAYOUT_WITH_POSITION = KEYBOARD_LAYOUT.map((row, rowIndex) => {
  let xOffset = 0
  return row.map((key, idx) => {
    const keyWidth = key.width || 40
    const pos = { x: xOffset, y: (rowIndex + 1) * 40 }
    xOffset += keyWidth + 4
    return { key, ...pos }
  })
})

export interface KeyboardLayoutRef {
  setFrameColor: (color: string) => void
  setKeycapColor: (color: string) => void
  setFontColor: (color: string) => void
  setImage: (image: string) => void
}

export const KeyboardLayout = forwardRef<
  KeyboardLayoutRef,
  KeyboardLayoutProps
>(({ type }, ref) => {
  const frameColorRef = useRef<HTMLDivElement>(null)
  const keycapRefs = useRef<(KeycapRef | null)[]>([])

  useImperativeHandle(ref, () => {
    return {
      setFrameColor: color => {
        console.log('setting frame color')
        if (frameColorRef.current) {
          frameColorRef.current.style.backgroundColor = color
        }
      },
      setFontColor: color => {
        for (const ref of keycapRefs.current) {
          if (ref) {
            ref.setKeyFontColor(color)
          }
        }
      },
      setKeycapColor: color => {
        for (const ref of keycapRefs.current) {
          if (ref) {
            ref.setKeycapColor(color)
          }
        }
      },
      setImage: image => {
        for (const ref of keycapRefs.current) {
          if (ref) {
            ref.setKeycapImage(image)
          }
        }
      },
    }
  })

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Keyboard Frame Container */}
      <div
        className="flex flex-col gap-1 w-[666px] p-2 bg-gray-800 border-gray-700 rounded-2xl shadow-xl"
        ref={frameColorRef}
      >
        {/* Function Key Row */}
        <div className="w-full justify-between flex gap-3.5">
          {FUNCTION_KEYS_ROW_WITH_POSITION.map((row, index) => (
            <div className="w-full flex justify-between gap-1" key={index}>
              {row.map((keyWithPos, innerIndex) => {
                return (
                  <Keycap
                    key={innerIndex}
                    ref={el => {
                      keycapRefs.current.push(el)
                    }}
                    xPosition={keyWithPos.x}
                    yPosition={keyWithPos.y}
                    keyboardWidth={KEYBOARD_WIDTH}
                    keyboardHeight={KEYBOARD_HEIGHT}
                    type={type}
                    shiftKey={keyWithPos.key.shiftKey}
                    keyChar={keyWithPos.key.key}
                    keyWidth={keyWithPos.key.width}
                  />
                )
              })}
            </div>
          ))}
        </div>

        {/* Main Keyboard Rows */}
        {KEYBORD_LAYOUT_WITH_POSITION.map((row, innerIndex) => {
          return (
            <div key={innerIndex} className="w-full justify-between flex gap-1">
              {row.map((keyWithPos, innerIndex) => {
                return (
                  <Keycap
                    key={innerIndex}
                    type={type}
                    ref={el => {
                      keycapRefs.current.push(el)
                    }}
                    shiftKey={keyWithPos.key.shiftKey}
                    keyChar={keyWithPos.key.key}
                    keyWidth={keyWithPos.key.width}
                    xPosition={keyWithPos.x}
                    yPosition={keyWithPos.y}
                    keyboardWidth={KEYBOARD_WIDTH}
                    keyboardHeight={KEYBOARD_HEIGHT}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
})
