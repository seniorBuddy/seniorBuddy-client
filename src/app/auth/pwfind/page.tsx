import FindForm from "@/components/auth/find-form";

export default function Page() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[600px] font-bold rounded-lg text-slate-100 bg-white border-4 border-blue">
        <div className="px-12 py-10 flex flex-col items-center gap-8">
          <span className="text-2xl py-2 text-darkblue font-bold">비밀번호 찾기</span>
          <FindForm />
        </div>
      </div>
    </div>
  );
}