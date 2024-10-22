'use client';
import { useState } from 'react';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { loginUser } from '@/app/action/loginAction';
import useTokenStore from '@/app/lib/store/useTokenStore';


export default function Login() {
  const [form, setForm] = useState({
    identifier: '',
    password: '',
  })
  const [changeEmail, setChangeEmail] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const { setToken, setRefreshToken } = useTokenStore();

  const changeEmailHandler = () => {
    setChangeEmail(!changeEmail);
  };

  function formatPhoneNumber(value: string) {
    return value
      .replace(/[^0-9]/g, '')
      .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/, "$1-$2-$3");
  }


  const handleIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!changeEmail) {
        setForm({...form, 
        identifier: formatPhoneNumber(e.target.value)
      });
    }
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, 
      password: e.target.value
    });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // 액션 함수 호출
      const { identifier, password } = form;
      const res = await loginUser(identifier, password);

      // 토큰 쿠키 설정
      setToken(res.access_token);
      setRefreshToken(res.refresh_token);

      router.push('/'); // 성공하면 메인 페이지로 이동
    } catch (error: any) {
      setError(error.message || '로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <form onSubmit={handleLogin} className="font-bold rounded-lg text-slate-100 bg-blue">
           <div className='px-12 py-10 flex flex-col items-center gap-8'>
            <span className="text-2xl py-2 text-darkblue font-bold">로그인</span>
            {/* {error && <p className="text-red-500">{error}</p>} */}

            {/* input 영역 */}
            <div className='flex flex-col gap-4 text-black'>
            <div className=" flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
              <span className='text-white'>{!changeEmail ? '전화번호' : '이메일'}</span>
              <input
                type="text"
                placeholder={!changeEmail ? '전화번호를 입력해주세요.' : '이메일을 입력해주세요.'}
                className="font-medium p-1 rounded-sm px-4 py-2"
                value={form.identifier}
                onChange={handleIdInput}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 justify-between  sm:items-center">
              <span className="text-white">비밀번호</span>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                className="font-medium p-1 rounded-sm px-4 py-2"
                value={form.password}
                onChange={handlePasswordInput}
              />
            </div>
            </div>
            
          <div className='flex flex-col gap-3'>
          <button type="submit" className="w-44 sm:w-48 py-2 rounded-3xl font-bold text-lg
              cursor-pointer text-sigblue bg-grd-blue hover:bg-darkblue">
                로그인
              </button>

            <div onClick={changeEmailHandler} className=" w-44 sm:w-48 flex gap-2 items-center justify-center bg-slate-100 
            px-4 py-2 rounded-3xl text-darkblue cursor-pointer hover:bg-slate-300">
              {!changeEmail ? (
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
             

            <div className="flex gap-3 mr-4">
              <Link href="/auth/find_pw" className="hover:text-darkblue">비밀번호 찾기</Link>
              <h1 className="">|</h1>
              <Link href="/auth/register" className="hover:text-darkblue">회원가입</Link>
            </div>
          </div>
        </form>
    </div>
  );
}
