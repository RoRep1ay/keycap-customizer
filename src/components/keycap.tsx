import { ImageClipStyle } from "@/interfaces";

type KeycapProps = {
  keyChar: string;
  shiftKey?: string;
  imageUrl: string;
  keyWidth?: number;
  backgroundColor?: string;
  className?: string;
  imageStyle?: ImageClipStyle;

  type: 'color' | 'image';
}


export const Keycap = ({
  keyChar,
  shiftKey,
  imageStyle,
  // x,
  // y,
  keyWidth,
  className,
  backgroundColor, 
  type,
}: KeycapProps) => {
      // <div
      //   key={idx}
      //   style={{ backgroundColor: color }}
      //   className={`text-xs flex flex-col items-center justify-center border border-gray-400 rounded bg-white font-mono text-black h-[40px] p-1 ${key.class ? key.class : 'w-[40px]'}`}
      // >
      //   {key.shiftKey && <div className="text-xs leading-none">{key.shiftKey}</div>}
      //   <div>{key.key}</div>
      // </div>
      // style={imageURL ? {
      //   backgroundImage: imageURL ? `url(${imageURL})` : undefined,
      //   backgroundSize: `${layoutWidth}px ${layoutHeight}px`,
      //   backgroundPosition: `-${x}px -${y}px`,
      //   backgroundRepeat: 'no-repeat',
      //   backgroundClip: 'border-box',
      // } : {}}
  // console.log('imageStyle =', imageStyle)
  return (
    <div
      style={type == 'color' ? {
        width: keyWidth || 40,
        backgroundColor,
      } : {width: keyWidth || 40, ...imageStyle}}
      className={`text-xs flex flex-col items-center justify-center border border-gray-400 rounded bg-white font-mono text-black h-[40px] p-1`}
    >
      {shiftKey && <div className="text-xs leading-none">{shiftKey}</div>}
      <div>{keyChar}</div>
    </div>
  );
}
