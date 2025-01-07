import { ReactNode, useRef } from 'react'
import { SvgProps } from '@/shared/types/common'
import { Button } from '@/shared/ui/button'
import { BasicFileIcon } from '@/shared/ui/icons/basic-file-icon'
import { cn } from '@/shared/lib/utils/tw'
import { getZIndexByLayer, LAYERS } from '@/shared/config/layers'
import { StyleUtils } from '@/shared/lib/utils/styles'
import { motion, AnimatePresence } from 'motion/react'
import { type Dimensions } from '@/shared/lib/hooks/useDimensions'

interface Props {
  name?: string
  icon?: (props: SvgProps) => JSX.Element
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  order?: number
  onClick?: () => void
  width?: string
  height?: string
  shortcutDimensions: Dimensions | null
}

export const Okno = ({
  name = 'Unknown',
  icon = BasicFileIcon,
  children,
  isOpen = false,
  onClose,
  onClick,
  order = 0,
  shortcutDimensions,

  width = '65%',
  height = '65%',
}: Props) => {
  const Icon = icon
  //const initalOrder = useRef(order)

  const handleClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation()
    if (onClose) onClose()
  }

  if (order >= 0)
    console.log('aaa', order, getZIndexByLayer({ layerName: LAYERS.apps, order }) % 100)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal"
          initial={{
            scale: 0,
            originX: 0,
            originY: 0,
            left: shortcutDimensions?.center.x || 0,
            top: shortcutDimensions?.center.y || 0,
          }}
          transition={{ duration: 0.4, origin: 'center' }}
          animate={{
            scale: 1,
            left: `calc(50% - (${height} / 2))`,
            top: `calc(50% - (${width} / 2))`,
          }}
          exit={{
            scale: 0,
            originX: 0,
            originY: 0,
            left: shortcutDimensions?.center.x || 0,
            top: shortcutDimensions?.center.y || 0,
          }}
          className={cn('shadow-lg border border-slate-700 flex flex-col absolute')}
          style={{
            width,
            height,
            ...(isOpen ? StyleUtils.zIndex({ layerName: LAYERS.apps, order }) : {}),
          }}
          onClick={onClick}
        >
          <div className="bg-slate-200 border-b border-slate-700 flex p-1 items-center">
            <div className="flex gap-6 flex-1">
              <Icon />
              <div>{name}</div>
            </div>
            <Button onClick={handleClose}>X</Button>
          </div>
          <div className="bg-pink-100 flex-1">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
