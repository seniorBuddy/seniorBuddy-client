"use client";

import RegisterForm from "@/components/auth/register-form";

export default function Page() {


  return (
     <div className="w-full flex items-center justify-center">
  <div className="font-bold rounded-lg text-slate-100 bg-blue">
      <div className='px-12 py-10 flex flex-col items-center gap-8'>
       <span className="text-2xl py-2 text-darkblue font-bold">회원가입</span>
        <RegisterForm />
     </div>
   </div>
</div>
  );
}