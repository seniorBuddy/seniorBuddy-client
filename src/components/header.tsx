import Image from 'next/image';
import LogoSvg from '../app/assets/logo.svg';
import Link from 'next/link';

export default function Header () {
    return (
    <header className="sticky top-0 z-10 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 dark:bg-opacity-50">
        <div className=" bg-white dark:bg-slate-900 flex items-center justify-center bg-opacity-30 dark:bg-opacity-50">
            <Link href={'/'}>
            <Image src={LogoSvg} alt="logo" className="my-3 max-w-10 m-auto"/>
            </Link>
        </div>
    </header>
    )
}