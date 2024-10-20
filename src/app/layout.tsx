import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProviders } from "@/components/theme-providers";
import { cookies } from "next/headers";
import Head from "next/head";  // Head 컴포넌트를 import

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 서버 사이드에서 쿠키를 읽어옴
  const theme = cookies().get("theme")?.value || "light";
  const token = cookies().get('access-token')?.value;
  console.log(token);

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Senior Buddy</title>  {/* 필요에 따라 title 태그도 추가 가능 */}
      </Head>
      <body className={pretendard.variable}>
        <ThemeProviders initTheme={theme}>
          <main className="font-pretendard min-h-screen dark:bg-slate-800 text-white dark:text-slate-800">
            <Header />
            <section className="min-h-screen flex-grow max-w-[700px] m-auto">
              {children}
            </section>
            {/* {token &&  <Footer />} */}
            <Footer />
          </main>
        </ThemeProviders>
      </body>
    </html>
  );
}
