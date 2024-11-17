import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProviders } from "@/components/theme-providers";

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

  return (
    <html lang="en">
        <body className={pretendard.variable} >
        <ThemeProviders >
          <main>
          <Header />
            <section className="text-white">
              <div className="max-w-full w-full sm:max-w-[700px] sm:w-full m-auto px-0 sm:px-6 pt-10 pb-20">
                {children}
              </div>
              <Footer />
            </section>
          </main>
      </ThemeProviders>
        </body>
    </html>
  );
}
