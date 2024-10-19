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
  const theme = cookies().get("theme")?.value || "light";

  return (
    <html lang="en">
      <body className={pretendard.variable}>
        <ThemeProviders initTheme={theme}>
          <main className="font-pretendard min-h-screen dark:bg-slate-800 text-white dark:text-slate-800">
            <Header />
            <section className="min-h-screen flex-grow max-w-[700px] m-auto">
              {children}
            </section>
            <Footer />
          </main>
        </ThemeProviders>
      </body>
    </html>
  );
}
