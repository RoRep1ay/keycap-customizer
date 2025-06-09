import { forwardRef, useImperativeHandle, useRef } from 'react'

type KeycapProps = {
  keyChar: string
  shiftKey?: string
  keyWidth?: number

  xPosition: number
  yPosition: number
  keyboardWidth: number
  keyboardHeight: number

  type: 'color' | 'image'
}

export type KeycapRef = {
  setKeycapColor: (color: string) => void
  setKeyFontColor: (color: string) => void
  setKeycapImage: (image: string) => void
}

// Refactor here to only accept key width and position
export const Keycap = forwardRef<KeycapRef, KeycapProps>(
  (
    {
      keyChar,
      shiftKey,
      keyWidth,
      keyboardWidth,
      keyboardHeight,
      xPosition,
      yPosition,
      type,
    },
    ref
  ) => {
    const divRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => {
      return {
        setKeycapColor: color => {
          if (divRef.current) {
            divRef.current.style.backgroundColor = color

            divRef.current.style.backgroundImage = ``
            divRef.current.style.backgroundSize = ``
            divRef.current.style.backgroundPosition = ``
            divRef.current.style.backgroundRepeat = ``
            divRef.current.style.backgroundClip = ``
          }
        },
        setKeyFontColor: color => {
          if (divRef.current) {
            divRef.current.style.color = color
          }
        },
        setKeycapImage: image => {
          if (divRef.current) {
            divRef.current.style.backgroundColor = ''
            // TODO: Update
            divRef.current.style.backgroundImage = `url(${image})`
            divRef.current.style.backgroundSize = `${keyboardWidth}px ${keyboardHeight}px`
            divRef.current.style.backgroundPosition = `-${xPosition}px -${yPosition}px`
            divRef.current.style.backgroundRepeat = `no-repeat`
            divRef.current.style.backgroundClip = `border-box`
          }
        },
      }
    })
    return (
      <div
        ref={divRef}
        style={{ width: keyWidth || 40 }}
        className={`text-xs flex flex-col items-center justify-center border border-gray-400 rounded bg-white font-mono text-black h-[40px] p-1`}
      >
        {shiftKey && <div className="text-xs leading-none">{shiftKey}</div>}
        <div>{keyChar}</div>
      </div>
    )
  }
)
