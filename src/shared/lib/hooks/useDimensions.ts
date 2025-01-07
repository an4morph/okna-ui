import { useState, useEffect, useCallback, RefObject } from 'react'

export interface Dimensions {
  width: number
  height: number
  top: number
  left: number
  bottom: number
  right: number
  center: {
    x: number
    y: number
  }
}

export const useDimensions = (ref: RefObject<HTMLElement>): Dimensions | null => {
  const [dimensions, setDimensions] = useState<Dimensions | null>(null)

  const updateDimensions = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setDimensions({
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
        bottom: rect.bottom,
        right: rect.right,
        center: {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        },
      })
    }
  }, [ref])

  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [updateDimensions])

  return dimensions
}
