import { RadioButtonProps } from "@config/types";
import React from "react";

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  (props, ref) => {
    return (
      <label>
        <div className="relative inline-block">
          <input ref={ref} {...props} type="radio" className="peer sr-only" />
          <div className="w-[19px] h-[19px] border-[3px] border-primary rounded-full cursor-pointer"></div>
          <div className="w-full h-full scale-[0.5] pointer-events-none rounded-full bg-primary absolute top-0 left-0 hidden peer-checked:block"></div>
        </div>
      </label>
    );
  },
);

export default RadioButton;
