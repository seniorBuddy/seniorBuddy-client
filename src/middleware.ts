import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 쿠키에서 'access-token' 확인
  const token = request.cookies.get('access_token')?.value;

  const url = new URL(request.url);
  const fcmToken = url.searchParams.get('token');

  // 엑세스 토큰이 없으면 로그인 페이지로 리다이렉트
  if (!token) {
    const redirectUrl = new URL("/auth/login", request.url);
    const response = NextResponse.redirect(redirectUrl);

    // fcmToken이 있을 경우 쿠키에 저장
    if (fcmToken) {
      response.cookies.set('fcm_token', fcmToken, { httpOnly: false }); // fcm_token을 쿠키에 저장
    }
    return response;
  }

  // 토큰이 있으면 요청을 그대로 통과시킴
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!auth/login|auth/register|_next|favicon.ico).*)", 
  // 로그인, 회원가입, 정적 파일(_next, favicon.ico) 등을 제외한 모든 경로에 적용
};