import type { CustomizeValue } from '@/interfaces'

export const useLocalStorage = () => {
  const loadValueFromStorage = (): CustomizeValue => {
    return {
      frame: window.localStorage.getItem('frame') || '#000000',
      font: window.localStorage.getItem('font') || '#000000',
      keycap: window.localStorage.getItem('keycap') || '#ffffff',
      image: window.localStorage.getItem('image')
    }
  }

  const setValueIntoStorage = (key: 'frame' | 'font' | 'keycap' | 'image', value: string | null) => {
    if (value === null) {
      return
    }
    window.localStorage.setItem(key, value)
  }

  const removeValueFromStorage = (key: 'frame' | 'font' | 'keycap' | 'image') => {
    window.localStorage.removeItem(key)
  }


  return {
    loadValueFromStorage,
    setValueIntoStorage,
    removeValueFromStorage,
  }
}
