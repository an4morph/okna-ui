import { createContext } from 'react'

export interface ContextType {
  appList: string[]
  open: (id: string) => void
  close: (id: string) => void
  makeActive: (id: string) => void
  activeId: string | null
}

export const ApplicationsLayerContext = createContext<ContextType | undefined>(undefined)
