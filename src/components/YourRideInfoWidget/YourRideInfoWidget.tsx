import IconList from "@components/IconList";
import Airport from "@components/Icons/Airport";
import Calender from "@components/Icons/Calender";
import Clock from "@components/Icons/Clock";
import Clock2 from "@components/Icons/Clock2";
import Location from "@components/Icons/Location";
import Miles from "@components/Icons/Miles";
import OutwardJourney from "@components/Icons/OutwardJourney";
import RideInfo from "@components/Icons/RideInfo";
import Users from "@components/Icons/Users";
import { YourRideInfoProps } from "@config/types";
import React from "react";

const YourRideInfoWidget = ({
  fromAddress,
  toAddress,
  date,
  time,
  person,
  speed,
  rideTime,
}: YourRideInfoProps) => {
  return (
    <div className="card_style">
      <div className="px-[25px] pt-4 pb-3 border-b border-[#CBCBCB]">
        <div className="flex items-center gap-2">
          <RideInfo />
          <div className="title_sm text-base text-dark">Your Ride Info</div>
        </div>
      </div>

      <div className="px-[25px] space-y-[18px] pb-6 pt-4 text-sm">
        <IconList
          icon={<OutwardJourney />}
          title="Outward Journey"
          className="text-primary"
        />
        <IconList
          icon={<Airport />}
          title={fromAddress}
          className="text-dark gap-3"
        />
        <IconList
          icon={<Location />}
          title={toAddress}
          className="text-dark gap-3"
        />
        <IconList
          icon={<Calender />}
          title={date}
          className="text-dark gap-3"
        />
        <IconList icon={<Clock />} title={time} className="text-dark gap-3" />
        <IconList icon={<Users />} title={person} className="text-dark gap-3" />
        <IconList icon={<Miles />} title={speed} className="text-dark gap-3" />
        <IconList
          icon={<Clock2 />}
          title={rideTime}
          className="text-dark gap-3"
        />
      </div>
    </div>
  );
};

export default YourRideInfoWidget;
