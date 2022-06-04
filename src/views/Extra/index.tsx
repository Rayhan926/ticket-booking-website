import BookingFormLayout from "@layouts/BookingFormLayout";
import React from "react";
import ExtraForm from "./components/ExtraForm";
import ExtraStepSidebar from "./components/ExtraStepSidebar";

const Extra = () => {
  return (
    <BookingFormLayout title="Extra" sidebar={<ExtraStepSidebar />}>
      <ExtraForm />
    </BookingFormLayout>
  );
};

export default Extra;
