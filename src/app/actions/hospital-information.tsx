'use server';

import { getAccessToken } from '../lib/auth/token';

export async function HospitalRegister(formData: any) {
  if (!formData.content) {
    return {success: false, message: '모든 필드를 입력해주세요.'};
  }

  const token = getAccessToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/reminder/hospital`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
      credentials: 'include',
    });

    if (!res.ok) {
      const resData = await res.json();
      console.log('Server Response:', resData);
      return { success: false, message: '등록 실패' };
    } else {
      return { success: true, message: '등록 성공' };
    }
  } catch (error) {
    return { success: false, message: '오류가 발생했습니다.' };
  }
}