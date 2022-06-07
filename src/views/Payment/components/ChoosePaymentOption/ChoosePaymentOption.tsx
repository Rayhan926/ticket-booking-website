import RadioButton from "@components/RadioButton";
import React from "react";

const ChoosePaymentOption = () => {
  return (
    <div className="mt-[55px]">
      <h1 className="title_md text-primary">Choose Payment Option</h1>
      <RadioButton name="ll" />
      <RadioButton name="ll" />
    </div>
  );
};

export default ChoosePaymentOption;
