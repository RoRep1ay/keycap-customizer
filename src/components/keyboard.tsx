import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { FUNCTION_KEYS_ROW, KEYBOARD_LAYOUT, KeyboardProps } from '@/interfaces';
import { Keycap } from './keycap';
import { KEYBOARD_HEIGHT, KEYBOARD_WIDTH } from '@/constants';

type KeyboardLayoutProps = {
  color?: string
  frameColor: string
  fontColor: string
  image?: string;
  type: 'color' | 'image';
}

export const KeyboardLayout = ({
  color,
  frameColor,
  fontColor,
  image,
  type,
}: KeyboardLayoutProps) => {
  let xOffset = 0;
  return (

    <div className="flex flex-col items-center justify-center">
      {/* Keyboard Frame Container */}
      <div className="flex flex-col gap-1 w-[666px] p-2 bg-gray-800 border-gray-700 rounded-2xl shadow-xl" style={{backgroundColor: frameColor}}>

        {/* Function Key Row */}
        <div className="w-full justify-between flex gap-3.5">
          {FUNCTION_KEYS_ROW.map((it, id) => (
            <div className="w-full flex justify-between gap-1" key={id}>
              {it.map((key, idx) => {
                const keyWidth = key.width || 40;
                const xPos = xOffset;
                const yPos = 0;

                xOffset += keyWidth + 4;

                return (
                  <RenderKey
                    type={type}
                    keyProps={key}
                    fontColor={fontColor}
                    color={color}
                    image={image}
                    key={idx}
                    xPos={xPos}
                    yPos={yPos}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Main Keyboard Rows */}
        {KEYBOARD_LAYOUT.map((row, rowIndex) => {
          xOffset = 0;

          return (
            <div key={rowIndex} className="w-full justify-between flex gap-1">
              {row.map((key, idx) => {
                const keyWidth = key.width || 40;
                const xPos = xOffset;
                const yPos = (rowIndex + 1) * 40;

                xOffset += keyWidth + 4;

                return (
                  <RenderKey
                    type={type}
                    keyProps={key}
                    fontColor={fontColor}
                    color={color}
                    image={image}
                    key={idx}
                    xPos={xPos}
                    yPos={yPos}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>

  );
}

const RenderKey = ({
  keyProps,
  image,
  color,
  fontColor,
  type,
  xPos,
  yPos,
}: {
    keyProps: KeyboardProps;
    type: 'color' | 'image';
    color: string | undefined;
    fontColor: string;
    image: string | undefined
    xPos: number;
    yPos: number;
  }) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Keycap
        type={type}
        backgroundColor={color}
        fontColor={fontColor}
        shiftKey={keyProps.shiftKey}
        keyChar={keyProps.key}
        keyWidth={keyProps.width}
        imageUrl={image || ''}
        imageStyle={
          type === 'image' && image
            ? {
              backgroundImage: `url(${image})`,
              backgroundSize: `${KEYBOARD_WIDTH}px ${KEYBOARD_HEIGHT}px`,
              backgroundPosition: `-${xPos}px -${yPos}px`,
              backgroundRepeat: 'no-repeat',
              backgroundClip: 'border-box',
            }
            : undefined
        }
      />
      </HoverCardTrigger>
      <HoverCardContent>
        The React Framework – created and maintained by @vercel.
        <input type="color" id={`${keyProps}-color`} />
      </HoverCardContent>
    </HoverCard>
  )
}
