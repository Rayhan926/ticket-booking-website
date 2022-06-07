import BookingFormLayout from "@layouts/BookingFormLayout";
import DetailsSidebar from "@views/Details/components/DetailsSidebar";
import React from "react";
import PaymentForm from "./components/PaymentForm";

const Payment = () => {
  return (
    <BookingFormLayout
      sidebar={<DetailsSidebar />}
      sectionClass="pb-[100px] lg:pb-[250px]"
    >
      <PaymentForm />
    </BookingFormLayout>
  );
};

export default Payment;
