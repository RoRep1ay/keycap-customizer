import { FUNCTION_KEYS_ROW, KEYBOARD_LAYOUT, KEYBOARD_NUMBER_SIDE_LAYOUT, KEYBOARD_SIDE_LAYOUT, type KeyboardProps } from '@/interfaces'
import { Keycap, type KeycapRef } from './keycap'
import { KEYBOARD_HEIGHT, KEYBOARD_WIDTH } from '@/constants'
import { forwardRef, type Ref, useImperativeHandle, useRef, useState } from 'react'

type KeyboardLayoutProps = {
  color?: string
  frameColor: string
  fontColor: string
  image?: string
  keyboardType: 'tkl' | 'full'
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
  return row.map((key) => {
    const keyWidth = key.width || 40
    const pos = { x: xOffset, y: (rowIndex + 1) * 40 }
    xOffset += keyWidth + 4
    return { key, ...pos }
  })
})

const KEYBOARD_SIDE_LAYOUT_WITH_POSITION = KEYBOARD_SIDE_LAYOUT.map((row, rowIndex) => {
  let xOffset = 0
  return row.map((key) => {
    const keyWidth = key.width || 40
    const pos = { x: xOffset, y: (rowIndex + 1) * 40 }
    xOffset += keyWidth + 4
    return { key, ...pos }
  })
})

export interface KeyboardLayoutRef {
  setKeyboardType: (keyboardType: 'full' | 'tkl') => void
  setFrameColor: (color: string) => void
  setKeycapColor: (color: string) => void
  setFontColor: (color: string) => void
  setKeycapImage: (image: string) => void
}

export const KeyboardLayout = forwardRef<
KeyboardLayoutRef,
KeyboardLayoutProps
>(({
  type,
  keyboardType,
}, ref) => {
    const keyboardTypeRef = useRef<HTMLDivElement>(null)
    const frameColorRef = useRef<HTMLDivElement>(null)
    const keycapRefs = useRef<(KeycapRef | null)[]>([])

    useImperativeHandle(ref, () => {
      return {
        setKeyboardType: (keyboardType: 'full' | 'tkl') => {
          if (keyboardTypeRef.current) {
            keyboardTypeRef.current.style.display = keyboardType === 'tkl' ? 'none' : 'grid'
          }
        },
        setFrameColor: color => {
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
        setKeycapImage: image => {
          for (const ref of keycapRefs.current) {
            if (ref) {
              ref.setKeycapImage(image)
            }
          }
        },
      }
    })

    return (
      <div className="flex flex-col py-6">
        {/* Keyboard Frame Container */}
        <div
          className="flex gap-3 p-2 bg-gray-800 border-gray-700 rounded-2xl shadow-xl"
          ref={frameColorRef}
        >
          <div className="space-y-1 w-[666px]">
            {/* Function Key Row */}
            <div className="justify-between flex gap-[17px] h-[40px] ">
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
            {KEYBORD_LAYOUT_WITH_POSITION.map((row, idx) => {
              return (
                <div className="w-full h-[40px] justify-between flex gap-1" key={idx}>
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
          {/* SPECIAL KEYS SIDE LAYOUT */}
          <div className="space-y-1 w-[128px]">
            {KEYBOARD_SIDE_LAYOUT_WITH_POSITION.map((row, innerIndex) => {
              return (
                <div className="w-full h-[40px] flex justify-center gap-1" key={innerIndex}>
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
              )
            })}


          </div>
          <div className="grid grid-cols-4 gap-1 w-[172px] grid-rows-[40px]" ref={keyboardTypeRef}>
            <div className="col-span-4">
            </div>
            {KEYBOARD_NUMBER_SIDE_LAYOUT.map((key, indx) => {
              return (
                <Keycap
                  key={indx}
                  ref={el => {
                    keycapRefs.current.push(el)
                  }}
                  className={key.className}
                  xPosition={0}
                  yPosition={(indx + 1) * 40}
                  keyboardWidth={KEYBOARD_WIDTH}
                  keyboardHeight={KEYBOARD_HEIGHT}
                  type={type}
                  shiftKey={key.shiftKey}
                  keyChar={key.key}
                  keyWidth={key.width}
                />
              )
            })}

          </div>
        </div>
      </div>
    )
  })
