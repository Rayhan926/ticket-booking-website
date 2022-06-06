import YourBookingInfoWidget from "@components/YourBookingInfoWidget";
import YourRideInfoWidget from "@components/YourRideInfoWidget";
import { yourRideInfo } from "@config/constants";
import React from "react";

const DetailsSidebar = () => {
  return (
    <>
      <YourRideInfoWidget {...yourRideInfo} />
      <YourBookingInfoWidget
        priec="150$"
        category="Vehicle Category"
        hasHiddenCost={false}
      />
    </>
  );
};

export default DetailsSidebar;
