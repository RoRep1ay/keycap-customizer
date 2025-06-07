import { FUNCTION_KEYS_ROW, KEYBOARD_LAYOUT } from '@/interfaces';
import { Keycap, KeycapRef } from './keycap';
import { KEYBOARD_HEIGHT, KEYBOARD_WIDTH } from '@/constants';
import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';

type KeyboardLayoutProps = {
  color?: string
  frameColor: string
  fontColor: string
  image?: string;
  type: 'color' | 'image';
  ref: Ref<HTMLDivElement>
}

const FUNCTION_KEYS_ROW_WITH_POSITION = FUNCTION_KEYS_ROW.map((row, idx) => {
  let xOffset = 0;
  return row.map((key, idx) => {
    const keyWidth = key.width || 40;
    const pos = { x: 0, y: 40 };
    xOffset += keyWidth + 4;
    return { key, ...pos };
  })
})

const KEYBORD_LAYOUT_WITH_POSITION = KEYBOARD_LAYOUT.map((row, rowIndex) => {
  let xOffset = 0;
  return row.map((key, idx) => {
    const keyWidth = key.width || 40;
    const pos = { x: xOffset, y: (rowIndex + 1) * 40 };
    xOffset += keyWidth + 4;
    return { key, ...pos };
  })
})

export interface KeyboardLayoutRef {
  setFrameColor: (color: string) => void
  setKeycapColor: (color: string) => void
  setFontColor: (color: string) => void
}

export const KeyboardLayout = forwardRef<KeyboardLayoutRef, KeyboardLayoutProps>(({
  color,
  frameColor,
  fontColor,
  image,
  type,
}, ref) => {
    console.log('hello')
    const frameColorRef = useRef<HTMLDivElement>(null);
    const shitRef = useRef<KeycapRef>(null)
    const div2Ref = useRef<HTMLDivElement>(null);
    const keycapRefs = useRef<(KeycapRef | null)[]>([])

    useImperativeHandle(ref, () => {
      return {
        setFrameColor: (color) => {
          console.log('setting frame color')
          if (frameColorRef.current) {
            frameColorRef.current.style.backgroundColor = color;
          }
        },
        setFontColor: (color) => {
          for (const ref of keycapRefs.current) {
            if (ref) {
              ref.setKeyFontColor(color);
            }
          }
        },
        setKeycapColor: (color) => {
          for (const ref of keycapRefs.current) {
            if (ref) {
              ref.setKeycapColor(color);
            }
          }
        }
      }
    })

    return (
      <div className="flex flex-col items-center justify-center">

        {/* Keyboard Frame Container */}
        <div className="flex flex-col gap-1 w-[666px] p-2 bg-gray-800 border-gray-700 rounded-2xl shadow-xl" ref={frameColorRef}>

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
                      type={type}
                      backgroundColor={color}
                      fontColor={fontColor}
                      shiftKey={keyWithPos.key.shiftKey}
                      keyChar={keyWithPos.key.key}
                      keyWidth={keyWithPos.key.width}
                      imageUrl={image || ''}
                      imageStyle={
                        type === 'image' && image
                          ? {
                            backgroundImage: `url(${image})`,
                            backgroundSize: `${KEYBOARD_WIDTH}px ${KEYBOARD_HEIGHT}px`,
                            backgroundPosition: `-${keyWithPos.x}px -${keyWithPos.y}px`,
                            backgroundRepeat: 'no-repeat',
                            backgroundClip: 'border-box',
                          }
                          : undefined
                      }
                    />

                  );
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
                      backgroundColor={color}
                      fontColor={fontColor}
                      shiftKey={keyWithPos.key.shiftKey}
                      keyChar={keyWithPos.key.key}
                      keyWidth={keyWithPos.key.width}
                      imageUrl={image || ''}
                      imageStyle={
                        type === 'image' && image
                          ? {
                            backgroundImage: `url(${image})`,
                            backgroundSize: `${KEYBOARD_WIDTH}px ${KEYBOARD_HEIGHT}px`,
                            backgroundPosition: `-${keyWithPos.x}px -${keyWithPos.y}px`,
                            backgroundRepeat: 'no-repeat',
                            backgroundClip: 'border-box',
                          }
                          : undefined
                      }
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

    );
  });
