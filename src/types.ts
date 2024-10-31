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
    theme: 'light' | 'dark';
    contrast: boolean;
    // brightness: number;
    // fontSize: number;
  };
  setSettings: (newSettings: Partial<UIStore['settings']>) => void;
  getTheme: () => string;
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
