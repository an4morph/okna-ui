import { ReactNode, useState } from 'react'
import { Shortcut } from '@/shared/ui/shortcut'
import { Okno } from '@/shared/ui/okno'
import { SvgProps } from '@/shared/types/common'
import { BasicFileIcon } from '@/shared/ui/icons/basic-file-icon'

interface Props {
  children: ReactNode
  name?: string
  icon?: (props: SvgProps) => JSX.Element
}

export const Applicatiton = ({ children, name = 'Untitled', icon = BasicFileIcon }: Props) => {
  const [isAppOpen, setAppOpen] = useState(false)

  const handleOpenApp = () => setAppOpen(true)
  const handleCloseApp = () => setAppOpen(false)

  return (
    <>
      <Shortcut onDblClick={handleOpenApp} name={name} icon={icon} />

      <Okno isOpen={isAppOpen} onClose={handleCloseApp} name={name} icon={icon}>
        {children}
      </Okno>
    </>
  )
}
