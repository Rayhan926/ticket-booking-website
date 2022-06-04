import IconList from "@components/IconList";
import BookingInfo from "@components/Icons/BookingInfo";
import NoHiddenCost from "@components/Icons/NoHiddenCost";
import VehicleCategory from "@components/Icons/VehicleCategory";
import { YourBookingInfoWidgetProps } from "@config/types";
import React from "react";

const YourBookingInfoWidget = ({
  priec,
  category,
  hasHiddenCost,
}: YourBookingInfoWidgetProps) => {
  return (
    <div className="card_style px-[25px] pt-4 pb-5">
      <IconList icon={<BookingInfo />} title="Your Booking Info" />
      <IconList
        icon={<VehicleCategory />}
        title={category}
        subtitle="Economy"
        subtitleClass="text-primary text-[15px] ml-5 mt-1.5"
        titleClass="text-sm"
        className="mt-2"
      />
      <p className="text-dark text-base font-medium mt-3.5">Total Price</p>
      <p className="text-[45px] font-medium text-primary">{priec}</p>
      {!hasHiddenCost && (
        <IconList
          icon={<NoHiddenCost className="!text-[#3FDF4B]" />}
          title="No Hidden Cost"
          className="text-[#3FDF4B]"
        />
      )}
    </div>
  );
};

export default YourBookingInfoWidget;
