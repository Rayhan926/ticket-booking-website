import IconList from "@components/IconList";
import NoHiddenCost from "@components/Icons/NoHiddenCost";
import React from "react";

const TotalPrice = () => {
  return (
    <div className="mt-[55px]">
      <h1 className="title_md text-primary">Total Price</h1>
      <div className="card_style mt-5 flex items-center justify-between pl-[25px] gap-5">
        <p className="text-dark">One Way Tranfer</p>
        <div className="py-4 pr-[102px]">
          <div className="flex items-stretch">
            <div className="dasshed_border h-[95px] w-1 mr-[60px]"></div>
            <div>
              <p className="text-dark">Total</p>
              <h5 className="text-[40px] leading-[48px] font-medium text-primary">
                150$
              </h5>
              <IconList
                icon={<NoHiddenCost className="!text-[#3FDF4B]" />}
                title="No Hidden Cost"
                className="text-[#3FDF4B]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
