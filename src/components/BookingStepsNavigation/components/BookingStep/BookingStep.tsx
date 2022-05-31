import { BookingStep } from "@config/types";
import { useRouter } from "next/router";
import React from "react";

type BookingStepProps = {
  isLastStep: boolean;
} & BookingStep;

const BookingStep = ({ title, pageUrl, isLastStep }: BookingStepProps) => {
  const router = useRouter();
  const isActiveStep = router.pathname === pageUrl;

  return (
    <>
      {!isLastStep ? (
        <div className="flex items-center w-full">
          <StepCircle title={title} isActive={isActiveStep} />
          <div className="w-full h-0.5 bg-dark-400"></div>
        </div>
      ) : (
        <StepCircle title={title} isActive={isActiveStep} />
      )}
    </>
  );
};

export default BookingStep;

type StepCircleProps = {
  title: string;
  isActive: boolean;
};
const StepCircle = ({ title, isActive }: StepCircleProps) => {
  return (
    <div className="w-[100px] h-[100px] shrink-0 p-1 rounded-full bg-dark-900 flex items-center justify-center">
      <div
        className={`w-full h-full text-[15px] rounded-full border flex items-center justify-center
          ${
            isActive
              ? "border-primary text-white bg-primary"
              : "border-[#A5A5A5] text-dark"
          }
          `}
      >
        {title}
      </div>
    </div>
  );
};
