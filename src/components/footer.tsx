import React from 'react';
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdMedicalInformation } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { IoHomeSharp } from "react-icons/io5";
import { IoChatbubblesSharp } from "react-icons/io5";
import Link from 'next/link';

export default function Footer() {
  const icons = [
    { Icon: BiSolidFoodMenu, label: '설명서', href: "/menual" },
    { Icon: MdMedicalInformation, label: '알리미', href: "/reminder"},
    { Icon: IoHomeSharp, label: '홈', href: "/" },
    { Icon: GrContactInfo, label: '내 정보', href: "/settings" },
    { Icon: IoChatbubblesSharp, label: 'AI', href: "./ai_chat" },
  ];

  return (
    <footer className="sticky bottom-0 w-full flex items-center justify-center z-10">
      {/* Footer */}
      <div className="max-w-[650px] bg-blue w-full h-16 rounded-t-xl font-medium text-white flex justify-around items-center">
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
};
