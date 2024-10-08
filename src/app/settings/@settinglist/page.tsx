import { BsPersonCircle } from "react-icons/bs";
import { settingItem } from '@/types'
import { MdOutlineSettings } from "react-icons/md";
import { TbHelp } from "react-icons/tb";
import Link from "next/link";

export default function Page() {
    const settingList: settingItem[]  = [
        { listName: '계정 관리', href: "/settings",  Icon: BsPersonCircle },
        { listName: '화면 설정', href: "/settings/ui", Icon: MdOutlineSettings },
        { listName: '도움말', href: "/settings/help", Icon: TbHelp }
    ];

    return (
        <div className="w-full flex flex-col justify-start items-start gap-2 ml-2" >
            {settingList.map(({ listName, href, Icon }) => (
                <Link href={href} key={listName} className="cursor-pointer hover:text-blue hover:font-semibold flex items-center py-1 justify-center gap-3 text-lg
                text-gray-700 dark:text-slate-300 text-md transition-trasition duration-300">
                    <Icon className='w-5 h-5' />
                    <div>{listName}</div>
                </Link>
            ))}
        </div>
    );
}
