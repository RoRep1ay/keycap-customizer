import type { CustomizeType, CustomizeValue } from '@/interfaces'


export const useLocalStorage = () => {
  const loadValueFromStorage = (): CustomizeValue => {
    return {
      keyboardType: (window.localStorage.getItem('keyboardType') || 'tkl') as 'tkl' | 'full',
      frame: window.localStorage.getItem('frame') || '#000000',
      font: window.localStorage.getItem('font') || '#000000',
      keycap: window.localStorage.getItem('keycap') || '#ffffff',
      image: window.localStorage.getItem('image')
    }
  }

  const setValueIntoStorage = (key: CustomizeType, value: string | null) => {
    if (value === null) {
      return
    }
    window.localStorage.setItem(key, value)
  }

  const removeValueFromStorage = (key: CustomizeType) => {
    window.localStorage.removeItem(key)
  }


  return {
    loadValueFromStorage,
    setValueIntoStorage,
    removeValueFromStorage,
  }
}
