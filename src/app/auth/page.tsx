import Image from 'next/image';
import Mail from '../assets/images/mailIcon.png';

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center mt-[80px]">
      <div className="flex flex-col gap-7 px-12 h-[400px] w-[600px] items-center bg-white font-bold rounded-[40px] border-4 border-darkblue">
        <span className="mt-8 my-5 text-3xl">로그인</span>
        <div className="flex flex-row gap-8 text-xl items-center justify-between w-full">
          <span className="w-24">아이디</span>
          <input 
            type="text" placeholder="아이디를 입력해주세요." 
            className="border-2 border-darkblue rounded-lg p-2 flex-1"
          />
        </div>
        <div className="flex flex-row gap-8 text-xl items-center justify-between w-full">
          <span className="w-24">비밀번호</span>
          <input 
            type="password" placeholder="비밀번호를 입력해주세요." 
            className="border-2 border-darkblue rounded-lg p-2 flex-1"
          />
        </div>
        <div className="flex flex-row gap-8 px-6 text-xl items-center border-2 rounded-lg p-4">
          <Image src={Mail} alt="mail" width="50" height="50"/>
          <span>이메일 로그인</span>
        </div>
      </div>
    </div>
  );
}