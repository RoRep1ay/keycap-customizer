import { ImageClipStyle } from "@/interfaces";

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

export const Keycap = ({
  keyChar,
  shiftKey,
  imageStyle,
  keyWidth,
  backgroundColor, 
  fontColor,
  type,
}: KeycapProps) => {
  return (
    <div
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
}
