'use client'

import { CustomizeValue } from '@/interfaces'

export const useLocalStorage = () => {
  const loadColorFromStorage = (): CustomizeValue => {
    if (typeof window === 'undefined') {
      return {
        frame: '#000000',
        font: '#000000',
        keycap: '#ffffff',
        image: null,
      }
    }

    return {
      frame: window.localStorage.getItem('frame') || '#000000',
      font: window.localStorage.getItem('font') || '#000000',
      keycap: window.localStorage.getItem('keycap') || '#ffffff',
      image: window.localStorage.getItem('image')
    }
  }

  const setColorIntoStorage = (key: 'frame' | 'font' | 'keycap' | 'image', value: string | null) => {
    if (typeof window === 'undefined' || value === null) return

    if (value === null) {
      return
    }
    window.localStorage.setItem(key, value)
  }


  return {
    loadColorFromStorage,
    setColorIntoStorage,
  }
}
