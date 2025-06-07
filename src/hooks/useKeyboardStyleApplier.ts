import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export const useKeyboardStyleApplier = (
  setType: Dispatch<SetStateAction<'image' | 'color'>>
) => {
  const [frameColor, setFrameColor] = useState('#000000')
  const [fontColor, setFontColor] = useState('#000000')
  const [color, setColor] = useState('#ffffff')
  const [image, setImage] = useState<string | undefined>(undefined)

  // useEffect(() => {
  //   setType('image')
  // }, [image])
  //
  // useEffect(() => {
  //   setType('color')
  // }, [color])

  return {
    color,
    setColor,
    image,
    setImage,
    frameColor,
    setFrameColor,
    fontColor,
    setFontColor,
  }
}
