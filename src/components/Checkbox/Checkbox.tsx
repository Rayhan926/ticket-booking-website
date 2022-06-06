import { CheckboxProps } from "@config/types";
import React from "react";
import { BsCheck } from "react-icons/bs";

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, ...props }, ref) => {
    return (
      <label className="inline-flex items-center gap-2.5 cursor-pointer select-none">
        <div className="shrink-0 relative">
          <input
            {...props}
            type="checkbox"
            ref={ref}
            className="sr-only peer"
          />
          <div className="w-5 h-5 rounded-sm border-2 border-dark peer-checked:border-primary peer-checked:bg-primary"></div>
          <div className="absolute top-0 left-0 w-full h-full justify-center items-center text-white hidden peer-checked:flex pointer-events-none">
            <BsCheck size={20} />
          </div>
        </div>
        {label && <p className="text-[15px] text-dark">{label}</p>}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
