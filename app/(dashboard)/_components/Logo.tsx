import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      height={130}
      width={130}
      alt={"PeterSotomango_Logo"}
      src={"/logo.svg"}
    />
  );
};
export default Logo;
