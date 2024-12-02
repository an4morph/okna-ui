import { Okno } from '.'
import { BasicFileIcon } from '../icons/basic-file-icon'

export default {
  title: 'Okno',
  component: Okno,
}

export const Default = {
  args: {
    name: 'file.exe',
    icon: BasicFileIcon,
    children: (
      <div className="flex flex-col justify-center items-center">
        <h1>Hello</h1>
        <h3>world</h3>
      </div>
    ),
  },
}
