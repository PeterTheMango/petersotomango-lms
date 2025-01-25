"use client";

import React from "react";
import { Layout, Search } from "lucide-react";
import SidebarItem from "@/app/(dashboard)/_components/SidebarItem";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Search,
    label: "Browse",
    href: "/search",
  },
];

const SiderbarRoute = () => {
  const routes = guestRoutes;

  return (
    <div className={"flex flex-col w-full"}>
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
export default SiderbarRoute;
