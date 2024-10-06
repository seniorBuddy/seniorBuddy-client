export default function GuardianRegister() {
  return (
    <div className="flex flex-row text-md sm:text-lg items-center justify-between w-full gap-4">
      <span className="hidden sm:block flex-[2]">아이디</span>
      <input 
        type="text"
        className="flex-[8] border-2 border-darkblue rounded-lg p-1"
      />
      <span className="bg-blue text-white rounded-xl p-2 mx-1">중복 확인</span>
    </div>
  );
}