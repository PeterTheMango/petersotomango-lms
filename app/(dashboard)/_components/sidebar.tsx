import React from "react";
import Logo from "@/app/(dashboard)/_components/Logo";
import SidebarRoute from "@/app/(dashboard)/_components/SiderbarRoute";

const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className={"p-6"}>
        <Logo />
      </div>
      <div className={"flex flex-col w-ful"}>
        <SidebarRoute />
      </div>
    </div>
  );
};
export default Sidebar;
