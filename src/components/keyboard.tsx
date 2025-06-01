import { FUNCTION_KEYS_ROW, KEYBOARD_LAYOUT, KeyboardProps } from '@/interfaces';
import { Keycap } from './keycap';
import { KEYBOARD_HEIGHT, KEYBOARD_WIDTH } from '@/constants';


type KeyboardLayoutProps = {
  color?: string
  image?: string;
  type: 'color' | 'image';
}

export const KeyboardLayout = ({
  color,
  image,
  type,
}: KeyboardLayoutProps) => {
  let xOffset = 0;
  return (
    
    <div className="flex flex-col items-center justify-center">
      {/* Keyboard Frame Container */}
      <div className="flex flex-col gap-1 w-[666px] p-2 bg-gray-800 border-gray-700 rounded-2xl shadow-xl">

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
  type,
  xPos,
  yPos,
}: {
  keyProps: KeyboardProps;
  type: 'color' | 'image';
  color: string | undefined;
  image: string | undefined
  xPos: number;
  yPos: number;
}) => {
  return (
    <Keycap
      type={type}
      backgroundColor={color}
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
  )
}
