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


export interface UIStore {
  settings: {
    contrast: boolean;
    brightness: number;
    fontSize: number;
  };
  setSettings: (newSettings: Partial<UIStore['settings']>) => void;
}

export interface User {
    name: string;
    phone_number: string | null;
    email: string | null;
    type: string;
}

export interface UserStore {
    setUser: (user: Partial<User>) => void;
    fetchUser: (token: string) => Promise<void>;
}

type Mode = 'normal' | 'simple'

export interface ModeStore {
  mode: Mode;
  toggleMode: () => void;
  setMode: (mode: Mode) => void;
}