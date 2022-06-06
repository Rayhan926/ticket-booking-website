import { bookWithConfidenceCards } from "@config/constants";
import React from "react";

const BookWithConfidenceSection = () => {
  return (
    <>
      <section className="pt-[75px] pb-[150px] bg-dark-900">
        <div className="container">
          <h3 className="title_md text-center text-dark">
            Book With Confidence
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mt-[54px] max-w-[940px] mx-auto">
            {bookWithConfidenceCards.map(({ icon, description }, i) => (
              <div
                key={i}
                className="px-6 pb-5 pt-[30px] flex flex-col items-center card_style"
              >
                {icon}
                <p className="text-dark text-sm text-center mt-5">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookWithConfidenceSection;
