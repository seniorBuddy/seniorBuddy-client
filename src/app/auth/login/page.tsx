import LoginForm from "@/components/auth/login-form";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full flex items-center justify-center">
       <div className="font-bold rounded-lg text-slate-100 bg-blue">
           <div className='px-12 py-10 flex flex-col items-center gap-8'>
            <span className="text-2xl py-2 text-darkblue font-bold">로그인</span>
             <LoginForm />
            <div className="flex gap-3 mr-4">
              <Link href="/auth/find_pw" className="hover:text-darkblue">비밀번호 찾기</Link>
              <h1 className="">|</h1>
              <Link href="/auth/register" className="hover:text-darkblue">회원가입</Link>
            </div>
          </div>
        </div>
    </div>
  );
}
