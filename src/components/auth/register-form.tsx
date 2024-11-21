'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '@/app/actions/auth'; // 서버에 보내는 register 함수 (가정)
import { toast, Toaster } from '@/app/utils/toast';
import PhoneInput from './phone-input'; // 전화번호 입력 컴포넌트
import EmailAuto from './emailAuto'; // 이메일 자동완성 컴포넌트
import Guardian from './guardian'; // 보호자 폼
import Senior from './senior'; // 사용자 폼
import useTokenStore from '@/app/lib/store/useTokenStore'; // 토큰 저장용 Zustand
import useUserStore from '@/app/lib/store/useUserStore'; // 유저 정보 가져오기용 Zustand

interface RegisterFormProps {
  selected: 'guardian' | 'senior'; // guardian 또는 senior
}

export default function RegisterForm({ selected }: RegisterFormProps) {
  const [changeToggle, setChangeToggle] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const { setToken, setRefreshToken } = useTokenStore();
  const { fetchUser } = useUserStore();
  const router = useRouter();

  const onChangeToggle = () => {
    setChangeToggle(!changeToggle);
  };

  // 입력 값에 대한 유효성 검사 및 폼 제출
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 입력 값 객체 생성
    const data = {
      user_real_name: name,
      password,
      user_type: selected,
      phone_or_email: phoneOrEmail,
    };

    try {
      const result = await register(data); // 서버로 보내는 register 함수 (가정)
      
      if (!result.success) {
        toast.success(result.message, {
          autoClose: 2000,
          icon: <span>❌</span>,
        });
      } else {
        // 서버에서 성공적인 응답을 받은 경우
        const access_token = result.data?.access_token;
        const refresh_token = result.data?.refresh_token;

        // zustand에 토큰 저장
        setToken(access_token);
        setRefreshToken(refresh_token);

        // 유저 정보 fetch
        await fetchUser(access_token);

        // 회원가입 성공 후 로그인 페이지로 리디렉션
        router.push('/auth/login');
      }
    } catch (error) {
      console.error('회원가입 에러: ', error);
      toast.success('회원가입에 실패했습니다. 다시 시도해주세요.', {
        autoClose: 2000,
        icon: <span>❌</span>,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
        {/* 이름 입력 */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between sm:items-center">
          <span className="text-white">이름</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해주세요."
            className="font-medium p-1 rounded-sm px-4 py-2"
          />
        </div>

        {/* 전화번호 또는 이메일 입력 */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between sm:items-center">
          <span className="text-white">{!changeToggle ? '전화번호' : '이메일'}</span>
          {!changeToggle ? (
            <PhoneInput
              phoneOrEmail={phoneOrEmail}
              setPhoneOrEmail={setPhoneOrEmail}
            />
          ) : (
            <EmailAuto
              phoneOrEmail={phoneOrEmail}
              setPhoneOrEmail={setPhoneOrEmail}
            />
          )}
        </div>

        {/* 비밀번호 입력 */}
        <div className="flex flex-col sm:flex-row gap-2 justify-between sm:items-center">
          <span className="text-white">비밀번호</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요."
            className="font-medium p-1 rounded-sm px-4 py-2"
          />
        </div>

        {/* 역할에 맞는 컴포넌트 (Guardian / Senior) */}
        {selected === 'guardian' && <Guardian />}
        {selected === 'senior' && <Senior />}

        {/* 가입 버튼 */}
        <div className="pt-3 flex flex-col gap-3 items-center justify-center">
          <button
            type="submit"
            className="w-44 sm:w-48 py-2 rounded-3xl font-bold text-lg cursor-pointer text-sigblue bg-grd-blue hover:bg-darkblue"
          >
            가입
          </button>

          {/* toggle 버튼 (전화번호 / 이메일 전환) */}
          <div
            onClick={onChangeToggle}
            className="w-44 sm:w-48 flex gap-2 items-center justify-center bg-slate-100 px-4 py-2 rounded-3xl text-darkblue cursor-pointer hover:bg-slate-300"
          >
            {!changeToggle ? (
              <>
                <FaPhone className="text-blue w-5 h-5" />
                <span>이메일로 로그인</span>
              </>
            ) : (
              <>
                <IoMdMail className="text-blue w-5 h-5" />
                <span>전화번호로 로그인</span>
              </>
            )}
          </div>
        </div>
      </form>

      <Toaster />
    </>
  );
}
