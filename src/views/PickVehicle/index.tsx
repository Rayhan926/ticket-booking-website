import BookingStepsNavigation from "@components/BookingStepsNavigation";
import FreeCancelationBanner from "@components/FreeCancelationBanner";
import HelpCenterWidget from "@components/HelpCenterWidget";
import MapWidget from "@components/MapWidget";
import NeedHelpWidget from "@components/NeedHelpWidget";
import TestimonialsWidget from "@components/TestimonialsWidget";
import TrusListsWidget from "@components/TrusListsWidget";
import YourRideInfoWidget from "@components/YourRideInfoWidget";
import { useAppSelector } from "@state/hooks";
import HowDoesItWorkSection from "@views/Home/components/HowDoesItWorkSection";
import React from "react";
import AvailableCarsSection from "./components/AvailableCarsSection";

const PickVehicle = () => {
  const { headerHeight } = useAppSelector((state) => state.application);
  return (
    <>
      <FreeCancelationBanner />
      <BookingStepsNavigation />
      <section className="bg-dark-900 relative z-[1]">
        <div className="container">
          <h1 className="title_md text-dark">Available Cars</h1>
          <div className="grid grid-cols-1 md:grid-cols-[auto,285px] lg:grid-cols-[auto,325px] gap-[15px] mt-11">
            <AvailableCarsSection />
            <div>
              <div
                className="space-y-[15px] sticky block z-10"
                style={{ top: headerHeight ? headerHeight + 15 : 0 }}
              >
                <YourRideInfoWidget />
                <TrusListsWidget />
                <MapWidget />
                <HelpCenterWidget />
                <NeedHelpWidget />
                <TestimonialsWidget />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <HowDoesItWorkSection />
      </div>
    </>
  );
};

export default PickVehicle;
