import React, { useState } from "react";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";
import PrivacyPolicySection from "./components/PrivacyPolicySection";
import TermsAndConditionSection from "./components/TermsAndConditionSection";

const btns = [
  {
    text: "Privacy Policy",
    key: "privacy-policy",
  },
  {
    text: "Terms And Service",
    key: "terms-&-condition",
  },
];

const PrivacPolicy = () => {
  const [activeSection, setActiveSection] = useState("privacy-policy");
  return (
    <div className="bg-dark-900">
      <section className="bg-[#20B0E8] py-[70px] lg:py-[90px]">
        <div className="container flex flex-col gap-y-8 gap-x-5 lg:flex-row justify-start lg:justify-between items-center">
          <div className="text-white">
            <h2 className="font-bold text-5xl lg:text-6xl">Privacy Policy</h2>
            <p className="text-[18px] mt-7 lg:w-[50%]">
              Aenean non accumsan ante. Duis et risus accumsan sem tempus porta
              nec sit amet est. Sed ut euismod quam. Suspendisse potenti.
              Aliquam fringilla orci tincidunt,
            </p>
          </div>
          <div className="space-y-5 w-full md:w-auto">
            <a
              href="#"
              className="flex gap-3 items-center bg-[#6B6B6B] px-5 pl-6 text-white py-3.5 rounded-md"
            >
              <span>
                <FaPhoneAlt />
              </span>
              <span className="text-xl">+0928847955232</span>
            </a>
            <a
              href="#"
              className="flex gap-3 items-center bg-white px-5 pl-6 text-primary py-3.5 rounded-md"
            >
              <span>
                <BsEnvelopeFill size={18} />
              </span>
              <span className="text-xl">example@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
      <section className="mb-[180px] lg:mb-[220px] mt-[70px] lg:mt-[110px]">
        <div className="container grid grid-cols-1 lg:grid-cols-[220px,auto] xl:grid-cols-[280px,auto] gap-[44px]">
          <div className="space-y-1.5 w-full">
            {btns.map((btn) => (
              <button
                key={btn.key}
                onClick={() => setActiveSection(btn.key)}
                className={`${
                  activeSection === btn.key
                    ? "bg-primary text-white"
                    : "text-[#6B6B6B]"
                } flex gap-3 outline-none border-none justify-between items-center px-4 pl-6 w-full py-3.5 font-semibold text-xl`}
              >
                {btn.text}
                {activeSection === btn.key && (
                  <span>
                    <HiOutlineChevronRight />
                  </span>
                )}
              </button>
            ))}
          </div>
          {activeSection === "privacy-policy" ? (
            <PrivacyPolicySection />
          ) : (
            <TermsAndConditionSection />
          )}
        </div>
      </section>
    </div>
  );
};

export default PrivacPolicy;
