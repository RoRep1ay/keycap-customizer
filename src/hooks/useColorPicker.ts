import { CustomizeType, CustomizeValue } from "@/interfaces";
import { useState } from "react";

export const useColorPicker = (customizeType: CustomizeType, customizer: CustomizeValue) => {
  const frameState = useState(customizer.frame)
  const fontState = useState(customizer.font)
  const keycapState = useState(customizer.keycap)

  if (customizeType === 'font') {
    return fontState
  } else if (customizeType === 'frame') {
    return frameState
  }
  return keycapState
}
