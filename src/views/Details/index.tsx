import React from "react";
import BookingFormLayout from "@layouts/BookingFormLayout";
import DetailsSidebar from "./components/DetailsSidebar";
import DetailsForm from "./components/DetailsForm";
import BookWithConfidenceSection from "./components/BookWithConfidenceSection";
const Details = () => {
  return (
    <>
      <BookingFormLayout sidebar={<DetailsSidebar />} title="Passenger Details">
        <DetailsForm />
      </BookingFormLayout>
      {/* <BookWithConfidenceSection /> */}
    </>
  );
};

export default Details;
