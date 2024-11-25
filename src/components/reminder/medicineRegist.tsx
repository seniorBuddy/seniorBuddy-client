import { useState } from 'react';
import { CiCalendar } from 'react-icons/ci';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { getAccessToken } from '@/app/lib/auth/token';

interface Medicine {
  name: string;   // 약 이름
  details: string;   // 기타 사항
  times: string[];   // 약 먹는 시간 (아침, 점심, 저녁 등)
  period: string;   // 시작 날짜
  timing: string;    // 식전, 식후
  endDate: string | null;    // 종료 날짜(복용기간)
}

export default function MedicineRegister({
  prop, onCancel, onRegister
}:{
  prop: boolean;
  onCancel: () => void;
  onRegister: (newMedicine: Medicine) => void
}) {
  const token = getAccessToken();

  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [isOn, setIsOn] = useState<boolean>(false);
  const [chooseTime, setChooseTime] = useState('before');
  const [showDateList, setShowDateList] = useState<boolean>(false);
  const time = ['기상', '아침', '점심', '저녁', '취침전'];
  const [endDate, setEndDate] = useState([
    { id: 1, name: '3일' },
    { id: 2, name: '5일' },
    { id: 3, name: '1주' },
    { id: 4, name: '2주' },
    { id: 5, name: '1개월' },
    { id: 6, name: '2개월' },
    { id: 7, name: '3개월' },
    { id: 8, name: '1년' },
    { id: 9, name: '1년 이상' },
  ]);
  const [selectedEndDate, setSelectedEndDate] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleRegisterClick();
  };

  const handleRegisterClick = async () => {
    if(name && selectedTimes.length > 0) {
      const period = startDate?.toLocaleDateString('ko-KR') as string;
      const timing = chooseTime === "before" ? '식전' : '식후' as string;
      const newMedicine = { name, details: details || "", times: selectedTimes, period, timing, endDate: selectedEndDate };
      
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/reminder/medication`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(newMedicine),
          credentials: 'include',
        });
  
        if (!res.ok) {
          console.log(res)
          alert('등록에 실패했습니다.');
        } else {
          onRegister(newMedicine);
          alert('등록이 완료되었습니다.');
          onCancel();
        }
      } catch (error) {
        alert('에러');
        console.error('등록 에러 : ', error);
      }
    } else {
      alert("모든 필드를 입력해주세요.");
    }
  };

  const handleTimeChange = (time: string) => {
    setSelectedTimes((prev) =>
      prev.includes(time) ? prev.filter((t) => t != time) : [...prev, time]
    );
  };

  const toggleSwitch = () => {
    setIsOn(!isOn);
  }

  const handleChooseTiming = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChooseTime(e.target.value);
  }

  const handleChooseEndDate = (endDate: string) => {
    if(isOn) {
      setSelectedEndDate(endDate);
      setShowDateList(false);
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <div className="flex flex-col gap-12 items-center justify-center w-[600px] h-[550px] bg-white border-4 rounded-2xl border-darkblue">
        <span className="text-darkblue text-4xl font-bold">약 정보</span>
        <div className="flex flex-col gap-8 font-bold text-darkblue text-2xl">
          {/* 약 이름 */}
          <div className="flex flex-row items-center w-full gap-1">
            <span className="w-[60px]">이름</span>
            <input
              type="text"
              placeholder="약 이름 입력"
              className="text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center w-full gap-1">
            <span className="w-[60px]">기타</span>
            <input
              type="text"
              placeholder="추가 정보"
              className="text-black"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <div className="flex flex-row w-full gap-1">
            <span className="w-[60px] pt-2 flex items-center">알람</span>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-3 items-center">
                {time.map((time, index) =>
                  <label key={time} htmlFor={`time-${index}`}>
                    <input
                      type="checkbox"
                      id={`time-${index}`}
                      className="mr-2"
                      onChange={() => handleTimeChange(time)}
                    />
                    {time}
                  </label>
                )}
              </div>
              <div className="flex flex-row gap-3">
                <label>
                  <input
                    type="radio"
                    name="timing"
                    value="before"
                    checked={chooseTime === 'before'}
                    onChange={(e) => handleChooseTiming(e)}
                  />
                  <span className="ml-3">식전</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="timing"
                    value="after"
                    checked={chooseTime === 'after'}
                    onChange={(e) => handleChooseTiming(e)}
                  />
                  <span className="ml-3">식후</span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center w-full gap-1">
            <div className="flex flex-col gap-2">
              <span className="w-[60px]">종료</span>
              <span className="w-[60px]">기간</span>
            </div>
            <div className="flex flex-col gap-2">
              <div 
                className={`h-[25px] w-[45px] flex items-center rounded-xl p-1 cursor-pointer transition-colors duration-300
                ${isOn ? 'bg-blue' : 'bg-gray-200'}`}
                onClick={toggleSwitch}
              >
                <div
                  className={`h-[20px] w-[20px] bg-white rounded-full transform transition-transform duration-300
                  ${isOn ? 'translate-x-4' : 'translate-x-0'}`}
                />
              </div>
              <div className="flex flex-row gap-3">
                <div className="flex flex-row gap-2 items-center border border-gray-600 px-2">
                  <CiCalendar />
                  <DatePicker
                    locale={ko}
                    dateFormat="yyyy.MM.dd"
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date)}
                    className="w-[130px]"
                  />
                </div>
                <div 
                  className={`relative
                  ${isOn ? '' : 'bg-gray-200 text-gray-600 opacity-50'}`}
                  onClick={isOn ? () => setShowDateList(!showDateList) : undefined}
                >
                  <div className="flex flex-row w-[130px] gap-2 justify-center items-center border border-gray-600 px-2 cursor-pointer">
                    <span>{selectedEndDate ? selectedEndDate : '기간 선택'}</span>
                  </div>
                  {showDateList && (
                    <ul className="absolute top-full max-h-[200px] overflow-y-auto overflow-hidden w-[140px] bg-white border-2 border-gray-300 mt-1 rounded z-10">
                      {endDate.map((end) => (
                        <li
                          key={end.id}
                          onClick={() => handleChooseEndDate(end.name)}
                          className={`p-2 border rounded-lg cursor-pointer
                            ${selectedEndDate === end.name ? 'bg-blue text-white' : 'bg-white'}`}
                        >
                          {end.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full gap-[50px] text-darkblue text-xl font-bold">
          <div
            onClick={onCancel} 
            className="w-[180px] h-[45px] p-2 flex justify-center items-center border-2 border-gray-400 rounded-xl\
            hover:bg-blue hover:text-white hover:scale-[1.1] transition-transform duration-200"
          >
            취소
          </div>
          <div 
            onClick={handleRegisterClick}
            className="w-[180px] h-[45px] p-2 flex justify-center items-center border-2 border-gray-400 rounded\
            hover:bg-blue hover:text-white hover:scale-[1.1] transition-transform duration-200"
          >
            등록
          </div>
        </div>
      </div>
    </form>
  );
}