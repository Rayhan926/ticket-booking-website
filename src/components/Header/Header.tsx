import React from "react";
import HeaderTop from "@components/Header/components/HeaderTop";
import HeaderMain from "@components/Header/components/HeaderMain";
import { useAppSelector } from "@state/hooks";
import { useRouter } from "next/router";

const Header = () => {
  const { headerType } = useAppSelector((state) => state.application);
  const router = useRouter();
  return (
    <header
      className={`${
        headerType === "fixed" || router.pathname == "/"
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
