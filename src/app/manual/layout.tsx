import type { Metadata } from "next"; 
import localFont from "next/font/local";
import "../globals.css";  
import Footer from "../../components/footer"; 

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Manual",
  description: "Manual Main Page",
};

export default function ManualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`font-pretendard min-h-screen flex flex-col ${pretendard.variable}`}>
      <div className="flex-grow flex flex-col items-center px-8 sm:p-2 mb-16 w-full">
        {children}
      </div>
      <Footer />
    </main>
  );
}