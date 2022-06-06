import React, { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState<any>("");
  console.log({ phone });
  return (
    <div className="phone_number_input_wrapper">
      <p className="text-[13px] text-dark mb-1.5">Phone Number</p>
      <PhoneInput
        country={"us"}
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
      <div className="flex items-center gap-2 mt-2.5 text-dark">
        <BsInfoCircle className="shrink-0 -translate-y-px" size={15} />
        <p className="text-[13px]">
          We Will Contact You Trough This Phone Number
        </p>
      </div>
    </div>
  );
};

export default PhoneNumberInput;
