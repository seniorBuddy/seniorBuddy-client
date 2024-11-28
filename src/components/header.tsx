"use client";

import Image from 'next/image';
import LogoSvg from '../app/assets/logo.svg';
import { CgArrowsExchange } from "react-icons/cg";
import useModeStore from '@/app/lib/store/useModeStore';
import { useRouter } from 'next/navigation';

export default function Header () {
    const { toggleMode } = useModeStore();
    const router = useRouter();

        return (
            <header className="sticky top-0 z-10 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 dark:bg-opacity-50">
                <div className="w-full bg-white flex items-center justify-evenly bg-opacity-30 dark:bg-opacity-5">
                <div className='w-full md:w-1/2 flex justify-center items-center px-3'>
                    <div className='w-full bg-'>
                        <Image
                            onClick={() => router.push('/')} 
                            src={LogoSvg} alt="logo" className="right-0 my-3 max-w-10 m-auto translate-x-6 cursor-pointer"/>
                    </div>
                         <CgArrowsExchange 
                         onClick={toggleMode}
                         className='size-10 text-blue dark:text-white cursor-pointer' />
                    </div>
                </div>
            </header>
        ) 
}