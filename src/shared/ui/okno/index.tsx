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
  shortcutDimensions: Dimensions
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

  width = '65vw',
  height = '65vh',
}: Props) => {
  const Icon = icon
  //const initalOrder = useRef(order)

  const handleClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation()
    if (onClose) onClose()
  }

  console.log()

  return (
    <>
      <div
        className="bg-red-500 absolute rounded-full size-[20px] z-[1000]"
        style={{
          left: window.innerWidth / 2 - 10,
          top: window.innerHeight / 2 - 10,
        }}
      ></div>
      <AnimatePresence>
        {isOpen && (
          <>
            <div className="relative">
              <motion.div
                key="modal"
                initial={{ offsetDistance: '0%', scale: 0 }}
                exit={{ offsetDistance: '0%', scale: 0 }}
                animate={{ offsetDistance: '100%', scale: 1 }}
                transition={{ duration: 4, yoyo: Infinity, ease: 'easeInOut' }}
                className={cn(
                  'shadow-lg border border-slate-700 flex flex-col absolute top-0 left-0'
                )}
                style={{
                  offsetPath: `path("M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5")`,
                  offsetRotate: '0deg',
                  width: 300,
                  height: 200,
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
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
