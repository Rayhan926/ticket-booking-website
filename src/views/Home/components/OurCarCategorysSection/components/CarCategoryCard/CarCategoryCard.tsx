import { IconCardType } from "@config/types";
import Image from "next/image";
import React from "react";

const CarCategoryCard = ({ title, subtitle, img }: IconCardType) => {
  return (
    <div className="pb-12">
      <div
        style={{
          boxShadow: "0 3px 11px rgba(0,0,0,0.05)",
        }}
        className="pt-[35px] px-[30px] pb-[65px] rounded-[10px] text-center bg-dark-700 scale-[0.85] origin-bottom duration-300 car_category_card"
      >
        <Image {...img} />
        <h4 className="title_md">{title}</h4>
        <p className="text_md mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

export default CarCategoryCard;
