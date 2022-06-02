import React from "react";
import HeaderTop from "@components/Header/components/HeaderTop";
import HeaderMain from "@components/Header/components/HeaderMain";
import useHeaderType from "@hooks/useHeaderType";

const Header = () => {
  const { isFixed } = useHeaderType();
  return (
    <header
      className={`${
        isFixed
          ? "text-white absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-[#191C26] to-transparent"
          : "text-dark bg-white"
      }`}
    >
      <HeaderTop />
      <HeaderMain />
    </header>
  );
};

export default Header;
