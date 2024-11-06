import { useState } from 'react';
import { CiCalendar } from 'react-icons/ci';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/locale';

export default function HospitalModal() {
  const [reservationDate, setREserVationDate] = useState<Date | null>(new Date());  // 예약 날짜

  return (
    <div>
      <div className="flex flex-col gap-8 font-bold text-darkblue text-2xl">
        {/* 병원 이름 */}
        <div className="flex flex-row items-center w-full gap-1">
          <span className="w-[60px]">이름</span>
          <input
            type="text"
            placeholder="병원 이름 입력"
            className="text-black"
          />
        </div>
        {/* 기타 사항 */}
        <div className="flex flex-row items-center w-full gap-1">
          <span className="w-[60px]">기타</span>
          <input
            type="text"
            placeholder="방문 목적"
            className="text-black"
          />
        </div>
        {/* 예약 일정 */}
        <div className="flex flex-row items-center w-full gap-1">
          <span className="w-[60px]">일정</span>
          <div className="flex flex-row gap-2 items-center border borer-gray-600 px-2">
            <CiCalendar />
            <DatePicker
              locale={ko}
              dateFormat="yyyy.MM.dd HH:mm"
              showTimeSelect
              timeFormat="HH시 mm분"
              timeIntervals={30}
              selected={reservationDate}
              onChange={(date: Date | null) => setREserVationDate(date)}
              className="w-[240px]"
            />
          </div>
        </div>
      </div>
      {/* 취소 등록 버튼 */}
      <div className="flex flex-row justify-center w-full gap-[50px] text-darkblue text-xl font-bold">
        <div
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