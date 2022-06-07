import { FaqCardProps } from "@config/types";
import React from "react";
import dynamic from "next/dynamic";
const Collapsible = dynamic(() => import("react-collapsible"), { ssr: false });

const FaqCard = ({
  faq,
  isActiveFaq,
  onChangehandler,
  faqKey,
}: FaqCardProps) => {
  return (
    <div>
      <div
        style={{
          boxShadow: "0 24px 44px rgba(0,0,0,0.08)",
        }}
        className={`border duration-300 ${
          isActiveFaq
            ? "bg-primary border-primary text-white"
            : "border-[#DCDFF1] bg-white text-dark"
        }`}
      >
        <div
          onClick={() => onChangehandler(faqKey)}
          className="flex items-center gap-5 py-5 px-6 text-lg font-bold cursor-pointer select-none"
        >
          <div className="shrink-0">{isActiveFaq ? <Minus /> : <Plus />}</div>
          <p>{faq.title}</p>
        </div>
        <Collapsible transitionTime={300} trigger="" open={isActiveFaq}>
          <div>
            <p className="pr-6 pl-[calc(24px+13px+20px)] pb-8">
              {faq.description}
            </p>
          </div>
        </Collapsible>
      </div>
    </div>
  );
};

export default FaqCard;

const Plus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13.882"
      height="13.99"
      viewBox="0 0 10.882 10.99"
    >
      <path
        id="Icon_open-plus"
        data-name="Icon open-plus"
        d="M4.081,0V4.121H0V6.868H4.081V10.99H6.8V6.868h4.081V4.121H6.8V0Z"
      />
    </svg>
  );
};

const Minus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13.882"
      height="4"
      viewBox="0 0 10.882 2"
    >
      <path
        id="Path_18"
        data-name="Path 18"
        d="M3001.037,5978.15h10.882"
        transform="translate(-3001.037 -5977.15)"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  );
};
