import { headerNavLinks } from "@config/constants";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const HeaderMain = () => {
  const headerOffsetTop = useRef<any>(null!);
  useEffect(() => {
    const headerMain: HTMLDivElement | null =
      document.querySelector("#headerMain");
    const heroSection: HTMLDivElement | null =
      document.querySelector("#heroSection");

    headerOffsetTop.current = headerMain?.offsetTop;

    const trackHeaderPosition = () => {
      if (!headerMain || !heroSection) return;

      if (window.scrollY >= headerMain?.offsetTop) {
        headerMain.classList.add("fixed_header");
      }

      if (window.scrollY < headerOffsetTop.current) {
        headerMain.classList.remove("fixed_header");
      }

      if (window.scrollY > heroSection.clientHeight - headerMain.clientHeight) {
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

  return (
    <div id="headerMain" className="duration-200">
      <div className="container flex justify-between items-center">
        <Link href={"/"}>
          <a className="text-[30px] font-extrabold">logo</a>
        </Link>

        <div>
          <ul className="flex items-center text-lg gap-10 font-medium">
            {headerNavLinks.map(({ url, text }, i) => (
              <li key={i}>
                <Link href={url}>
                  <a className="hover:text-primary duration-150 py-5 block">
                    {text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
