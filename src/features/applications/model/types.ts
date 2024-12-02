import { LAYERS } from "../../../shared/config/layers"

export interface ApplicationItem {
  id: string
  order: number
  layer: LAYERS
}