import Image from 'next/image';
import LogoSvg from '../app/assets/logo.svg';


export default function Header() {
    return (
        <div className="w-full bg-white shadow-md flex items-center justify-center">
            <div className="my-3 max-w-10 m-auto">
               <Image src={LogoSvg} alt="logo"/>
            </div>
        </div>
    )
    
}