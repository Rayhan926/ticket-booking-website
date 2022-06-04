import HelpCenterWidget from "@components/HelpCenterWidget";
import MapWidget from "@components/MapWidget";
import NeedHelpWidget from "@components/NeedHelpWidget";
import TestimonialsWidget from "@components/TestimonialsWidget";
import TrusListsWidget from "@components/TrusListsWidget";
import YourRideInfoWidget from "@components/YourRideInfoWidget";
import { clientReviews, yourRideInfo } from "@config/constants";
import React from "react";

const PickVehicleSidebar = () => {
  return (
    <>
      <YourRideInfoWidget {...yourRideInfo} />
      <TrusListsWidget />
      <MapWidget />
      <HelpCenterWidget />
      <NeedHelpWidget />
      <TestimonialsWidget clientReviews={clientReviews} />
    </>
  );
};

export default PickVehicleSidebar;
