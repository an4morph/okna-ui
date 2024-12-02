import { createContext, useContext } from 'react'
import { ApplicationItem } from './types'

export interface ContextType {
  appList: ApplicationItem[]
  open: (item: ApplicationItem) => void
  close: (id: string) => void
  makeActive: (id: string) => void
}

export const ApplicationsLayerContext = createContext<ContextType | undefined>(undefined)

export const useApplicationsLayerContext = () => {
  const context = useContext(ApplicationsLayerContext)
  if (context === undefined) {
    throw new Error('useLayersContext must be used within an DashboardPageProvider')
  }
  return context
}
