import { KEYBOARD_LAYOUT } from '@/interfaces';
import { Keycap } from './keycap';
import { clipImage } from '@/utils';
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
  return (
    <div className="flex flex-col gap-1 w-[650px]">
      {KEYBOARD_LAYOUT.map((row, rowIndex) => {
        let xOffset = 0; // tracks horizontal offset

        return (
          <div
            key={rowIndex}
            className={`w-full justify-between flex ${rowIndex === 0 ? ' mb-1' : ''}`}
          >
            {row.map((key, idx) => {
              const keyWidth = key.width || 40; // each key's pixel width
              const xPos = xOffset;
              const yPos = rowIndex * 40; // assuming each row is 40px tall

              xOffset += (keyWidth);

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
