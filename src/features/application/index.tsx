import { ReactNode, useRef } from 'react'
import { Shortcut } from '@/shared/ui/shortcut'
import { Okno } from '@/shared/ui/okno'
import { SvgProps } from '@/shared/types/common'
import { BasicFileIcon } from '@/shared/ui/icons/basic-file-icon'
import { useApplicationsLayerContext } from '@/features/applications'
import { useDimensions } from '@/shared/lib/hooks/useDimensions'

interface Props {
  children: ReactNode
  name?: string
  id: string
  icon?: (props: SvgProps) => JSX.Element
  width?: string
  height?: string
}

export const Applicatiton = ({
  children,
  id,
  name = 'Untitled',
  icon = BasicFileIcon,
  width,
  height,
}: Props) => {
  const { appList, open, close, makeActive, activeId } = useApplicationsLayerContext()
  const isActive = activeId === id

  const shortcutRef = useRef(null)
  const dimensions = useDimensions(shortcutRef)

  return (
    <>
      <Shortcut onDblClick={() => open(id)} name={name} icon={icon} ref={shortcutRef} />
      <div className="bg-slate-200 size-[200px]">
        <pre>{JSON.stringify(dimensions, null, 2)}</pre>
      </div>

      <Okno
        shortcutDimensions={dimensions}
        order={appList.findIndex((i) => i === id)}
        isOpen={appList.findIndex((i) => i === id) !== -1}
        onClose={() => {
          close(id)
        }}
        name={name}
        icon={icon}
        onClick={() => !isActive && makeActive(id)}
        width={width}
        height={height}
      >
        {children}
      </Okno>
    </>
  )
}
