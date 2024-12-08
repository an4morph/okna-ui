import { ReactNode } from 'react'
import { Shortcut } from '@/shared/ui/shortcut'
import { Okno } from '@/shared/ui/okno'
import { SvgProps } from '@/shared/types/common'
import { BasicFileIcon } from '@/shared/ui/icons/basic-file-icon'
import { useApplicationsLayerContext } from '@/features/applications'

interface Props {
  children: ReactNode
  name?: string
  id: string
  icon?: (props: SvgProps) => JSX.Element
}

export const Applicatiton = ({ children, id, name = 'Untitled', icon = BasicFileIcon }: Props) => {
  const { appList, open, close } = useApplicationsLayerContext()

  return (
    <>
      <Shortcut onDblClick={() => open(id)} name={name} icon={icon} />

      <Okno
        order={appList.findIndex((i) => i === id)}
        isOpen={appList.findIndex((i) => i === id) !== -1}
        onClose={() => close(id)}
        name={name}
        icon={icon}
      >
        {children}
      </Okno>
    </>
  )
}
