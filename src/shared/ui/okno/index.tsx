import { ReactNode } from 'react'
import { SvgProps } from '../../types/common'
import { Button } from '../button'
import { BasicFileIcon } from '../icons/basic-file-icon'
import { cn } from '../../lib/utils/tw'

interface Props {
  name?: string
  icon?: (props: SvgProps) => JSX.Element
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Okno = ({
  name = 'Unknown',
  icon = BasicFileIcon,
  children,
  isOpen = false,
  onClose,
}: Props) => {
  const Icon = icon
  const handleClose = () => {
    if (onClose) onClose()
  }

  return (
    <div
      className={cn(
        'shadow-lg border border-slate-700 absolute-center',
        isOpen ? 'block' : 'hidden'
      )}
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
