import { KEYBOARD_WIDTH, KEYBOARD_HEIGHT } from '@/constants'
import { ImageClipStyle } from '@/interfaces'

type UseImageClipProps = {
  imageUrl: string
  keycapWidth: string
  xPos: string
  yPos: string
}

export const clipImage = ({
  imageUrl,
  keycapWidth,
  xPos,
  yPos,
}: UseImageClipProps): ImageClipStyle => {
  return {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: `${KEYBOARD_WIDTH}px ${KEYBOARD_HEIGHT}px`,
    backgroundPosition: `-${xPos}px -${yPos}px`,
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'border-box',
  }
}
