'use client'
import { Customizer, KeyboardLayout, ColorPicker  } from '@/components';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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
    fontColor,
    setFontColor,
  } = useKeyboardStyleApplier(setType)
  return (
    <>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Custmoize Section</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>

      <div>
       <ColorPicker />
       </div>
      <div className="w-11/12 mx-auto flex justify-between mt-5">
        <Customizer
          color={color}
          colorChange={setColor}
          frameColor={frameColor}
          frameColorChange={setFrameColor}
          fontColor={fontColor}
          fontColorChange={setFontColor}
          imageChange={setImage}
        />
        <KeyboardLayout
          frameColor={frameColor}
          image={image}
          color={color}
          fontColor={fontColor}
          type={type}
        />
      </div>
    </>
  );
}
