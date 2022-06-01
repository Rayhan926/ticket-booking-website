import Image from "next/image";
import React from "react";

const FreeCancelationBanner = () => {
  return (
    <section className="bg-primary text-white py-6">
      <div className="container">
        <div className="flex gap-3">
          <div className="shrink-0 w-10 md:w-auto">
            <Image
              src="/img/free_cancelation_icon.svg"
              width={55}
              height={55}
              alt="Free Cancelation"
            />
          </div>
          <div>
            <h3 className="text-2xl font-medium">Free Cancelation 24/7</h3>
            <p className="text-[15px]">
              Book today, lock the price. You can cancel for free within the 29
              November 2021 and get a full refund of the transfer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeCancelationBanner;
