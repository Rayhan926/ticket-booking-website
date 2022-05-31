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
import React from "react";

const YourRideInfoWidget = () => {
  return (
    <div className="rounded-[10px] card_shadow bg-white">
      <div className="px-[25px] pt-4 pb-3 border-b border-[#CBCBCB]">
        <div className="flex items-center gap-2">
          <RideInfo />
          <div className="title_sm text-dark">Your Ride Info</div>
        </div>
      </div>

      <div className="px-[25px] space-y-[18px] pb-6 pt-4 text-sm">
        <IconList
          icon={<OutwardJourney />}
          text="Outward Journey"
          className="text-primary"
        />
        <IconList
          icon={<Airport />}
          text="Antalya Airport (AYT), Antalya, Turkey"
          className="text-dark gap-3"
        />
        <IconList
          icon={<Location />}
          text="Yalova, Yalova Merkez/Yalova, Turkey"
          className="text-dark gap-3"
        />
        <IconList
          icon={<Calender />}
          text="5 Dec,2021"
          className="text-dark gap-3"
        />
        <IconList
          icon={<Clock />}
          text="12.00 (Pm)"
          className="text-dark gap-3"
        />
        <IconList
          icon={<Users />}
          text="2 Person"
          className="text-dark gap-3"
        />
        <IconList
          icon={<Miles />}
          text="122 Km/50 Miles"
          className="text-dark gap-3"
        />
        <IconList
          icon={<Clock2 />}
          text="2 Hours"
          className="text-dark gap-3"
        />
      </div>
    </div>
  );
};

export default YourRideInfoWidget;
