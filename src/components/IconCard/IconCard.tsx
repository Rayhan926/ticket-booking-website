import { IconCardType } from "@config/types";
import Image from "next/image";
import React from "react";

const IconCard = ({ img, title, subtitle }: IconCardType) => {
  return (
    <div
      style={{
        boxShadow: "0px 3px 12px rgba(0,0,0,0.07)",
      }}
      className="bg-white flex flex-col items-center gap-5 pt-[30px] pb-[50px] px-[30px] rounded-[7px] text-center"
    >
      <Image {...img} alt={""} />
      <h4 className="title_sm">{title}</h4>
      <h4 className="text_md">{subtitle}</h4>
    </div>
  );
};

export default IconCard;
