import Guardian from '../../../components/register/guardian';

export default function signup() {
  return (
    <div className="flex flex-col justify-center items-center mt-[30px]">
      <div className="flex flex-col gap-2 sm:gap-5 px-4 md:px-20 h-[750px] md:h-[600px] w-[380px] sm:w-[600px] md:w-[850px] justify-center items-center bg-white font-bold rounded-[40px] border-4 border-blue">
        <span className="text-3xl">회원가입</span>
        <div className="flex flex-row gap-10">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="choose"
              defaultChecked
            />
            <span className="flex items-center justify-center">보호자</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="choose"
            />
            <span className="flex items-center justify-center">사용자</span>
          </label>
        </div>
        <Guardian />
      </div>
    </div>
  );
}