import { useEffect, useState } from 'react';
import { CiCalendar } from 'react-icons/ci';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';

interface Hospital {
  name: string;
  details: string;
  period: string;
}

export default function HospitalRegister({
  prop, onCancel, onRegister
}:{
  prop: boolean;
  onCancel: () => void;
  onRegister: (newHospital: Hospital) => void;
}) {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [reservationDate, setReservationDate] = useState<Date | null>(new Date());


  const handleRegisterClick = () => {
    if(name) {
      const period = reservationDate?.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }) as string;
      onRegister({ name, details: details || "", period });
      onCancel();
    } else {
      alert("모든 필드를 입력해주세요.");
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-12 items-center justify-center w-[600px] h-[550px] bg-white border-4 rounded-2xl border-darkblue">
        <span className="text-darkblue text-4xl font-bold">병원 정보</span>
        <div className="flex flex-col gap-8 font-bold text-darkbold text-darkblue text-2xl">
          <div className="flex flex-row items-center w-full gap-1">
            <span className="w-[60px]">이름</span>
            <input
              type="text"
              placeholder="병원 이름 입력"
              className="text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center w-full gap-1">
            <span className="w-[60px]">기타</span>
            <input
              type="text"
              placeholder="방문 목적"
              className="text-black"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center w-full gap-1">
            <span className="w-[60px]">일정</span>
            <div className="flex flex-row gap-2 items-center border border-gray-600 px-2">
              <CiCalendar />
              <DatePicker
                locale={ko}
                dateFormat="yyyy.MM.dd  HH:mm"
                showTimeSelect
                timeFormat="HH시 mm분"
                timeIntervals={30}
                selected={reservationDate}
                onChange={(date: Date | null) => setReservationDate(date)}
                className="w-[240px]"
              />
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
    </div>
  );
}