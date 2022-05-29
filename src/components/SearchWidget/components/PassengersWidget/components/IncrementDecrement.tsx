import { IncrementDecrement } from "@config/types";
import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const btnStyles =
  "w-8 h-8 rounded-full flex items-center justify-center bg-primary hover:bg-primary-hover duration-100 text-white cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

const IncrementDecrement = ({
  title,
  subtitle,
  value,
  onChange,
  min = 0,
  max = 50,
}: IncrementDecrement) => {
  const isDisableDecrementBtn = value <= min;
  const isDisableIncrementBtn = value >= max;

  const incrementhandler = () => {
    let updatedValue;
    if (value + 1 >= max) {
      updatedValue = max;
    } else {
      updatedValue = value + 1;
    }
    onChange(updatedValue);
  };
  const decrementhandler = () => {
    let updatedValue;
    if (value - 1 <= min) {
      updatedValue = min;
    } else {
      updatedValue = value - 1;
    }
    onChange(updatedValue);
  };

  return (
    <div className="flex items-center justify-between px-6 py-3.5">
      <div>
        <p className="text-dark-300">{title}</p>
        <p className="text-sm text-dark-300/80">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={decrementhandler}
          className={btnStyles}
          disabled={isDisableDecrementBtn}
        >
          <BiMinus size={18} />
        </button>
        <p className="text-dark-300 font-medium text-lg min-w-[25px] text-center shrink-0 select-none">
          {value}
        </p>

        <button
          onClick={incrementhandler}
          className={btnStyles}
          disabled={isDisableIncrementBtn}
        >
          <BiPlus size={18} />
        </button>
      </div>
    </div>
  );
};

export default IncrementDecrement;
