import BookingFormLayout from "@layouts/BookingFormLayout";
import HowDoesItWorkSection from "@views/Home/components/HowDoesItWorkSection";
import React from "react";
import AvailableCarsSection from "./components/AvailableCarsSection";
import PickVehicleSidebar from "./components/PickVehicleSidebar";

const PickVehicle = () => {
  return (
    <>
      <BookingFormLayout
        sidebar={<PickVehicleSidebar />}
        title="Available Cars"
      >
        <AvailableCarsSection />
      </BookingFormLayout>
      <HowDoesItWorkSection />
    </>
  );
};

export default PickVehicle;
