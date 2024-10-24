'use client'

import { ChangeEvent, useState } from "react";


export default function PhoneInput() {
  const [number, setNumber] = useState('');

  const formatPhoneNumber = (value: string) => {
    return value
    .replace(/[^0-9]/g, '')
    .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/, "$1-$2-$3");
  }

  const onChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setNumber(formatted);
  }
   
      return (
        <>
          <input
            maxLength={13}
            name="identifier"
            type="tel"
            placeholder='전화번호를 입력해주세요.'
            className="font-medium p-1 rounded-sm px-4 py-2"
            onChange={onChangeNumber}
            value={number}
          />
        </>
      )
}