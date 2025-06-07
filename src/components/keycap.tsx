import { ImageClipStyle } from "@/interfaces";
import { forwardRef, useImperativeHandle, useRef } from "react";

type KeycapProps = {
  keyChar: string;
  shiftKey?: string;
  imageUrl: string;
  keyWidth?: number;
  fontColor: string;
  backgroundColor?: string;
  className?: string;
  imageStyle?: ImageClipStyle;

  type: 'color' | 'image';
}

export type KeycapRef = {
  setKeycapColor: (color: string) => void
  setKeyFontColor: (color: string) => void
}

export const Keycap = forwardRef<KeycapRef, KeycapProps>(({
  keyChar,
  shiftKey,
  imageStyle,
  keyWidth,
  backgroundColor, 
  fontColor,
  type,
}, ref) => {
    const divRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => {
      return {
        setKeycapColor: (color) => {
          if (divRef.current) {
            console.log('helllo color???')
            divRef.current.style.backgroundColor = color;
          }
        },
        setKeyFontColor: (color) => {
          if (divRef.current) {
            console.log('helllo font???')
            divRef.current.style.color = color;
          }
        },
      }
    })
  return (
    <div
        ref={divRef}
      style={type == 'color' ? {
        width: keyWidth || 40,
        color: fontColor,
        backgroundColor,
      } : {width: keyWidth || 40, color: fontColor, ...imageStyle}}
      className={`text-xs flex flex-col items-center justify-center border border-gray-400 rounded bg-white font-mono text-black h-[40px] p-1`}
    >
      {shiftKey && <div className="text-xs leading-none">{shiftKey}</div>}
      <div>{keyChar}</div>
    </div>
  );
})
