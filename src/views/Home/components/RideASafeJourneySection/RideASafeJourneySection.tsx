import IconCard from "@components/IconCard";
import SectionTitleSubtitle from "@components/SectionTitleSubtitle";
import { safeJourneyCards } from "@config/constants";
import React from "react";

const RideASafeJourneySection = () => {
  return (
    <section
      className="bg-dark-900 py-[100px] lg:py-[138px]"
      id="ride-a-safe-journey"
    >
      <div className="container">
        <SectionTitleSubtitle
          title="Ride A Safe Journey"
          subtitle="Our car booking company is very proffestional and secure agency"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px] mt-[85px]">
          {safeJourneyCards.map((safeJourneyCard, i) => (
            <IconCard {...safeJourneyCard} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RideASafeJourneySection;
