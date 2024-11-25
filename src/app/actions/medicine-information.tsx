'use server';

import { getAccessToken } from '../lib/auth/token';

export async function MedicineRegister(formData: any, onUpdate: boolean) {  
  if (!formData.content || formData.frequency.length < 0) {
    return {success: false, message: '모든 필드를 입력해주세요.'};
  }

  const token = getAccessToken();
  
  try {
    console.log("api 전송 id : ", formData.id);
    const url = onUpdate ?
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/reminder/medication/${formData.id}` :
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/reminder/medication`;

    const methods = onUpdate ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method: methods,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
      credentials: 'include',
    });

    const resData = await res.json();
    console.log("실패 테스트 : ", resData);

    if (!res.ok) {
      return { success: false, message: '등록 실패' };
    } else {
        return { success: true, message: onUpdate ? '수정 성공' : '등록 성공' };
    }
  } catch (error) {
    return { success: false, message: '오류가 발생했습니다.' };
  }
}