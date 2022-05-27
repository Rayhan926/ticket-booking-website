import React from "react";
import HeaderTop from "@components/Header/components/HeaderTop";
import HeaderMain from "@components/Header/components/HeaderMain";

const Header = () => {
  return (
    <header className="text-white absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-[#191C26] to-transparent">
      <HeaderTop />
      <HeaderMain />
    </header>
  );
};

export default Header;
