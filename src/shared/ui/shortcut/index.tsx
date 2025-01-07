import { forwardRef } from 'react'
import { SvgProps } from '../../types/common'
import { BasicFileIcon } from '../icons/basic-file-icon'

interface Props {
  name?: string
  icon?: (props: SvgProps) => JSX.Element
  onDblClick?: () => void
}

export const Shortcut = forwardRef<HTMLDivElement, Props>(
  ({ name = 'Unknown', icon = BasicFileIcon, onDblClick }, ref) => {
    const Icon = icon
    return (
      <div className="flex flex-col gap-4 items-center w-auto" onDoubleClick={onDblClick} ref={ref}>
        <Icon />
        <div>{name}</div>
      </div>
    )
  }
)
