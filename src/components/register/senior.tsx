import Link from "next/link";

interface InputProps {
  label: string;
  type?: string;
  children?: React.ReactNode;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function formatPhoneNumber(value: string) {
  return value
    .replace(/[^0-9]/g, '')
    .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/, "$1-$2-$3");
}

export default function SeniorRegister() {
  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    target.value = formatPhoneNumber(target.value);
  };

  const Input = ({ label, children, type, onInput }: InputProps) => (
    <div className="flex flex-col md:flex-row sm:gap-3 sm:items-center justify-start w-full gap-4 md:ml-[100px] mt-2">
      <span className="w-full md:w-[120px]">{label}</span>
      <div className="flex flex-row w-full gap-2">
        {type && (
          <input 
            type={type}
            className="w-[230px] md:w-[300px] border-2 border-gray-400 rounded-xl p-1"
            onInput={onInput}
          />
        )}
        {children && (
          <div>{children}</div>
        )}
      </div>
    </div>
  );
  
  return (
    <div>
      <div className="flex flex-col md:text-lg items-center justify-center w-full h-[500px] md:h-[350px] gap-1 md:gap-4">
        <Input label="전화번호" type="text" onInput={handlePhoneInput}>
          <span className="w-[100px] bg-slate-600 text-white rounded-md p-2 mx-1 text-center">인증번호</span>
        </Input>
        <Input label="인증번호" type="text" />
        <Input label="이름">
          <div className="flex flex-row gap-1 md:gap-3">
            <input
              type="text"
              className="w-[85px] md:w-[120px] border-2 border-gray-400 rounded-xl p-1"
              placeholder="성"
            />
            <input
              type="text"
              className="w-[140px] md:w-[170px] border-2 border-gray-400 rounded-xl p-1"
              placeholder="이름"
            />
          </div>
        </Input>
        <Input label="성별">
          <div className="flex flex-row gap-2">
            <div className="flex w-[150px] border-2 border-gray-400 rounded-sm">
              <input
                id="female"
                type="radio"
                name="sex"
                className="hidden peer"
              />
              <label
                htmlFor="female"
                className="w-full h-full flex justify-center items-center peer-checked:bg-gray-500 peer-checked:text-white"
              >
                여성
              </label>
            </div>
            <div className="flex w-[150px] border-2 border-gray-400 rounded-sm">
              <input
                id="male"
                type="radio"
                name="sex"
                className="hidden peer"
              />
              <label
                htmlFor="male"
                className="w-full h-full flex justify-center items-center peer-checked:bg-gray-500 peer-checked:text-white"
              >
                남성
              </label>
            </div>
          </div>
        </Input>
      </div>
      <div className="flex sm:flex-row">
        <Link href="/auth/login" className="flex justify-center items-center bg-darkblue text-white text-xl mt-[40px] p-2 rounded-xl w-full m-5">취소</Link>
        <Link href="/auth/login" className="flex justify-center items-center bg-darkblue text-white text-xl mt-[40px] p-2 rounded-xl w-full m-5">가입</Link>
      </div>
    </div>
  );
}