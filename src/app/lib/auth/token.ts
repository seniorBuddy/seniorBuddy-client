import { cookies } from "next/headers";

interface TokenData {
    access_token: string
    refresh_token: string
}

export function setTokens(tokens: TokenData) {
// next header의 cookie를 사용해 스토어 생성
    const cookieStore = cookies();

     // Access Token을 httpOnly 쿠키로 저장
    cookieStore.set('access_token', tokens.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
    })

     // Refresh Token을 httpOnly 쿠키로 저장
     cookieStore.set('refresh_token', tokens.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
    })
}

export function getAccessToken() {
    const cookieStore = cookies();
    return cookieStore.get('access_token')?.value || null
}

export function getRefreshToken() {
    const cookieStore = cookies();
    return cookieStore.get('refresh_token')?.value || null
}


export function removeToken() {
    const cookieStore = cookies();
    console.log("토큰 삭제 실행")
    // Access Token 삭제
    cookieStore.set('access_token', '', {
      maxAge: -1,
      path: '/',
    });
  
    // Refresh Token 삭제
    cookieStore.set('refresh_token', '', {
      maxAge: -1,
      path: '/',
    });

  }