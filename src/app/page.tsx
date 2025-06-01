'use client'
import { Customizer, KeyboardLayout } from '@/components';
import { useKeyboardStyleApplier } from '@/hooks';
import { useState } from 'react'

export default function Home() {
  const [type, setType] = useState<'color' | 'image'>('color');
  const {
    color,
    setColor,
    image,
    setImage,
    frameColor,
    setFrameColor,
  } = useKeyboardStyleApplier(setType)
  return (
    <div className="w-11/12 mx-auto flex justify-between mt-5">
      <Customizer
        color={color}
        colorChange={setColor}
        frameColor={frameColor}
        frameColorChange={setFrameColor}
        imageChange={setImage}
      />
      <KeyboardLayout
        frameColor={frameColor}
        image={image}
        color={color}
        type={type}
      />
    </div>
  );
}
