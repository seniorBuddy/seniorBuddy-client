import { useState } from 'react';
import { CiCalendar } from 'react-icons/ci';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/locale';

export default function MedicineModal({ onCancel }: {onCancel: () => void}) {
  const [chooseTime, setChooseTime] = useState<string>('before');  // 식전, 식후
  const [isOn, setIsOn] = useState<boolean>(false);  // 종료 시간 유무
  const [startDate, setStartDate] = useState<Date | null>(new Date());  // 시작 날짜
  const [showDateList, setShowDateList] = useState<boolean>(false);  // 달력
  const [selectedEndDate, setSelectedEndDate] = useState<string | null>(null);  // 종료 날짜
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
  ]);  // 종료 기간 리스트 요소

  const time  = ['기상', '아침', '점심', '저녁', '취침전'];

  /* 종료 기간 설정 on/off */
  const toggleSwitch = () =>{
    setIsOn(!isOn);
  }

  /* 종료 날짜 선택 */
  const handleChooseEndDate = (endDate: string) => {
    if(isOn) {
      setSelectedEndDate(endDate);
      setShowDateList(false);
    }
  }


  return (
    <div>
      <div className="flex flex-col gap-8 font-bold text-darkblue text-2xl">
        {/* 약 이름 */}
        <div className="flex flex-row items-center w-full gap-1">
          <span className="w-[60px]">이름</span>
          <input
            type="text"
            placeholder="약 이름 입력"
            className="text-black"
          />
        </div>
        {/* 기타사항 */}
        <div className="flex flex-row items-center w-full gap-1">
          <span className="w-[60px]">기타</span>
          <input
            type="text"
            placeholder="추가 정보"
            className="text-black"
          />
        </div>
        {/* 알람 설정 */}
        <div className="flex flex-row w-full gap-1">
          <span className="w-[60px] pt-2 flex items-center">알람</span>
          <div className="flex flex-col gap-2">
            {/* 약 먹는 시간 선택 */}
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
            {/* 식전 식후 선택 */}
            <div className="flex flex-row gap-3">
              <label>
                <input
                  type="radio"
                  name="timing"
                  value="before"
                  checked={chooseTime === 'before'}
                />
                <span className="ml-3">식전</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="timing"
                  value="after"
                  checked={chooseTime === 'after'}
                />
                <span className="ml-3">식후</span>
              </label>
            </div>
          </div>
        </div>
        {/* 약 복용 기간 */}
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
                  ${isOn ? 'translate-x-4': 'translate-x-0'}`}
              />
            </div>
            <div className="flex flex-row gap-3">
              {/* 시작 날짜 선택 */}
              <div className="flex flex-row gap-2 items-center borer borer-gray-600 px-2">
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
                {/* 종료 기간 리스트 */}
                {showDateList && (
                  <ul className="absolute top-full w-[140px] max-h-[200px] overflow-y-auto overflow-hidden bg-white border-2 border-gray-300 mt-1 rounded z-10">
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
      {/* 취소 등록 버튼 */}
      <div className="flex flex-row justify-center w-full pt-[20px] gap-[50px] text-darkblue text-xl font-bold">
        <div
          onClick={onCancel}
          className="w-[180px] h-[45px] p-2 flex justify-center items-center border-2 border-gray-400 rounded-xl\
          hover:bg-blue hover:text-white hover:scale-[1.1] transition-transform duration-200"
        >
          취소
        </div>
        <div 
          className="w-[180px] h-[45px] p-2 flex justify-center items-center border-2 border-gray-400 rounded\
          hover:bg-blue hover:text-white hover:scale-[1.1] transition-transform duration-200"
        >
            등록
        </div>
      </div>
    </div>
  );
}