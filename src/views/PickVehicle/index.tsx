import BookingStepsNavigation from "@components/BookingStepsNavigation";
import FreeCancelationBanner from "@components/FreeCancelationBanner";
import HelpCenterWidget from "@components/HelpCenterWidget";
import MapWidget from "@components/MapWidget";
import NeedHelpWidget from "@components/NeedHelpWidget";
import TestimonialsWidget from "@components/TestimonialsWidget";
import TrusListsWidget from "@components/TrusListsWidget";
import YourRideInfoWidget from "@components/YourRideInfoWidget";
import React from "react";
import AvailableCarsSection from "./components/AvailableCarsSection";

const PickVehicle = () => {
  return (
    <>
      <FreeCancelationBanner />
      <BookingStepsNavigation />
      <section className="bg-dark-900">
        <div className="container">
          <h1 className="title_md text-dark">Available Cars</h1>
          <div className="grid grid-cols-[auto,325px] gap-[15px] mt-11">
            <AvailableCarsSection />
            <div className="space-y-[15px] sticky block top-10 z-10">
              <YourRideInfoWidget />
              <TrusListsWidget />
              <MapWidget />
              <HelpCenterWidget />
              <NeedHelpWidget />
              <TestimonialsWidget />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PickVehicle;
