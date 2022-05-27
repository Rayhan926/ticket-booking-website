import React from "react";

const ComapnyLogoSection = () => {
  return (
    <section>
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
        className="max-w-[1600px] rounded-[12px] flex items-center justify-center mx-auto min-h-[170px] -mb-[85px]"
      >
        <div className="flex items-center justify-center w-full gap-[110px] translate-y-4">
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
