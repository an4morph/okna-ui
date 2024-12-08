import { ReactNode } from 'react'
import { ApplicationsLayerContext } from '../model/context'
import { useList } from '@/shared/lib/hooks/useList'

interface Props {
  children: ReactNode
}

export const ApplicationLayerProvider = ({ children }: Props) => {
  const [list, { push, removeAt, move }] = useList<string>([])

  return (
    <ApplicationsLayerContext.Provider
      value={{
        appList: list,
        open: (id: string) => {
          push(id)
        },
        close: (id: string) => {
          removeAt(list.findIndex((item) => item === id))
        },
        makeActive: (id: string) => {
          move(
            list.findIndex((item) => item === id),
            list.length - 1
          )
        },
      }}
    >
      {children}
    </ApplicationsLayerContext.Provider>
  )
}
