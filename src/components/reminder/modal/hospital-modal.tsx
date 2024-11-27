'use client';

import { useState, useEffect } from 'react';
import { CiCalendar } from 'react-icons/ci';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/locale';
import { format } from 'date-fns';
import { useHospitalStore } from '@/app/lib/store/useHospitalStore';

interface HospitalModalProps {
  onCancel: () => void;
  onUpdate: boolean;
  hospitalId: number | null;
  onResult: (result: {success: boolean, message: string}) => void;
}

export default function HospitalModal({ onCancel, onUpdate, hospitalId, onResult }: HospitalModalProps) {
  const [name, setName] = useState<string>('');  // 병원 이름
  const [other, setOther] = useState<string>('');  // 기타 정보
  const [reservationDate, setReservationDate] = useState<Date | null>(new Date());  // 예약 날짜

  //const token = useTokenStore((state) => state.token) as string;

  const addHospital = useHospitalStore((state) => state.addHospital);
  const updateHospital = useHospitalStore((state) => state.updateHospital);
  const getHospital = useHospitalStore((state) => state.hospitals.find((hospital) => hospital.reminder_id === hospitalId));

  useEffect(() => {
    if (onUpdate && getHospital) {
      const parseDate = new Date(getHospital.start_date_time);
      setName(getHospital.content);
      setOther(getHospital.additional_info);
      setReservationDate(parseDate);
    }
  }, [onUpdate, getHospital]);

  // 정보 전달
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hospitalId && onUpdate) {
      onResult({ success: false, message: "병원 정보가 없습니다." });
      return;
    }

    const formData = {
      'content': name,
      'additional_info': other,
      'start_date_time': reservationDate ? format(reservationDate, 'yyyy-MM-dd HH:mm:00') : '',
      'reminder_id': hospitalId, undefined,
    };

    if (!onUpdate) {
      console.log("저장할 내용 : ", formData);
      const result = await addHospital(formData, onUpdate);
      onResult(result);

      if (result.success) {
        onCancel();
      }
    } else {
      const update = { ...formData };

      console.log("수정된 내용 : ", update);

      const result = await updateHospital(update, onUpdate);
      onResult(result);

      if (result.success) {
        onCancel();
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-8 font-bold text-darkblue text-2xl">
        {/* 병원 이름 */}
        <div className="flex flex-row items-center w-full gap-1">
          <span className="w-[60px]">이름</span>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="병원 이름 입력"
            value={name}
            className="text-black"
          />
        </div>
        {/* 기타 사항 */}
        <div className="flex flex-row items-center w-full gap-1">
          <span className="w-[60px]">기타</span>
          <input
            onChange={(e) => setOther(e.target.value)}
            type="text"
            placeholder="방문 목적"
            value={other}
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
              onChange={(date: Date | null) => setReservationDate(date)}
              className="w-[240px]"
            />
          </div>
        </div>
      </div>
      {/* 취소 등록 버튼 */}
      <div className="flex flex-row justify-center w-full gap-[50px] text-darkblue text-xl font-bold">
        <div
          onClick={onCancel}
          className="w-[180px] h-[45px] p-2 flex justify-center items-center border-2 border-gray-400 rounded-xl\
          hover:bg-blue hover:text-white hover:scale-[1.1] transition-transform duration-200"
        >
          취소
        </div>
        <div 
          onClick={handleSubmit}
          className="w-[180px] h-[45px] p-2 flex justify-center items-center border-2 border-gray-400 rounded\
          hover:bg-blue hover:text-white hover:scale-[1.1] transition-transform duration-200"
        >
          등록
        </div>
      </div>
    </form>
  );
}