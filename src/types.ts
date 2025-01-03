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

export interface MedicineInfo {
  content: string;
  additional_info: string;
  frequency: string[];
  start_date: string;
  day: string;
  reminder_id?: number;
}

export interface HospitalInfo {
  content: string;
  additional_info: string;
  start_date_time: string;
  reminder_id?: number;
}

type Mode = 'normal' | 'simple'

export interface ModeStore {
  mode: Mode;
  toggleMode: () => void;
  setMode: (mode: Mode) => void;
}