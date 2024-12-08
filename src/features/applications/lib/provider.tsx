import { ReactNode, useCallback } from 'react'
import { ApplicationsLayerContext } from '../model/context'
import { useList } from '@/shared/lib/hooks/useList'

interface Props {
  children: ReactNode
}

export const ApplicationLayerProvider = ({ children }: Props) => {
  const [list, { push, removeAt, move }] = useList<string>([])

  const makeActive = useCallback(
    (id: string) => {
      move(
        list.findIndex((item) => item === id),
        list.length - 1
      )
    },
    [list, move]
  )

  return (
    <ApplicationsLayerContext.Provider
      value={{
        appList: list,
        open: (id: string) => {
          const isExist = !!list.find((item) => item === id)
          if (!isExist) push(id)
          else makeActive(id)
        },
        close: (id: string) => {
          removeAt(list.findIndex((item) => item === id))
        },
        makeActive,
        activeId: list.length ? list[list.length - 1] : null,
      }}
    >
      {children}
    </ApplicationsLayerContext.Provider>
  )
}
