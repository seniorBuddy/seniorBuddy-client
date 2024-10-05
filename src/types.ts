import { IconType } from "react-icons";

export interface mainMenuItem {
    href: string
    bgColor: string
    iconColor: string
    Icon: IconType
    text: string
    content: string
}
  

export interface settingItem {
  listName: string
  href: string
  Icon: IconType
}