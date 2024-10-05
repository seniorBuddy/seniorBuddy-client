import { CiMail } from "react-icons/ci";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center mt-[80px]">
      <div className="flex flex-col gap-5 px-10 h-[500px] w-[450px] justify-center items-center bg-white font-bold rounded-[40px] border-4 border-darkblue">
        <span className="my-5 text-3xl">로그인</span>
        <div className="flex flex-row text-lg items-center justify-between w-full gap-1">
          <span className="flex-[2]">아이디</span>
          <input 
            type="text" placeholder="아이디를 입력해주세요." 
            className="flex-[8] border-2 border-darkblue rounded-lg p-2"
          />
        </div>
        <div className="flex flex-row text-lg items-center justify-between w-full mb-4 gap-1">
          <span className="flex-[2]">비밀번호</span>
          <input 
            type="password" placeholder="비밀번호를 입력해주세요." 
            className="flex-[8] border-2 border-darkblue rounded-lg p-2"
          />
        </div>
        <div className="flex justify-center w-full text-xl bg-darkblue rounded-lg px-4 py-3">
          <span className="text-white">로그인</span>
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-8 px-6 text-xl border-2 rounded-lg py-2">
          < CiMail size="35"/>
          <span>이메일 로그인</span>
        </div>
        <div className="flex flex-row justify-center w-full gap-5 p-2 text-blue">
          <h1 className="flex justify-end flex-[1]">비밀번호 찾기</h1>
          <h1 className="flex flex-[1] justify-center">|</h1>
          <h1 className="flex justify-start flex-[1]">회원가입</h1>
        </div>
      </div>
    </div>
  );
}