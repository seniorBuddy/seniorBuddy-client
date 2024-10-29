import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProviders } from "@/components/theme-providers";
import Cookies from 'js-cookie';

// 폰트 설정
const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

// Metadata API 사용
export const metadata = {
  title: 'Senior Buddy',  // 페이지 타이틀 설정
};

// viewport는 metadata 밖에서 따로 정의
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 클라이언트 사이드에서 테마 쿠키를 읽어옴
  const theme = typeof window !== 'undefined' ? Cookies.get("theme") || "light" : "light";

  return (
    <html lang="en">
      <body className={pretendard.variable}>
        <ThemeProviders initTheme={theme}>
          <Header />
          <main className="font-pretendard dark:bg-slate-800 text-white">
            <section className="max-w-full w-full sm:max-w-[700px] sm:w-full m-auto px-0 sm:px-6 pt-10 pb-20">
              {children}
            </section>
            <Footer />
          </main>
        </ThemeProviders>
      </body>
    </html>
  );
}
