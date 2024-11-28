'use server';

import { getAccessToken, getRefreshToken } from '../lib/auth/token';

export async function HospitalRegister(formData: any, onUpdate: boolean) {
  if (!formData.content) {
    return {success: false, message: '모든 필드를 입력해주세요.'};
  }

  let token = getAccessToken();

  try {
    const url = onUpdate ?
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/reminder/hospital/${formData.reminder_id}` :
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/reminder/hospital`;

    const methods = onUpdate ? 'PUT' : 'POST';

    let res = await fetch(url, {
      method: methods,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
      credentials: 'include',
    });

    if (res.status === 401) {
      console.log("토큰 만료");
      const newToken = await getRefreshToken();

      if (newToken) {
        token = newToken;

        res = await fetch(url, {
          method: methods,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
          credentials: 'include',
        });
      } else {
        console.log("토큰 요청 실패");
      }
    }

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

export async function getHospital() {
  const token = getAccessToken();
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/reminder/hospital`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
    })
    const getData = await res.json();

    if (!res.ok) {
      return { success: false, message: "정보 불러오기 실패" };
    }

    return { success: true, message: getData };
  } catch(error) {
    return { success: false, message: "GET: 서버 오류 발생" };
  }
}

export async function deleteHospital(reminderId: number) {
  const token = getAccessToken();
  console.log("약 삭제하기");

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/reminder/medication/${reminderId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
    })
    console.log("DELETE 완료");
    const getData = await res.json();
    console.log("가져온 정보 : ", getData);

    if(!res.ok) {
      return { success: false, message: "정보 불러오기 실패" };
    }
    
    return { success: true, message: getData };
  } catch(error) {
    return { success: false, message: "DELETE: 서버 오류 발생" };
  }
}