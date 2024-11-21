'use client';

import { useState, useEffect } from 'react';
import { CiCalendar } from 'react-icons/ci';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/locale';
import useTokenStore from '@/app/lib/store/useTokenStore';
import { useMedicineStore } from '@/app/lib/store/useMedicineStore';

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
    "아침식전",
    "아침식후",
    "점심식전",
    "점심식후",
    "저녁식전",
    "저녁식후",
    "취침전"
  ];
  const [checkedItems, setCheckedItems] = useState<string[]>([]);  // 복용 시간 체크리스트
  const [chooseTime, setChooseTime] = useState<string>('before');  // 식전, 식후
  const [isOn, setIsOn] = useState<boolean>(false);  // 종료 시간 유무
  const [startDate, setStartDate] = useState<Date | null>(new Date());  // 시작 날짜
  const [showDateList, setShowDateList] = useState<boolean>(false);  // 달력
  const [selectedEndDate, setSelectedEndDate] = useState<string>();  // 종료 날짜
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

  const token = useTokenStore((state) => state.token) as string;
  const addMedicine = useMedicineStore((state) => state.addMedicine);
  const updateMedicine = useMedicineStore((state) => state.updateMedicine);
  const getMedicine = useMedicineStore((state) => state.medicines.find((medicine) => medicine.id === medicineId));

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
    if (e.target.checked) {
      // 체크 항목 추가
      setCheckedItems([...checkedItems, timeLabel]);
    } else {
      // 체크 해제 항목 제거
      setCheckedItems(checkedItems.filter(item => item !== timeLabel));
    }
  }

  /* 종료 날짜 선택 */
  const handleChooseEndDate = (endDate: string) => {
    if(isOn) {
      setSelectedEndDate(endDate);
      setShowDateList(false);
    }
  }

  // 정보 전달
  const handleSubmit = async () => {
    const formData = {
      'content': name,
      'additional_info': other || '',
      'frequency': checkedItems,
      //'timing': chooseTime,
      'start_date': startDate?.toISOString().split('T')[0] || '',
      'day': selectedEndDate || '',
    };

    console.log(formData);

    if (!onUpdate) {
      const result = await addMedicine(formData, token);
      onResult(result);

      if (result.success) {
        onCancel();
      }
    } else {
      const update = { ...formData, id: medicineId };
      const result = await updateMedicine(update, token);

      if (result.success) {
        onCancel();
      }
    } 
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 sm:gap-8 font-bold text-darkblue text-2xl px-3">
        {/* 약 이름 */}
        <div className="flex flex-row items-center w-[280px] sm:w-full gap-1">
          <span className="hidden sm:block sm:w-[60px]">이름</span>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="약 이름 입력"
            value={name}
            className="w-[280px] sm:w-full border border-black text-black"
          />
        </div>
        {/* 기타사항 */}
        <div className="flex flex-row items-center w-full gap-1">
          <span className="w-[60px]">기타</span>
          <input
            onChange={(e) => setOther(e.target.value)}
            type="text"
            placeholder="추가 정보"
            value={other}
            className="text-black"
          />
        </div>
        {/* 알람 설정 */}
        <div className="flex flex-row w-full gap-1">
          <span className="w-[60px] pt-2 flex items-center">알람</span>
          <div className="flex flex-col gap-2">
            {/* 약 먹는 시간 선택 */}
            <div className="flex flex-row gap-3 items-center">
              {time.map((timeLabel, index) =>
                <label key={timeLabel} htmlFor={`time-${index}`}>
                  <input
                    type="checkbox"
                    id={`time-${index}`}
                    value={timeLabel}
                    checked={checkedItems.includes(timeLabel)}
                    className="mr-2"
                    onChange={(e) => takingTime(e, timeLabel)}
                  />
                  {timeLabel}
                </label>
              )}
            </div>
            {/* 식전 식후 선택 
            <div className="flex flex-row gap-3">
              <label>
                <input
                  type="radio"
                  value="before"
                  checked={chooseTime === 'before'}
                  onChange={(e) => setChooseTime(e.target.value)}
                />
                <span className="ml-3">식전</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="after"
                  checked={chooseTime === 'after'}
                  onChange={(e) => setChooseTime(e.target.value)}
                />
                <span className="ml-3">식후</span>
              </label>
            </div>
            */}
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
          onClick={handleSubmit}
          className="w-[180px] h-[45px] p-2 flex justify-center items-center border-2 border-gray-400 rounded\
          hover:bg-blue hover:text-white hover:scale-[1.1] transition-transform duration-200"
        >
            등록
        </div>
      </div>
    </form>
    </>
  );
}