import BookingStepsNavigation from "@components/BookingStepsNavigation";
import FreeCancelationBanner from "@components/FreeCancelationBanner";
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
            <div>Sidebar</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PickVehicle;
