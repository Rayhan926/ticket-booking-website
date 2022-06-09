import { InputProps } from "@config/types";
import React, { useRef, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignupInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, helperText, ...props }, ref) => {
    const defaultRef = useRef();
    const resolvedRef: any = ref || defaultRef;
    const isTypePassword = props.type === "password";
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleEye = () => {
      const input = resolvedRef.current;
      if (input.type === "password") {
        setIsShowPassword(true);
        input.type = "text";
      } else {
        setIsShowPassword(false);
        input.type = "password";
      }
    };

    return (
      <label className="inline-block w-full">
        {label && (
          <div className="text-[22px] text-[#727272] mb-2.5 capitalize">
            {label}
          </div>
        )}
        <div className="relative">
          <input
            ref={resolvedRef}
            type="text"
            className={`__signup_input ${className} ${
              isTypePassword ? "!pr-[70px]" : ""
            }`}
            {...props}
          />

          {isTypePassword && (
            <button
              type="button"
              className="absolute outline-none border-none top-1/2 -translate-y-1/2 right-5 text-[#727272] p-2"
              onClick={isTypePassword && toggleEye}
            >
              {isShowPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
            </button>
          )}
        </div>
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

SignupInput.displayName = "SignupInput";
export default SignupInput;
