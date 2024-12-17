import { ReactNode, useEffect, useState } from 'react'
import { SvgProps } from '@/shared/types/common'
import { Button } from '@/shared/ui/button'
import { BasicFileIcon } from '@/shared/ui/icons/basic-file-icon'
import { cn } from '@/shared/lib/utils/tw'
import { LAYERS } from '@/shared/config/layers'
import { StyleUtils } from '@/shared/lib/utils/styles'

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
}

export const Okno = ({
  name = 'Unknown',
  icon = BasicFileIcon,
  children,
  isOpen = false,
  onClose,
  onClick,
  order = 0,

  width = '70%',
  height = '70%',
}: Props) => {
  const Icon = icon
  const [isAnimated, setAnimated] = useState<'open' | 'closed' | null>(null)
  console.log('isAnimated:', isAnimated)

  const handleClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation()
    setAnimated('closed')
    if (onClose) onClose()
  }

  useEffect(() => {
    if (isOpen) setAnimated('open')
  }, [isOpen])

  return (
    <div
      className={cn(
        'shadow-lg border border-slate-700 invisible',
        isAnimated === 'open' && 'animate-[okno-open_1s_forwards]',
        isAnimated === 'closed' && 'animate-[okno-close_1s_forwards]'
      )}
      style={{
        ...(isOpen ? StyleUtils.zIndex({ layerName: LAYERS.apps, order }) : {}),
        ...StyleUtils.centerAbsolute({ width, height }),
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
      <div className="bg-white">{children}</div>
    </div>
  )
}
