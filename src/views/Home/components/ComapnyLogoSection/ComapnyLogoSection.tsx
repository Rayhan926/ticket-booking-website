import React from "react";

const ComapnyLogoSection = () => {
  return (
    <section className="bg-dark-900 pt-14">
      <div className="container">
        <h2 className="title_md text-dark text-center md:max-w-[690px] mx-auto mb-14">
          Secure, Trusted And Integrated Payment Processing Using Leading
          Platform
        </h2>
      </div>
      <div
        style={{
          boxShadow: "0 8px 19px rgba(0,0,0,0.1)",
        }}
        className="py-10 w-[92%] max-w-[1600px] rounded-[12px] flex items-center justify-center mx-auto min-h-[170px] -mb-[80px] bg-white relative z-[5]"
      >
        <div className="flex flex-wrap px-5 items-center justify-center w-full gap-[50px] lg:gap-[110px]">
          <img src="/img/Visa.svg" alt="Visa" />
          <img src="/img/MasterCard.svg" alt="MasterCard" />
          <img src="/img/Stripe.svg" alt="Stripe" />
          <img src="/img/Paypal.svg" alt="Paypal" />
          <img src="/img/Google_Pay.svg" alt="Google_Pay" />
          <img src="/img/Apple_Pay.svg" alt="Apple_Pay" />
        </div>
      </div>
    </section>
  );
};

export default ComapnyLogoSection;
