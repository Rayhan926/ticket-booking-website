import IconList from "@components/IconList";
import { brand_small_logos, trustsList } from "@config/constants";
import Image from "next/image";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const TrusListsWidget = () => {
  return (
    <div className="card_style text-dark pb-[50px] px-[25px] pr-[20px] pt-[30px]">
      <div className="space-y-5 text-sm">
        {trustsList.map((trust, i) => (
          <IconList
            key={i}
            icon={
              <BsCheckCircleFill
                size={17}
                className="text-primary translate-y-0.5 shrink-0"
              />
            }
            title={trust}
            className="!items-start"
          />
        ))}
      </div>

      <div className="w-[250px] mx-auto mt-7 grid grid-cols-3 gap-1.5">
        {brand_small_logos.map((logo, i) => (
          <Image
            key={i}
            src={`/img/${logo}`}
            width={77}
            height={47}
            alt={logo.split(".")[0].split("_").join(" ").toUpperCase()}
          />
        ))}
      </div>
    </div>
  );
};

export default TrusListsWidget;
