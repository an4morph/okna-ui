import { ReactNode } from 'react'
import { SvgProps } from '../../types/common'
import { Button } from '../button'

interface Props {
  name: string
  icon: (props: SvgProps) => JSX.Element
  children: ReactNode
}

export const Okno = ({ name, icon, children }: Props) => {
  const Icon = icon
  return (
    <div className="border border-slate-700">
      <div className="bg-slate-200 border-b border-slate-700 flex p-1 items-center">
        <div className="flex gap-6 flex-1">
          <Icon />
          <div>{name}</div>
        </div>
        <Button>X</Button>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  )
}
