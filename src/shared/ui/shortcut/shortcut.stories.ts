import { Shortcut } from ".";
import { BasicFileIcon } from "../icons/basic-file-icon";

export default {
  title: "Shortcut",
  component: Shortcut
}

export const Default = {
  args: {
    name: 'file.exe',
    icon: BasicFileIcon
  }
}