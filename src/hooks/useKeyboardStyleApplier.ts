import { useEffect, useState } from "react"

export const useKeyboardStyleApplier = () => {
  const [color, setColor] = useState('#ffffff');
  const [image, setImage] = useState<string | undefined>(undefined);

  return {
    color,
    setColor,
    image,
    setImage,
  }
}
