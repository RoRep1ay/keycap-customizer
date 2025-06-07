'use client'
import { Customizer, KeyboardLayout, ColorPicker, KeyboardLayoutRef  } from '@/components';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useKeyboardStyleApplier } from '@/hooks';
import { useRef, useState } from 'react'

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

  const keyboardLayoutRef = useRef<KeyboardLayoutRef | null>(null);
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

      <div className="w-11/12 mx-auto flex justify-between mt-5">
        <ColorPicker keyboardLayoutRef={keyboardLayoutRef} />
        <KeyboardLayout
          ref={keyboardLayoutRef}
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
