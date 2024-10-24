'use client';
import { useState } from 'react';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import EmailAuto from './emailAuto';
import PhoneInput from './phone-input';
import { login } from '@/app/actions/auth';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from '@/app/utils/toast';


export default function LoginForm() {
    const [changeToggle, setChangeToggle] = useState(false);
    const router = useRouter();

    const onChangeToggle = () => {
        setChangeToggle(!changeToggle);
    }

    const handleSubmit = async (formData: FormData) => {
        const result = await login(formData);
        if (!result.success) {
            toast.success(result.message, {
                autoClose: 2000,
                icon: <span>❌</span>,
            });
            toast.error(result.message, {
                autoClose: 2000,
                icon: <span>❌</span>,
            });
            toast.info(result.message, {
                autoClose: 2000,
                icon: <span>❌</span>,
            });
            toast.dark(result.message, {
                autoClose: 2000,
                icon: <span>❌</span>,
            });

        } else {
            router.push('/')
        }
    }
  

return (
    <>
    <form action={handleSubmit} className='flex flex-col gap-4 text-black'>
    {/* input 영역 */}
        {/* 아이디 */}
        <div className=" flex flex-col sm:flex-row gap-3 justify-between sm:items-center">
            <span className='text-white'>
            {!changeToggle ? '전화번호' : '이메일'}
            </span>
            {!changeToggle ? <PhoneInput /> : <EmailAuto />}
        </div>
        {/* 비밀번호 */}
        <div className="flex flex-col sm:flex-row gap-2 justify-between  sm:items-center">
            <span className="text-white">비밀번호</span>
            <input
                name='password'
                type="password"
                placeholder="비밀번호를 입력해주세요."
                className="font-medium p-1 rounded-sm px-4 py-2"
            />
        </div>
            
           
    <div className='pt-3 flex flex-col gap-3 items-center justify-center'>
        {/* 로그인 버튼 */}
            <button type="submit" className="w-44 sm:w-48 py-2 rounded-3xl font-bold text-lg
            cursor-pointer text-sigblue bg-grd-blue hover:bg-darkblue">
                로그인
            </button>
        {/* toggle 버튼 */}
        <div 
            onClick={onChangeToggle}
            className=" w-44 sm:w-48 flex gap-2 items-center justify-center bg-slate-100 
                px-4 py-2 rounded-3xl text-darkblue cursor-pointer hover:bg-slate-300">
                {!changeToggle ? (
                    <>
                    <IoMdMail className='text-blue w-5 h-5' />
                    <span>이메일로 로그인</span>
                    </>
                ) : (
                    <>
                    <FaPhone className='text-blue w-5 h-5' />
                    <span>전화번호로 로그인</span>
                    </>
                )}
            </div>
        </div>
    </form>
        <Toaster />
    </>
    )
}