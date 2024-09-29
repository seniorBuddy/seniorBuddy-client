import Image from 'next/image';
import Dummy from '../app/assets/custom-dummy.svg';

export default function customImage() {
    return (
    <div className="min-w-[300px] px-2 py-5 overflow-auto flex gap-3">
            <Image src={Dummy} alt='dummy'></Image>
            <Image src={Dummy} alt='dummy'></Image>
            <Image src={Dummy} alt='dummy'></Image>
            <Image src={Dummy} alt='dummy'></Image>
            <Image src={Dummy} alt='dummy'></Image>
            <Image src={Dummy} alt='dummy'></Image>
            <Image src={Dummy} alt='dummy'></Image>
            <Image src={Dummy} alt='dummy'></Image>
            <Image src={Dummy} alt='dummy'></Image>
    </div>
    )
    
}