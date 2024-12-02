import { SvgProps } from '../../types/common'
import { BasicFileIcon } from '../icons/basic-file-icon'

interface Props {
  name?: string
  icon?: (props: SvgProps) => JSX.Element
  onDblClick?: () => void
}

export const Shortcut = ({ name = 'Unknown', icon = BasicFileIcon, onDblClick }: Props) => {
  const Icon = icon
  return (
    <div className="flex flex-col gap-4 items-center w-auto" onDoubleClick={onDblClick}>
      <Icon />
      <div>{name}</div>
    </div>
  )
}
