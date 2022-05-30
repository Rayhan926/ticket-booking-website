import { weHaveStats } from "@config/constants";
import React from "react";

export const WeHaveSection = () => {
  return (
    <section className="py-[90px] w-full" id="we_have_section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[40%,auto,10%]">
          <span></span>
          <div>
            <h2 className="title_lg">We Have</h2>
            <span className="block h-[5px] bg-dark w-[48px]"></span>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-14 md:mt-[35px] gap-y-14 md:gap-y-16">
              {weHaveStats.map(({ title, value }, i) => (
                <div key={i}>
                  <h5 className="text-5xl font-semibold text-dark">{value}</h5>
                  <p className="text-dark-500 mt-1 font-medium text-lg">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <span></span>
        </div>
      </div>
    </section>
  );
};
