import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="items-center h-full justify-center flex">{children}</div>
  );
}
