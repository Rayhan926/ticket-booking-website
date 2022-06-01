import { headerNavLinks } from "@config/constants";
import { useAppSelector } from "@state/hooks";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const HeaderMain = () => {
  const { headerType } = useAppSelector((state) => state.application);
  const headerOffsetTop = useRef<any>(null!);
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  const [isFixedHeader, setIsFixedHeader] = useState(false);

  useEffect(() => {
    const headerMain: HTMLDivElement | null =
      document.querySelector("#headerMain");
    const heroSection: HTMLDivElement | null =
      document.querySelector("#heroSection");

    headerOffsetTop.current = headerMain?.offsetTop;

    const trackHeaderPosition = () => {
      if (!headerMain) return;

      if (window.scrollY >= headerMain?.offsetTop) {
        headerMain.classList.add("fixed_header");
        setIsFixedHeader(true);
      }

      if (window.scrollY < headerOffsetTop.current) {
        headerMain.classList.remove("fixed_header");
        setIsFixedHeader(false);
      }

      if (window.scrollY > 250) {
        headerMain.classList.add("white_header");
      } else {
        headerMain.classList.remove("white_header");
      }
    };

    window.addEventListener("scroll", trackHeaderPosition);

    return () => {
      window.removeEventListener("scroll", trackHeaderPosition);
    };
  }, []);

  useEffect(() => {
    const header_height_container: HTMLDivElement | null =
      document.querySelector(".header_height_container");
    if (!header_height_container) return;

    header_height_container.style.height =
      header_height_container.clientHeight + "px";
  }, []);

  const shouldCloseMobileNav = (e: any) => {
    if (e.target.id === "mobileNavOverley") {
      setIsOpenMobileNav(false);
    }
  };

  return (
    <div className="header_height_container">
      <div id="headerMain" className="duration-200 py-2.5 md:py-0">
        <div className="container flex justify-between items-center">
          <Link href={"/"}>
            <a className="text-[30px] font-extrabold">logo</a>
          </Link>

          <div
            id="mobileNavOverley"
            onClick={shouldCloseMobileNav}
            className={`fixed top-0 left-0 w-full h-screen overflow-hidden bg-black/40 z-[50] md:bg-transparent md:static md:w-auto md:h-auto ${
              isOpenMobileNav
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none delay-100"
            } md:pointer-events-auto md:opacity-100 duration-200 shrink-0`}
          >
            <ul
              style={{
                transitionProperty: "transform",
              }}
              className={`flex flex-col items-start md:flex-row md:items-center text-lg gap-0 md:gap-10 font-medium bg-white border-r-4 border-primary md:bg-transparent w-[320px] h-full md:border-r-0 md:w-auto md:h-auto pt-6 md:pt-0
            ${isOpenMobileNav ? "translate-x-0 delay-100" : "-translate-x-full"}
            md:translate-x-0 duration-200
            `}
            >
              {headerNavLinks.map(({ url, text }, i) => (
                <li key={i}>
                  <Link href={url}>
                    <a
                      className={`
                    hover:text-primary duration-150 py-2.5 md:py-5 block px-6 md:px-0
                    ${
                      headerType === "fixed"
                        ? "text-dark md:text-white"
                        : " text-dark"
                    }
                    `}
                    >
                      {text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`md:hidden duration-300 ${
              isOpenMobileNav
                ? `${
                    !isFixedHeader ? "-translate-y-[55px] translate-x-1" : ""
                  } pointer-events-none z-[9999] text-white`
                : ""
            }`}
            onClick={() => setIsOpenMobileNav(true)}
          >
            {isOpenMobileNav ? <IoClose size={30} /> : <FiMenu size={30} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
