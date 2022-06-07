import Checkbox from "@components/Checkbox";
import RadioButton from "@components/RadioButton";
import { paymentOptions } from "@config/constants";
import Image from "next/image";
import React from "react";

const ChoosePaymentOption = () => {
  return (
    <div className="mt-[55px]">
      <h1 className="title_md text-primary">Choose Payment Option</h1>
      <div className="card_style px-5 md:px-7 pt-9 pb-[48px] mt-5">
        <div className="flex flex-wrap gap-y-7 gap-5">
          {paymentOptions.map(({ img }, i) => (
            <label key={i} className="flex items-center gap-4 cursor-pointer">
              <RadioButton name={"payment-option"} />
              <div
                style={{
                  boxShadow: "0 1px 6px rgba(0,0,0,0.16)",
                }}
                className="w-[90px] h-[50px] md:w-[104px] md:h-[59px] flex items-center justify-center rounded-[5px]"
              >
                <Image {...img} />
              </div>
            </label>
          ))}
        </div>

        <div className="mt-10 lg:mt-[50px]">
          <Checkbox
            label={
              <span>
                I Accept The{" "}
                <a href="#" className="__link">
                  Terms And Service
                </a>{" "}
                -{" "}
                <a href="#" className="__link">
                  Booking Condotion
                </a>{" "}
                And{" "}
                <a href="#" className="__link">
                  Privecy Policy
                </a>
              </span>
            }
          />
        </div>

        <div className="mt-10">
          <button className="border border-primary bg-primary px-8 sm:px-16 lg:px-28 py-3 rounded text-white hover:bg-primary-hover">
            Payment Process
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoosePaymentOption;
