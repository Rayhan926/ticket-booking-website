import React from "react";
import BookingStep from "@components/BookingStepsNavigation/components/BookingStep";
import { bookingSteps } from "@config/constants";

const BookingStepsNavigation = () => {
  return (
    <div className="pt-[60px] pb-[55px] bg-dark-900">
      <div className="w-[924px] mx-auto flex items-center justify-between">
        {bookingSteps.map((bookingStep, i) => (
          <BookingStep
            {...bookingStep}
            isLastStep={i + 1 === bookingSteps.length}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default BookingStepsNavigation;
