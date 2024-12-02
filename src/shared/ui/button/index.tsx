import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  size?: 'lg' | 'md'
}

export const Button = ({ children, size = 'md' }: Props) => {
  return (
    <button
      className={`active:scale-[0.98] hover:bg-sky-200 border border-slate-500 px-4 bg-slate-200 ${size === 'lg' ? 'text-3xl' : 'text-lg'}`}
    >
      <span>{children}</span>
    </button>
  )
}
