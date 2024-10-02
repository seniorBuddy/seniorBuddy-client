import SettingSidebar from "@/components/SettingSidebar";
import { ReactNode } from "react";

export default function Home({ children }: {
    children: ReactNode
}) {
  return (
    <div className="flex flex-col sm:flex-row">
      <SettingSidebar />
      {children}
    </div>
  );
}