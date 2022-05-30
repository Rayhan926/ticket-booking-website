import React from "react";
import HeroSection from "@views/Home/components/HeroSection";
import RideASafeJourneySection from "@views/Home/components/RideASafeJourneySection";
import HowDoesItWorkSection from "@views/Home/components/HowDoesItWorkSection";
import WeHaveSection from "@views/Home/components/WeHaveSection/WeHaveSection";
import AirportListsSection from "@views/Home/components/AirportListsSection";
import ComapnyLogoSection from "@views/Home/components/ComapnyLogoSection";
import ClientTestimonialSection from "@views/Home/components/ClientTestimonialSection";
import OurCarCategorysSection from "@views/Home/components/OurCarCategorysSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <RideASafeJourneySection />
      <OurCarCategorysSection />
      <HowDoesItWorkSection />
      <WeHaveSection />
      <ClientTestimonialSection />
      <AirportListsSection />
      <ComapnyLogoSection />
    </>
  );
};

export default Home;
