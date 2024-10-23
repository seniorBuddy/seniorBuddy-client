import { useState } from 'react';

export default function medicineRegister({prop, onCancel}:{prop: boolean; onCancel: () => void}) {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
 
  // const handleHourSetting = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setHours(e.target.value);
  // };

  // const handleMinuteSetting = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setMinutes(e.target.value);
  // }

  const handleSetAlarm = () => {
    const alarmTime = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
  }

  const time = ['아침', '점심', '저녁'];
  const date = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <div>
      <div className="flex flex-col gap-7 items-center justify-center w-[600px] h-[450px] bg-white border-4 rounded-2xl border-darkblue">
        <span className="text-darkblue text-4xl font-bold">약 정보</span>
        <div className="flex flex-col gap-6 font-bold text-darkblue text-2xl">
          {/* 약 이름 */}
          <div className="flex flex-row items-center w-full gap-1">
            <span className="w-[60px]">이름</span>
            <input
              type="text"
              placeholder="약 이름 입력"
              className="text-black"
            />
          </div>
          <div className="flex flex-row items-center w-full gap-1">
            <span className="w-[60px]">기타</span>
            <input
              type="text"
              placeholder="추가 정보"
              className="text-black"
            />
          </div>
          <div className="flex flex-row w-full gap-1">
            <span className="w-[60px] pt-2">알람</span>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-3 items-center">
                {time.map((time, index) =>
                  <label key={time} htmlFor={`time-${index}`}>
                    <input
                      type="checkbox"
                      id={`time-${index}`}
                      className="mr-2"
                    />
                    {time}
                  </label>
                )}
              </div>
              {/* <div className="flex flex-row items-center text-lg">
                <input
                  type="number"
                  value={hours}
                  onChange={handleHourSetting}
                  placeholder="시"
                  min="0" max="23"
                  className="border rounded p-2 w-[80px] h-[40px]"
                />
                <span className="px-4">:</span>
                <input
                  type="number"
                  value={minutes}
                  onChange={handleMinuteSetting}
                  placeholder="분"
                  min="0" max="59"
                  className="border rounded p-2 w-[80px] h-[40px]"
                />
              </div> */}
              <div className="flex flex-row gap-2">
                {date.map((date, index) =>
                  <label key={date} htmlFor={`date-${index}`}>
                    <input
                      type="checkbox"
                      id={`date-${index}`}
                      className="mr-2"
                    />
                    {date}
                  </label>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full gap-[50px] text-darkblue text-xl font-bold">
            <div
              onClick={onCancel} 
              className="w-[180px] h-[45px] p-2 flex justify-center items-center border-2 border-gray-400 rounded\
              hover:bg-blue hover:text-white hover:scale-[1.1]"
            >
              취소
            </div>
            <div 
              onClick={onCancel}
              className="w-[180px] h-[45px] p-2 flex justify-center items-center border-2 border-gray-400 rounded\
              hover:bg-blue hover:text-white hover:scale-[1.1]"
            >
              등록
            </div>
          </div>
      </div>
    </div>
  );
}