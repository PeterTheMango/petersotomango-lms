import React from "react";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MangoMind • Dashboard",
  description:
    "Dashboard page that contains all the access to the various courses offered on the page.",
  applicationName: "MangoMind",
  authors: [{ name: "PeterTheMango", url: "https://github.com/PeterTheMango" }],
  category: "Education",
  creator: "PeterTheMango",
  icons: ["/mango.svg"],
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className={"h-[80px] md:pl-56 fixed inset-y-0 w-full"}>
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className={"md:pl-56 h-full pt-[80px]"}>{children}</main>
    </div>
  );
};
export default DashboardLayout;
