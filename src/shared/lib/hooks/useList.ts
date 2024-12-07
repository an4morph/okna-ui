import { useState, useCallback } from 'react'

type UseListActions<T> = {
  push: (item: T) => void
  pop: () => T | undefined
  shift: () => T | undefined
  unshift: (item: T) => void
  clear: () => void
  removeAt: (index: number) => T | undefined
  move: (fromIndex: number, toIndex: number) => void
}

export function useList<T>(initialList: T[] = []): [T[], UseListActions<T>] {
  const [list, setList] = useState<T[]>(initialList)

  const push = useCallback((item: T) => {
    setList((prevList) => [...prevList, item])
  }, [])

  const pop = useCallback(() => {
    let removedItem: T | undefined
    setList((prevList) => {
      const newList = [...prevList]
      removedItem = newList.pop()
      return newList
    })
    return removedItem
  }, [])

  const shift = useCallback(() => {
    let removedItem: T | undefined
    setList((prevList) => {
      const newList = [...prevList]
      removedItem = newList.shift()
      return newList
    })
    return removedItem
  }, [])

  const unshift = useCallback((item: T) => {
    setList((prevList) => [item, ...prevList])
  }, [])

  const clear = useCallback(() => {
    setList([])
  }, [])

  const removeAt = useCallback((index: number) => {
    let removedItem: T | undefined
    setList((prevList) => {
      if (index < 0 || index >= prevList.length) {
        console.warn(`Index ${index} is out of bounds`)
        return prevList
      }
      const newList = [...prevList]
      removedItem = newList.splice(index, 1)[0]
      return newList
    })
    return removedItem
  }, [])

  const move = useCallback((fromIndex: number, toIndex: number) => {
    setList((prevList) => {
      if (
        fromIndex < 0 ||
        fromIndex >= prevList.length ||
        toIndex < 0 ||
        toIndex >= prevList.length
      ) {
        console.warn(`[useList]: Index out of bounds: from ${fromIndex} to ${toIndex}`)
        return prevList
      }

      const newList = [...prevList]
      const [movedItem] = newList.splice(fromIndex, 1)
      newList.splice(toIndex, 0, movedItem)
      return newList
    })
  }, [])

  return [list, { push, pop, shift, unshift, clear, removeAt, move }]
}
