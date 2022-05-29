import React from "react";
import HeroSection from "@views/Home/components/HeroSection";
import RideASafeJourneySection from "@views/Home/components/RideASafeJourneySection";
import HowDoesItWorkSection from "@views/Home/components/HowDoesItWorkSection";
import { WeHaveSection } from "@views/Home/components/WeHaveSection/WeHaveSection";
import AirportListsSection from "@views/Home/components/AirportListsSection";
import ComapnyLogoSection from "@views/Home/components/ComapnyLogoSection";
import ClientTestimonialSection from "@views/Home/components/ClientTestimonialSection";
import OurCarCategorysSection from "@views/Home/components/OurCarCategorysSection";
import Footer from "@components/Footer";
import Header from "@components/Header";
import SearchWidget from "@components/SearchWidget";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <SearchWidget />
      <RideASafeJourneySection />
      <OurCarCategorysSection />
      <HowDoesItWorkSection />
      <WeHaveSection />
      <ClientTestimonialSection />
      <AirportListsSection />
      <ComapnyLogoSection />
      <Footer />
    </>
  );
};

export default Home;
