import Guardian from '../../../components/register/guardian';

export default function signup() {
  return (
    <div className="flex flex-col justify-center items-center mt-[80px]">
      <div className="flex flex-col gap-7 sm:gap-5 px-4 sm:px-20 h-[650px] sm:h-[500px] w-[350px] sm:w-[700px] justify-center items-center bg-white font-bold rounded-[40px] border-2 border-blue">
        <span className="my-5 text-3xl">회원가입</span>
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