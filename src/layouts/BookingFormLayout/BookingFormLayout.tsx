import BookingStepsNavigation from "@components/BookingStepsNavigation";
import FreeCancelationBanner from "@components/FreeCancelationBanner";
import { BookingFormLayoutProps } from "@config/types";
import { useAppSelector } from "@state/hooks";
import React from "react";

const BookingFormLayout = ({
  children,
  sidebar,
  title,
}: BookingFormLayoutProps) => {
  const { headerHeight } = useAppSelector((state) => state.application);
  return (
    <>
      <FreeCancelationBanner />
      <BookingStepsNavigation />
      <section className="bg-dark-900 relative z-[1] mb-10">
        <div className="container">
          <h1 className="title_md text-dark">{title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-[auto,285px] lg:grid-cols-[auto,325px] gap-[15px] mt-11">
            <div>{children}</div>
            <div>
              <div
                className="space-y-[15px] sticky block z-10"
                style={{ top: headerHeight ? headerHeight + 15 : 0 }}
              >
                {sidebar}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingFormLayout;
