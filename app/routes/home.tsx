import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { useKeyboardStyleApplier } from "@/hooks";
import { ColorPicker, KeyboardLayout, type KeyboardLayoutRef } from "@/components";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { KEYBOARD_NUMBER_SIDE_LAYOUT } from "@/interfaces";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [type, setType] = useState<'color' | 'image'>('color')
  const [keyboardType, setKeyboardType] = useState<'tkl' | 'full'>('tkl')
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

  const keyboardLayoutRef = useRef<KeyboardLayoutRef | null>(null)
  return (
    <div className="w-full mx-auto flex justify-between mt-28">
      <ColorPicker
        keyboardLayoutRef={keyboardLayoutRef}
      />
      <KeyboardLayout
        ref={keyboardLayoutRef}
        keyboardType={keyboardType}
        frameColor={frameColor}
        image={image}
        color={color}
        fontColor={fontColor}
        type={type}
      />
    </div>
  )
}
