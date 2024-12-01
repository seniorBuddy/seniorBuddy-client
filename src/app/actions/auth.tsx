'use server';

import { removeToken, setTokens } from "@/app/lib/auth/token";

export async function register(formData:FormData, type: string) {
  const name = formData.get('name') as string;
  const identifier = formData.get('identifier') as string;
  const password = formData.get('password') as string;
  
  if (!identifier || !password) {
    return { success: false, message: '모든 필드를 입력해주세요.' };
  }
  
  let resData;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_real_name: name,
        password: password,
        user_type: type,
        identifier: identifier,
      }),
      credentials: 'include',
    });
  
    resData = await res.json();
  
  
    if (!res.ok) {
      return { success: false, message: resData.detail || '회원가입 실패' };
    }
    
    return { success: true, message: '회원가입에 성공하였습니다'}

  } catch (error) {
    return { 
      success: false, 
      message: resData && typeof resData.detail === 'string' ? resData.detail : JSON.stringify(resData.detail) || '알 수 없는 오류가 발생했습니다.' 
    };
  }

}


export async function login(formData: FormData) {
  const identifier = formData.get('identifier') as string;
  const password = formData.get('password') as string;
  const fcmToken = formData.get('fcm_token') as string;


  if (!identifier || !password) {
    return { success: false, message: '모든 필드를 입력해주세요.' };
  }

  let resData;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fcm_token: fcmToken,
        identifier: identifier,
        password: password,
      }),
      credentials: 'include',
    });

    resData = await res.json();


    if (!res.ok) {
      return { success: false, message: resData.detail || '로그인 실패' };
    }

    const access_token = resData.access_token;
    const refresh_token = resData.refresh_token;
    
    // next Header에 Token Set
    setTokens(
      {
          access_token: access_token,
          refresh_token: refresh_token
      }
    )
    // 성공적인 로그인 시 처리
    return {
        success: true, 
        message: '로그인 성공', 
        token: access_token,
        redirectTo: '/'
    }
  } catch (error) {
    return { 
      success: false, 
      message: resData && typeof resData.detail === 'string' ? resData.detail : JSON.stringify(resData.detail) || '알 수 없는 오류가 발생했습니다.' 
    };
  }
}


export async function logout() {
    // 토큰 제거
    removeToken()

    return {
      success: true, 
      message: '로그아웃 되었습니다', 
      redirectTo: '/auth/login'
    }

}
