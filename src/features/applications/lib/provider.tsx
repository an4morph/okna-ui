import { ReactNode } from 'react'
import { ApplicationsLayerContext } from '../model/context'
import { useList } from '@/shared/lib/hooks/useList'
import { ApplicationItem } from '../model/types'

interface Props {
  children: ReactNode
}

export const ApplicationLayerProvider = ({ children }: Props) => {
  const [list, { push, removeAt, move }] = useList<ApplicationItem>([])

  const getIndexById = (id: string) => list.findIndex((item) => item.id === id)

  return (
    <ApplicationsLayerContext.Provider
      value={{
        appList: list,
        open: (item: ApplicationItem) => push(item),
        close: (id: string) => removeAt(getIndexById(id)),
        makeActive: (id: string) => move(getIndexById(id), list.length - 1),
      }}
    >
      {children}
    </ApplicationsLayerContext.Provider>
  )
}
