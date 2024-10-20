import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProviders } from "@/components/theme-providers";
import { cookies } from "next/headers";

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
