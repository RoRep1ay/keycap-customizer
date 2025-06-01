import { FUNCTION_KEYS_ROW, KEYBOARD_LAYOUT } from '@/interfaces';
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
    <div className="flex flex-col gap-1 w-[650px]">
      <div
        className="w-full justify-between flex gap-3.5"
      >
        {
          FUNCTION_KEYS_ROW.map((it, id) => {
            return <div className='flex gap-1' key={id}>{it.map((key, idx) => {
              const keyWidth = key.width || 40;
              const xPos = xOffset;
              const yPos = 0; // + 1 since excluding fn row

              xOffset += (keyWidth + 4);
              return (
                <Keycap
                  key={idx}
                  type={type}
                  backgroundColor={color}
                  shiftKey={key.shiftKey}
                  keyChar={key.key}
                  keyWidth={key.width}
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
              );
            })}</div>
          })
        }
      </div>
      {KEYBOARD_LAYOUT.map((row, rowIndex) => {
        xOffset = 0; // tracks horizontal offset

        return (
          <div
            key={rowIndex}
            className="w-full justify-between flex gap-1"
          >
            {row.map((key, idx) => {
              const keyWidth = key.width || 40; // each key's pixel width
              const xPos = xOffset;
              const yPos = (rowIndex + 1) * 40; // + 1 since excluding fn row

              xOffset += (keyWidth + 4);

              return (
                <Keycap
                  key={idx}
                  type={type}
                  backgroundColor={color}
                  shiftKey={key.shiftKey}
                  keyChar={key.key}
                  keyWidth={key.width}
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
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
