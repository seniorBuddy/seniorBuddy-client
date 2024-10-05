import { CiMail } from "react-icons/ci";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center mt-[80px]">
      <div className="flex flex-col gap-7 sm:gap-5 px-4 sm:px-40 h-[650px] sm:h-[500px] w-[350px] sm:w-[750px] justify-center items-center bg-white font-bold rounded-[40px] border-2 border-blue">
        <span className="my-5 text-3xl">로그인</span>
        <div className="flex flex-row text-md sm:text-lg items-center justify-between w-full gap-1">
          <span className="hidden sm:block flex-[2]">아이디</span>
          <input 
            type="text" placeholder="아이디를 입력해주세요." 
            className="flex-[8] border-2 border-darkblue rounded-lg p-3"
          />
        </div>
        <div className="flex flex-row text-md sm:text-lg items-center justify-between w-full mb-4 gap-1">
          <span className="hidden sm:block flex-[2]">비밀번호</span>
          <input 
            type="password" placeholder="비밀번호를 입력해주세요." 
            className="flex-[8] border-2 border-darkblue rounded-lg p-3"
          />
        </div>
        <div className="flex justify-center w-full text-xl bg-darkblue rounded-lg px-4 py-3">
          <span className="text-white">로그인</span>
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-8 px-6 text-xl border-2 rounded-lg py-2">
          < CiMail size="35"/>
          <span>이메일 로그인</span>
        </div>
        <div className="flex flex-row justify-center w-full sm:gap-5 p-2 text-blue">
          <h1 className="flex justify-end flex-[3]">비밀번호 찾기</h1>
          <h1 className="flex flex-[1] justify-center">|</h1>
          <h1 className="flex justify-start flex-[3]">회원가입</h1>
        </div>
      </div>
    </div>
  );
}