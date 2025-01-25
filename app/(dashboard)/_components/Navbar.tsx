import React from "react";
import MobileSidebar from "./MobileSidebar";
import NavbarRoute from "@/components/NavbarRoutes";

const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoute />
    </div>
  );
};
export default Navbar;
