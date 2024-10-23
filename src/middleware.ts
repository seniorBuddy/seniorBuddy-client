import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 쿠키에서 'access-token' 확인
  const token = request.cookies.get('access_token')?.value;

  // 토큰이 없으면 로그인 페이지로 리다이렉트
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // 토큰이 있으면 요청을 그대로 통과시킴
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!auth/login|auth/register|_next|favicon.ico).*)", 
  // 로그인, 회원가입, 정적 파일(_next, favicon.ico) 등을 제외한 모든 경로에 적용
};
