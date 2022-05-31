import { availableCars } from "@config/constants";
import React from "react";
import AvailableCarCard from "./components/AvailableCarCard";

const AvailableCarsSection = () => {
  return (
    <div className="space-y-[15px]">
      {availableCars.map((availableCar, i) => (
        <AvailableCarCard {...availableCar} key={i} />
      ))}
    </div>
  );
};

export default AvailableCarsSection;
