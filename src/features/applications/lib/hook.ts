import { useContext } from 'react'
import { ApplicationsLayerContext } from '../model/context'

export const useApplicationsLayerContext = () => {
  const context = useContext(ApplicationsLayerContext)
  if (context === undefined) {
    throw new Error('useLayersContext must be used within an DashboardPageProvider')
  }
  return context
}
