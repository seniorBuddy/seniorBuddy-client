import { useState } from 'react';
import Image from 'next/image';
import Sample from '../../app/assets/images/sample.png';

export default function medicineRegister({prop}:{prop: boolean}) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  }

  const handleHourSetting = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHours(e.target.value);
  };

  const handleMinuteSetting = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(e.target.value);
  }

  const handleSetAlarm = () => {
    const alarmTime = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
  }

  const time = ['아침', '점심', '저녁'];
  const date = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <div className="flex items-center justify-center w-[600px] h-[250px] bg-white border-4 rounded-2xl border-darkblue">
      <div className="flex flex-col gap-3 font-bold text-darkblue text-xl">
        {/* 약 이름 */}
        <div className="flex flex-row items-center w-full gap-1">
          <span className="w-[60px]">이름</span>
          <input
            type="text"
            placeholder="약 이름 입력"
          />
        </div>
        {/* <div className="flex flex-row items-center w-full gap-2">
          <span className="w-[60px]">시간</span>
          <div className="flex flex-row gap-7">
            {time.map(time =>
              <label key={time} htmlFor='select'>
                <input
                  type="checkbox"
                  id="select"
                  className="mr-2"
                />
                {time}
               </label>
            )}
          </div>
        </div> */}
        <div className="flex flex-row items-center w-full gap-1">
          <span className="w-[60px]">기타</span>
          <input
            type="text"
            placeholder="추가 정보"
          />
        </div>
        <div className="flex flex-row w-full gap-1">
          <span className="w-[60px] pt-2">알람</span>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-center text-lg">
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
            </div>
            <div className="flex flex-row gap-2">
              {date.map(date =>
                <label key={date} htmlFor="choose">
                  <input
                    type="checkbox"
                    id="choose"
                    className="mr-2"
                  />
                  {date}
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}