'use client';

import { useState, useEffect } from 'react';
import { CiCalendar } from 'react-icons/ci';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/locale';
import { useMedicineStore } from '@/app/lib/store/useMedicineStore';
import { TbTriangleInvertedFilled } from 'react-icons/tb';

interface MedicineModalProps {
  onCancel: () => void;
  onUpdate: boolean;
  medicineId: number | null;
  onResult: (result: {success: boolean, message: string}) => void;
}

export default function MedicineModal({ onCancel, onUpdate, medicineId, onResult }: MedicineModalProps) {
  const [name, setName] = useState<string>('');  // 약 이름
  const [other, setOther] = useState<string>('');  // 기타 사항
  const time  = [
    "기상",
    "아침",
    "점심",
    "저녁",
    "취침전"
  ];
  const [checkedItems, setCheckedItems] = useState<string[]>([]);  // 복용 시간 체크리스트
  const [chooseTime, setChooseTime] = useState<string>('before');  // 식전, 식후
  const [isOn, setIsOn] = useState<boolean>(false);  // 종료 시간 유무
  const [startDate, setStartDate] = useState<Date | null>(new Date());  // 시작 날짜
  const [showDateList, setShowDateList] = useState<boolean>(false);  // 달력
  const [selectedEndDate, setSelectedEndDate] = useState<string>('');  // 종료 날짜
  const [toggle, setToggle] = useState<boolean>(true);
  const [endDate] = useState([
    { id: 1, name: '3' },
    { id: 2, name: '5일' },
    { id: 3, name: '7일' },
    { id: 4, name: '2주' },
    { id: 5, name: '1개월' },
    { id: 6, name: '2개월' },
    { id: 7, name: '3개월' },
    { id: 8, name: '1년' },
    { id: 9, name: '1년 이상' },
  ]);  // 종료 기간 리스트 요소

  const addMedicine = useMedicineStore((state) => state.addMedicine);
  const updateMedicine = useMedicineStore((state) => state.updateMedicine);
  const getMedicine = useMedicineStore((state) => state.medicines.find((medicine) => medicine.reminder_id === medicineId));

  useEffect(() => {
    if (onUpdate && getMedicine) {
      const parsedDate = new Date(getMedicine.start_date);
      setName(getMedicine.content);
      setOther(getMedicine.additional_info);
      setCheckedItems(getMedicine.frequency);
      setStartDate(parsedDate);
      setSelectedEndDate(getMedicine.day);
    }
  }, [onUpdate, getMedicine]);

  /* 종료 기간 설정 on/off */
  const toggleSwitch = () =>{
    setIsOn(!isOn);
  }

  const takingTime = (e: React.ChangeEvent<HTMLInputElement>, timeLabel: string) => {
    const times = `${timeLabel}${chooseTime === 'before' ? '식전' : '식후'}`;
    if (e.target.checked) {
      // 체크 항목 추가
      setCheckedItems([...checkedItems, times]);
    } else {
      // 체크 해제 항목 제거
      setCheckedItems(checkedItems.filter(item => item !== times));
    }
  }

  const handleChooseTime = (time: string) => {
    setChooseTime(time);

    setCheckedItems(prev =>
      prev.map(item => {
        const baseTime = item.replace(/식전|식후/, '');
        return `${baseTime}${time === 'before' ? '식전' : '식후'}`;
      })
    );
  };

  /* 종료 날짜 선택 */
  const handleChooseEndDate = (endDate: string) => {
    if(isOn) {
      setSelectedEndDate(endDate);
      setShowDateList(false);
    }
  }

  // 정보 전달
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!medicineId && onUpdate) {
      onResult({ success: false, message: "약 정보가 없습니다."});
      return ;
    }

    const formData = {
      'content': name,
      'additional_info': other || '',
      'frequency': checkedItems,
      'start_date': startDate?.toISOString().split('T')[0] || '',
      'day': selectedEndDate || '',
      'reminder_id': medicineId, undefined,
    };

    if (!onUpdate) {
      console.log("저장할 내용 : ", formData);
      const result = await addMedicine(formData, onUpdate);
      onResult(result);

      if (result.success) {
        onCancel();
      }
    } else {
      const update = { ...formData };

      console.log("수정된 내용 : ", update);
      console.log("현재 id : ", medicineId);

      const result = await updateMedicine(update, onUpdate);
      onResult(result);

      if (result.success) {
        onCancel();
      }
    }
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center gap-4 sm:gap-8 font-bold text-darkblue text-2xl px-3">
        {/* 약 이름 */}
        <div className="flex flex-row justify-center sm:justify-start items-center w-full gap-1">
          <span className="hidden sm:block sm:w-[60px]">이름</span>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="약 이름 입력"
            value={name}
            className="w-[280px] sm:w-full border border-black text-black rounded-lg px-2"
          />
        </div>
        {/* 기타사항 */}
        <div className="flex flex-row justify-center sm:justify-start items-center w-full gap-1">
          <span className="hidden sm:block sm:w-[60px]">기타</span>
          <input
            onChange={(e) => setOther(e.target.value)}
            type="text"
            placeholder="추가 정보"
            value={other}
            className="w-[280px] sm:w-full border border-black text-black rounded-lg px-2"
          />
        </div>
        {/* 알람 설정 */}
        <div className="flex flex-row justify-center sm:justify-start w-full gap-1">
          <span className="hidden sm:block sm:w-[60px] flex items-center">알람</span>
          <div className="flex flex-col gap-2 px-2">
            <div className="flex flex-row gap-3 items-center">
              <TbTriangleInvertedFilled
                onClick={() => setToggle(!toggle)}
                size="20" className={`text-blue duration-300 ${toggle ? 'rotate-0' : '-rotate-90'}`}
              />
              <span className="text-darkblue text-2xl font-bold">약 알람 설정</span>
            </div>
            {/* 약 먹는 시간 선택 */}
            <div className={`duration-300 relative ${toggle ? 'max-h-full opacity-100 z-10' : 'max-h-0 opacity-0 z-0'}`}>
              <div className="flex flex-row gap-2 items-center text-2xl">
                {time.map((timeLabel, index) =>
                  <label key={timeLabel} htmlFor={`time-${index}`}>
                    <input
                      type="checkbox"
                      id={`time-${index}`}
                      value={timeLabel}
                      className="flex flex-col mr-2"
                      onChange={(e) => takingTime(e, timeLabel)}
                    />
                    {timeLabel}
                  </label>
                )}
              </div>
              {/* 식전 식후 선택 */}
              <div className="flex flex-row gap-3">
                <label>
                  <input
                    type="radio"
                    value="before"
                    checked={chooseTime === 'before'}
                    onChange={() => handleChooseTime('before')}
                  />
                  <span className="ml-3">식전</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="after"
                    checked={chooseTime === 'after'}
                    onChange={() => handleChooseTime('after')}
                  />
                  <span className="ml-3">식후</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* 약 복용 기간 */}
        <div className="flex flex-row justify-center sm:justify-start items-center w-full gap-1">
          <div className="flex flex-col gap-2">
            <span className="hidden sm:block sm:w-[60px]">종료</span>
            <span className="hidden sm:block sm:w-[60px]">기간</span>
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
            <div className="flex flex-row sm:gap-3">
              {/* 시작 날짜 선택 */}
              <div className="flex flex-row gap-2 items-center borer borer-gray-600 px-2">
                <CiCalendar />
                <DatePicker
                  locale={ko}
                  dateFormat="yyyy.MM.dd"
                  selected={startDate ?? new Date()}
                  onChange={(date: Date | null) => setStartDate(date)}
                  className="w-[130px]"
                />
              </div>
              <div
                className={`relative
                  ${isOn ? '' : 'bg-gray-200 text-gray-600 opacity-50'}`}
                  onClick={isOn ? () => setShowDateList(!showDateList) : undefined}
              >
                <div className="flex flex-row w-[130px] gap-2 justify-center items-center border border-gray-600 cursor-pointer">
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
      <div className="flex flex-row justify-center w-full pt-[20px] gap-5 sm:gap-[50px] text-darkblue text-xl font-bold">
        <div
          onClick={onCancel}
          className="w-[130px] sm:w-[180px] h-[45px] p-2 flex justify-center items-center border-2 border-gray-400 rounded-xl\
          hover:bg-blue hover:text-white hover:scale-[1.1] transition-transform duration-200"
        >
          취소
        </div>
        <div
          onClick={handleSubmit}
          className="w-[130px] sm:w-[180px] h-[45px] p-2 flex justify-center items-center border-2 border-gray-400 rounded-xl\
          hover:bg-blue hover:text-white hover:scale-[1.1] transition-transform duration-200"
        >
            등록
        </div>
      </div>
    </form>
    </>
  );
}