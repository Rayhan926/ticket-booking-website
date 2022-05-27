import IconCard from "@components/IconCard";
import SectionTitleSubtitle from "@components/SectionTitleSubtitle";
import { howDoesItWorkCards } from "@config/constants";
import Image from "next/image";
import React, { useState } from "react";

const HowDoesItWorkSection = () => {
  return (
    <section className="bg-dark-900 py-[138px]">
      <div className="container">
        <SectionTitleSubtitle
          title="How Does It Work"
          subtitle="Lets Know How To Book A Car From Our Website"
        />
        <div className="grid grid-cols-4 gap-[30px] mt-[85px]">
          {howDoesItWorkCards.map((howDoesItWorkCard, i) => (
            <IconCard {...howDoesItWorkCard} key={i} />
          ))}

          <div className="flex flex-col items-center justify-center bg-primary text-center rounded-[7px] text-white">
            <Image
              src={"/img/white_check.svg"}
              alt="Done"
              width={113}
              height={113}
            />
            <p className="mt-5 text-lg font-medium">Done For Ride</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowDoesItWorkSection;
