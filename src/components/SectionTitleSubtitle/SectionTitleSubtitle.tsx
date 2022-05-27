import { SectionTitleSubtitle } from "@config/types";
import React from "react";

const SectionTitleSubtitle = ({ title, subtitle }: SectionTitleSubtitle) => {
  return (
    <div className="text-center">
      <h2 className="title_lg mb-2.5">{title}</h2>
      <p className="text_lg sm:max-w-[80%] md:max-w-[500px] mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitleSubtitle;
