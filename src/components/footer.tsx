'use client'

import React, { useEffect } from 'react';
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdMedicalInformation } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { IoHomeSharp } from "react-icons/io5";
import { IoChatbubblesSharp } from "react-icons/io5";
import Link from 'next/link';
import useModeStore from '@/app/lib/store/useModeStore';

export default function Footer() {
  const { mode } = useModeStore()


  const icons = [
    { Icon: BiSolidFoodMenu, label: '설명서', href: "/manual" },
    { Icon: MdMedicalInformation, label: '알리미', href: "/reminder"},
    { Icon: IoHomeSharp, label: '홈', href: "/" },
    { Icon: GrContactInfo, label: '내 정보', href: "/settings" },
    { Icon: IoChatbubblesSharp, label: 'AI', href: "/ai_chat" },
  ];

  if(mode === 'simple') {
    return null;
  } else {
    return (
      <footer className="fixed bottom-0 w-full flex items-center justify-center z-10">
        {/* Footer */}
        <div className="max-w-[650px] bg-blue  w-full h-16 rounded-t-xl font-medium text-white dark:text-slate-800 flex justify-around items-center">
          {icons.map(({ Icon, label, href}, index) => (
            <Link href={href} key={index} className="flex cursor-pointer hover:scale-110
            transition-transform duration-200 hover:text-darkblue flex-col items-center">
              <Icon className="w-7 h-7" />
              <span className="text-xs">{label}</span>
            </Link>
          ))}
        </div>
      </footer>
    );
  }
};
