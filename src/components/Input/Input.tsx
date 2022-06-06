import { InputProps } from "@config/types";
import React from "react";
import { BsInfoCircle } from "react-icons/bs";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, helperText, ...props }, ref) => {
    return (
      <label className="inline-block w-full">
        {label && <div className="text-[13px] text-dark mb-1.5">{label}</div>}
        <input
          ref={ref}
          type="text"
          className={`bg-[#F6F6F6] px-6 py-5 rounded border-none outline-none w-full ${className}`}
          {...props}
        />
        {helperText && (
          <div className="flex items-center gap-2 mt-2.5 text-dark">
            <BsInfoCircle className="shrink-0 -translate-y-px" size={15} />
            <p className="text-[13px]">{helperText}</p>
          </div>
        )}
      </label>
    );
  },
);

Input.displayName = "Input";
export default Input;
