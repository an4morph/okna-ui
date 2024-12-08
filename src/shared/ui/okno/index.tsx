import { ReactNode } from 'react'
import { SvgProps } from '@/shared/types/common'
import { Button } from '@/shared/ui/button'
import { BasicFileIcon } from '@/shared/ui/icons/basic-file-icon'
import { cn } from '@/shared/lib/utils/tw'
import { getZIndexStyle, LAYERS } from '@/shared/config/layers'

interface Props {
  name?: string
  icon?: (props: SvgProps) => JSX.Element
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  order?: number
  onClick?: () => void
}

export const Okno = ({
  name = 'Unknown',
  icon = BasicFileIcon,
  children,
  isOpen = false,
  onClose,
  onClick,
  order = 0,
}: Props) => {
  const Icon = icon
  const handleClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation()
    if (onClose) onClose()
  }

  return (
    <div
      className={cn(
        'shadow-lg border border-slate-700 absolute-center',
        isOpen ? 'block' : 'hidden'
      )}
      onClick={onClick}
      style={isOpen ? getZIndexStyle({ layerName: LAYERS.apps, order }) : {}}
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
