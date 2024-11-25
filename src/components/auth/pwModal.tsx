export default function Modal() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-blue rounded-xl p-[80px]">
      <span className="text-white text-3xl font-bold">비밀번호</span>
      <span className="text-white text-xl font-bold">비밀번호는 1234 입니다.</span>
      <div className="flex justify-center items-center w-[300px] h-[50px] bg-white rounded-lg border text-xl text-blue mt-[30px]">확인</div>
    </div>
  )
}