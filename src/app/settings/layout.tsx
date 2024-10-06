import { ReactNode } from "react";

export default function Home({ children, settinglist }: {
    children: ReactNode,
    settinglist: ReactNode
}) {
  return (
    <div className="mx-7 my-10 flex flex-col justify-center bg-white p-7 shadow-md rounded-xl gap-5">
    {settinglist}
    {children}
    </div>
  );
}