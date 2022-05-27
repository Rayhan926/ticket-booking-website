import { airplaneListsCards } from "@config/constants";
import React from "react";

const AirportListsSection = () => {
  return (
    <section className="py-[170px] bg-dark-900">
      <div className="container">
        <h2 className="text-center title_lg lg:max-w-[850px] mx-auto">
          Book A Private Transfer At Over 1500 Airports, Stations And Ports
          Worldwide
        </h2>

        <div className="mt-[70px] grid grid-cols-1 xl:grid-cols-3 gap-[60px]">
          {airplaneListsCards.map(({ boxBg, lists }, i) => (
            <div
              key={i}
              style={{
                background: boxBg,
                boxShadow: "10px 15px 20px rgba(0,0,0,0.1)",
              }}
              className="text-white py-7 px-8 rounded-lg text-lg space-y-0.5 font-medium"
            >
              {lists.map((list, index) => (
                <p key={index}>{list}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirportListsSection;
