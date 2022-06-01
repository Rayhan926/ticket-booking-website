import { BookingStep } from "@config/types";
import { useRouter } from "next/router";
import React from "react";

type BookingStepProps = {
  isLastStep: boolean;
  stepNumber?: number;
} & BookingStep;

const BookingStep = ({
  title,
  pageUrl,
  isLastStep,
  stepNumber,
}: BookingStepProps) => {
  const router = useRouter();
  const isActiveStep = router.pathname === pageUrl;

  return (
    <>
      {!isLastStep ? (
        <div className="flex items-center w-full">
          <StepCircle
            title={title}
            isActive={isActiveStep}
            stepNumber={stepNumber}
          />
          <div
            className={`w-full ${
              isActiveStep ? "h-1 bg-primary" : "h-0.5 bg-dark-400"
            }`}
          ></div>
        </div>
      ) : (
        <StepCircle
          title={title}
          isActive={isActiveStep}
          stepNumber={stepNumber}
        />
      )}
    </>
  );
};

export default BookingStep;

type StepCircleProps = {
  title: string;
  isActive: boolean;
  stepNumber?: number;
};
const StepCircle = ({ title, isActive, stepNumber }: StepCircleProps) => {
  return (
    <div className="w-[50px] h-[50px] md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] shrink-0 p-1 rounded-full bg-dark-900 flex items-center justify-center">
      <div
        className={`w-full h-full md:text-[13px] lg:text-[15px] rounded-full border flex items-center justify-center
          ${
            isActive
              ? "border-primary text-white bg-primary"
              : "border-[#A5A5A5] text-dark"
          }
          `}
      >
        <span className="md:hidden">{stepNumber}</span>
        <span className="hidden md:inline-block">{title}</span>
      </div>
    </div>
  );
};
