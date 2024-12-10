import { getZIndexByLayer, ZIndexFuncParams } from '@/shared/config/layers'
import { CSSProperties } from 'react'

interface CenterAbsoluteAttrs {
  width: string
  height: string
}

export class StyleUtils {
  static centerAbsolute({ width, height }: CenterAbsoluteAttrs): CSSProperties {
    const validUnitRegex = /^\d+(\.\d+)?(px|%|em|rem|vw|vh|vmin|vmax|ch|ex|cm|mm|in|pt|pc)$/

    if (!validUnitRegex.test(width)) {
      throw new Error(
        `[StyleUtils/centerAbsolute]: Invalid width value: "${width}". Must be a valid CSS unit.`
      )
    }
    if (!validUnitRegex.test(height)) {
      throw new Error(
        `[StyleUtils/centerAbsolute]: Invalid height value: "${height}". Must be a valid CSS unit.`
      )
    }

    return {
      width,
      height,
      position: 'absolute',
      top: `calc(50% - (${width} / 2))`,
      left: `calc(50% - (${height} / 2))`,
    }
  }

  static zIndex(attrs: ZIndexFuncParams): CSSProperties {
    return {
      zIndex: getZIndexByLayer(attrs),
    }
  }
}
