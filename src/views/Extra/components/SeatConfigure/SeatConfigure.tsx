import { SeatConfigureProps } from "@config/types";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const btnStyles =
  "border-none px-2 py-2 disabled:text-dark-500 text-primary outline-none focus:bg-primary/5 shrink-0";

const SeatConfigure = ({
  title,
  icon,
  subtitle,
  isFree,
}: SeatConfigureProps) => {
  const [seat, setSeat] = useState(1);
  const seatAddHandler = () => {
    setSeat((prev) => prev + 1);
  };
  const seatMinusHandler = () => {
    setSeat((prev) => {
      if (prev - 1 < 1) return 1;

      return prev - 1;
    });
  };
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-5 gap-7">
      <div className="flex gap-5">
        <div className="shrink-0">{icon}</div>
        <div>
          <h5 className="title_sm text-xl flex items-center gap-3">
            {title}
            {isFree && (
              <p className="bg-dark text-white text-[13px] leading-[18px] px-2.5 rounded">
                FREE
              </p>
            )}
          </h5>
          <p className="text-sm text-[#c4c4c4] mt-2">{subtitle}</p>
        </div>
      </div>

      <div className="border border-primary rounded-md flex items-center overflow-hidden shrink-0">
        <button
          className={btnStyles}
          onClick={seatMinusHandler}
          disabled={seat === 1}
        >
          <FiMinus size={21} />
        </button>
        <input
          type="text"
          className="border-none bg-transparent outline-none w-[20px] text-center select-none text-primary font-medium mx-2"
          value={seat}
          readOnly
        />
        <button className={btnStyles} onClick={seatAddHandler}>
          <FiPlus size={21} />
        </button>
      </div>
    </div>
  );
};

export default SeatConfigure;
