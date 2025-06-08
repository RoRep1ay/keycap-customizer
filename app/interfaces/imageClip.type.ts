import { CSSProperties } from 'react'

export type ImageClipStyle = Pick<
  CSSProperties,
  | 'backgroundImage'
  | 'backgroundSize'
  | 'backgroundPosition'
  | 'backgroundRepeat'
  | 'backgroundClip'
>
