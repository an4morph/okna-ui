import { SvgProps } from '../../types/common'

interface Props {
  name: string
  icon: (props: SvgProps) => JSX.Element
}

export const Shortcut = ({ name, icon }: Props) => {
  const Icon = icon
  return (
    <div className="flex flex-col gap-4 items-center w-auto">
      <Icon />
      <div>{name}</div>
    </div>
  )
}
