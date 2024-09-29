import Image from 'next/image';
import LogoSvg from '../app/assets/logo.svg';
import Link from 'next/link';


export default function Header() {
    return (
        <Link href={'/'} className="w-full bg-white shadow-md flex items-center justify-center z-0">
            <div className="my-3 max-w-10 m-auto">
               <Image src={LogoSvg} alt="logo"/>
            </div>
        </Link>
    )
    
}