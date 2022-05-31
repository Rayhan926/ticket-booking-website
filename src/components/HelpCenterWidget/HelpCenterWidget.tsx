import HelpCenter from "@components/Icons/HelpCenter";
import React from "react";

const HelpCenterWidget = () => {
  return (
    <div className="rounded-[10px] card_shadow bg-white px-[30px] py-[23px] overflow-hidden flex items-center gap-5">
      <HelpCenter />
      <div>
        <h5 className="title_sm">Help Center</h5>
        <p className="text_sm text-dark">Frequently Aske Question</p>
      </div>
    </div>
  );
};

export default HelpCenterWidget;
