import Checkbox from "@components/Checkbox";
import Input from "@components/Input";
import PhoneNumberInput from "@components/PhoneNumberInput";
import React from "react";
import { MdOutlineHelp } from "react-icons/md";
import { Tooltip } from "react-tippy";

const TooltipComponent = Tooltip as unknown as React.FC<any>;

const DetailsForm = () => {
  return (
    <div className="card_style px-9 pt-[55px] pb-6">
      <Checkbox label="Booking For Someone Else" />

      <div className="mt-[35px] space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Input label="First Name" />
          <Input label="Last Name" />
        </div>
        <Input label="Email Address" type="email" />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <PhoneNumberInput />
        </div>
        <Input
          helperText="Write A Name That You Want To  Sign "
          label={
            <div className="flex items-center gap-2">
              Meet And Greet
              <TooltipComponent
                title="Meet and Greet description"
                position="top"
                trigger="mouseenter"
                arrow
              >
                <div className="text-primary">
                  <MdOutlineHelp size={20} />
                </div>
              </TooltipComponent>
            </div>
          }
          type="email"
        />
      </div>
    </div>
  );
};

export default DetailsForm;
