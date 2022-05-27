import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { HiOutlineUserCircle } from "react-icons/hi";
import { languages } from "@config/constants";

const HeaderTop = () => {
  const [isOpenLanguageDropdown, setIsOpenLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="border-b border-white py-5">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaRegEnvelope size={19} />
          <a href="mailto:example@gmail.com" className="hidden sm:inline-block">
            example@gmail.com
          </a>
        </div>

        <div className="flex gap-2 xs:gap-5 sm:gap-10">
          <div
            onClick={() => setIsOpenLanguageDropdown((prev) => !prev)}
            className="flex items-center gap-2 select-none cursor-pointer relative"
          >
            <BsGlobe size={20} />
            {selectedLanguage}
            <FiChevronDown />
            <div
              className={`absolute z-[100] top-[calc(100%+20px)] border-b-[3px] rounded-b-md border-primary left-0 w-full bg-white text-dark py-1 duration-200
                  ${
                    isOpenLanguageDropdown
                      ? "opacity-100 pointer-events-auto translate-y-0"
                      : "opacity-0 translate-y-3 pointer-events-none"
                  }
                  `}
            >
              {languages.map((language) => (
                <p
                  onClick={() => setSelectedLanguage(language)}
                  key={language}
                  className="px-4 py-1.5 hover:bg-primary hover:text-white duration-150"
                >
                  {language}
                </p>
              ))}
            </div>
          </div>

          <div className="flex items-center divide-x divide-white font-medium">
            <Link href={"/login"}>
              <a className="flex items-center gap-2 mr-1.5 hover:text-primary">
                <HiOutlineUserCircle size={24} className="text-primary" />
                <span className="hidden xs:inline-block">Login</span>
              </a>
            </Link>
            <Link href={"/login"}>
              <a className="pl-1.5 hover:text-primary">Register</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
