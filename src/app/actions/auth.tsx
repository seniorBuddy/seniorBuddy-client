'use server';
import { cookies } from 'next/headers';

export async function login(formData: FormData) {
  const cookieStore = cookies();
  const identifier = formData.get('identifier') as string;
  const password = formData.get('password') as string;

  if (!identifier || !password) {
    return { success: false, message: '모든 필드를 입력해주세요.' };
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: identifier,
        password: password,
      }),
      credentials: 'include',
    });

    const resData = await res.json();

    if (!res.ok) {
      console.log(resData.detail)
      return { success: false, message: resData.detail || '로그인 실패' };
    }
    const access_token = resData.access_token;
    const refresh_token = resData.refresh_token;

    

    // 성공적인 로그인 시 처리
    return {
        success: true, 
        message: '로그인 성공', 
        data: {
        access_token,
        refresh_token,
     }
    }
  } catch (error) {
    return { success: false, message: '서버 오류가 발생했습니다.' };
  }
}
