import { type RefObject, useEffect, useRef, useState } from 'react'
import { Copy, Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import type { CustomizeType, CustomizeValue } from '@/interfaces'
import { useColorPicker, useLocalStorage } from '@/hooks'
import type { KeyboardLayoutRef } from './keyboard'

const presetColors = [
  '#FF6B6B',
  '#4ECDC4',
  '#45B7D1',
  '#96CEB4',
  '#FFEAA7',
  '#DDA0DD',
  '#98D8C8',
  '#F7DC6F',
  '#BB8FCE',
  '#85C1E9',
  '#F8C471',
  '#82E0AA',
  '#F1948A',
  '#85C1E9',
  '#D7BDE2',
]

const CUSTOMIZE_TYPES: { id: CustomizeType; text: string }[] = [
  {
    id: 'keycap',
    text: 'Keycap',
  },
  {
    id: 'font',
    text: 'Font',
  },
  {
    id: 'frame',
    text: 'Frame',
  },
]

// TODO: Return all styles to be applied to keyboard, do not update all the time since it's causing rendering issue. only update when Apply button is clicked
//

export const ColorPicker = ({
  keyboardLayoutRef,
}: {
  keyboardLayoutRef: RefObject<KeyboardLayoutRef | null>
}) => {
  const { loadValueFromStorage, setValueIntoStorage, removeValueFromStorage } = useLocalStorage()
  const customizeValue = loadValueFromStorage()
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const [customizeType, setCustomizeType] = useState<CustomizeType>('keycap')
  // TODO: Probably remove this
  const [selectedColor, setSelectedColor] = useColorPicker(
    customizeType,
    customizeValue,
  )
  useEffect(() => {
    if (!keyboardLayoutRef.current) {
      return
    }
    if (customizeValue.image) {
      keyboardLayoutRef.current.setKeycapImage(customizeValue.image)
    } else {
      keyboardLayoutRef.current.setKeycapColor(customizeValue.keycap)
    }
    keyboardLayoutRef.current.setFontColor(customizeValue.font)
    keyboardLayoutRef.current.setFrameColor(customizeValue.frame)
  }, [])

  const [copied, setCopied] = useState(false)

  const handleColorChange = (color: string) => {
    setSelectedColor(color)
    if (keyboardLayoutRef.current) {
      if (customizeType === 'frame') {
        keyboardLayoutRef.current.setFrameColor(color)
      } else if (customizeType === 'font') {
        keyboardLayoutRef.current.setFontColor(color)
      } else {
        keyboardLayoutRef.current.setKeycapColor(color)
        removeValueFromStorage('image')
        
      }
    }
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current)
    }

    debounceTimeoutRef.current = setTimeout(() => {
      setValueIntoStorage(customizeType, color)
    }, 300)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64Image = reader.result as string
        setValueIntoStorage('image', base64Image)
        removeValueFromStorage('keycap')
        if (keyboardLayoutRef.current) {
          keyboardLayoutRef.current.setKeycapImage(base64Image)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(selectedColor)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : null
  }

  const rgb = hexToRgb(selectedColor)

  return (
    <div className="mx-10 space-y-6 w-[500px]">
      <Card>
        <CardHeader>
          <CardTitle>Color Picker</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Type */}
          <div className="space-y-2">
            <Select
              onValueChange={(val: CustomizeType) => setCustomizeType(val)}
              defaultValue={customizeType}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                {CUSTOMIZE_TYPES.map(type => (
                  <SelectItem key={type.id} value={type.id}>
                    {type.text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Color Preview */}
          <div className="space-y-2">
            <Label>Selected Color</Label>
            <div
              className="w-full h-24 rounded-lg border-2 border-gray-200 shadow-inner"
              style={{ backgroundColor: selectedColor }}
            />
          </div>

          {/* Native Color Picker */}
          <div className="space-y-2">
            <Label htmlFor="color-input">Pick a Color</Label>
            <input
              id="color-input"
              type="color"
              value={selectedColor}
              onChange={e => handleColorChange(e.target.value)}
              className="w-full h-12 rounded-md border border-gray-300 cursor-pointer"
            />
          </div>

          {/* Hex Input */}
          <div className="space-y-2">
            <Label htmlFor="hex-input">Hex Value</Label>
            <div className="flex gap-2">
              <Input
                id="hex-input"
                type="text"
                value={selectedColor}
                onChange={e => {
                  const value = e.target.value
                  if (/^#[0-9A-F]{6}$/i.test(value) || value === '#') {
                    handleColorChange(value)
                  }
                }}
                placeholder="#000000"
                className="font-mono"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={copyToClipboard}
                className="shrink-0"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* RGB Values */}
          {rgb && (
            <div className="space-y-2">
              <Label>RGB Values</Label>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="text-center p-2 bg-red-50 rounded">
                  <div className="font-semibold text-red-600">R</div>
                  <div>{rgb.r}</div>
                </div>
                <div className="text-center p-2 bg-green-50 rounded">
                  <div className="font-semibold text-green-600">G</div>
                  <div>{rgb.g}</div>
                </div>
                <div className="text-center p-2 bg-blue-50 rounded">
                  <div className="font-semibold text-blue-600">B</div>
                  <div>{rgb.b}</div>
                </div>
              </div>
            </div>
          )}

          {/* Preset Colors */}
          <div className="space-y-2">
            <Label>Preset Colors</Label>
            <div className="grid grid-cols-5 gap-2">
              {presetColors.map((color, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 rounded-md border-2 transition-all hover:scale-110 ${
                    selectedColor === color
                      ? 'border-gray-800 shadow-lg'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                  aria-label={`Select color ${color}`}
                />
              ))}
            </div>
          </div>

          {customizeType === 'keycap' ? (
            <div className="space-y-2">
              <Label htmlFor="image" className="font-medium text-gray-700">
                Image:
              </Label>
              <div>
                <input
                  type="file"
                  id="image"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-600
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
                />
              </div>
            </div>
          ) : null}
        </CardContent>
      </Card>
    </div>
  )
}
