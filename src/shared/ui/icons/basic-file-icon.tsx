import { SvgProps } from '../../types/common'

export const BasicFileIcon = (props: SvgProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 1H15.414L21 6.586V23H3V1ZM18.586 7L15 3.414V7H18.586ZM13 3H5V21H19V9H13V3ZM7 12H17V14H7V12ZM7 16H17V18H7V16Z"
        fill="currentColor"
      />
    </svg>
  )
}
