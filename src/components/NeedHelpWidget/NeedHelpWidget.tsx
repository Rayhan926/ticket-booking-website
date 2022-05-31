import NeedHelp from "@components/Icons/NeedHelp";
import React from "react";

const NeedHelpWidget = () => {
  return (
    <div className="rounded-[10px] card_shadow bg-white px-[30px] py-[23px] overflow-hidden flex items-center gap-5">
      <NeedHelp />
      <div>
        <h5 className="title_sm">Need Help</h5>
        <p className="text_sm text-dark">Frequently Aske Question</p>
      </div>
    </div>
  );
};

export default NeedHelpWidget;
