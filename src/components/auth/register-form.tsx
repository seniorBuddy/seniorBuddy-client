'use client';

import { useState } from 'react';
import { toast, Toaster } from '@/app/utils/toast';
import PhoneInput from './phone-input';
import EmailAuto from './emailAuto';
import { useRouter } from 'next/navigation';
import { register } from '@/app/actions/auth';
// import useTokenStore from '@/app/lib/store/useTokenStore'; // 토큰 저장용 Zustand
// import useUserStore from '@/app/lib/store/useUserStore'; // 유저 정보 가져오기용 Zustand


export default function RegisterForm () {
  const [changeToggle, setChangeToggle] = useState(false);

  const router = useRouter();

  const onChangeToggle = () => {
    setChangeToggle(!changeToggle);
  }
  
  
  const handleSubmit = async (formData: FormData) => {
    const type = changeToggle ? 'senior' : 'guardian'
    const result = await register(formData, type);

    if (result.success) {
        toast.success(result.message, {
          autoClose: 2000,
          icon: <span>⭕</span>,
      });
        router.push('/auth/login');
    }

    else {
        toast.success(result.message, {
            autoClose: 2000,
            icon: <span>❌</span>,
        });
    }
}
  return (
    <>
    <form action={handleSubmit} className='flex flex-col gap-4 text-black'>
        {/* toggle 버튼 */}
        <div className='w-full flex items-center justify-center gap-5'>
          {!changeToggle ? (
            <>
            <div 
            onClick={onChangeToggle}
            className="w-20 sm:w-24 flex gap-2 items-center justify-center bg-darkblue px-4 py-2 rounded-3xl text-white cursor-pointer hover:bg-slate-300">
             시니어
           </div>
            <div 
            onClick={onChangeToggle}
            className=" w-20 sm:w-24 flex gap-2 items-center justify-center bg-slate-100 px-4 py-2 rounded-3xl text-darkblue cursor-pointer hover:bg-slate-300">
            보호자
           </div>
            </>

          ): (
            <>
            <div 
            onClick={onChangeToggle}
            className="w-20 sm:w-24 flex gap-2 items-center justify-center bg-slate-100 px-4 py-2 rounded-3xl text-darkblue cursor-pointer hover:bg-slate-300">
             시니어
           </div>
            <div 
            onClick={onChangeToggle}
            className=" w-20 sm:w-24 flex gap-2 items-center justify-center bg-darkblue px-4 py-2 rounded-3xl text-white cursor-pointer hover:bg-slate-300">
            보호자
           </div>
            </>
          )}
        
       
        </div>
     
    {/* input 영역 */}
    {/* 이름 */}
      <div className="flex flex-col sm:flex-row gap-2 justify-between  sm:items-center">
            <span className="text-white">이름</span>
            <input
                name='name'
                placeholder="이름을 입력해주세요."
                className="font-medium p-1 rounded-sm px-4 py-2"
            />
        </div>
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
        {/* 회원가입 버튼 */}
            <button type="submit" className="w-44 sm:w-48 py-2 rounded-3xl font-bold text-lg
            cursor-pointer text-sigblue bg-grd-blue hover:bg-darkblue">
                회원가입
            </button>
          {/* 로그인 이동 버튼 */}
            <button
            onClick={() => router.push('/auth/login')} 
             className="w-44 sm:w-48 py-2 rounded-3xl font-bold text-md
            cursor-pointer text-sigblue bg-white hover:bg-slate-300">
                로그인 돌아가기
            </button>
    </div>
    </form>
        <Toaster />
    </>
  );
}
