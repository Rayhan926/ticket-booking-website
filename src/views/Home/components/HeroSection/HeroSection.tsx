import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative" id="heroSection">
      <img
        src="/img/hero_image.jpg"
        className="w-full h-auto"
        alt="Reliable Airport Transfers"
      />

      <div className="absolute top-[280px] w-full flex flex-col items-center text-center text-white">
        <p className="text-[40px]">We Are Here To Give You A</p>
        <h1 className="text-[80px] font-bold">
          Reliable <span className="text-primary">Airport Transfers</span>
        </h1>
        <p className="lg:max-w-[900px] mx-auto mt-3">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed,
          accumsan scelerisque dui. Morbi purus mauris, vulputate quis felis
          nec, fermentum aliquam orci. Quisque ornare iaculis placerat. Class
          aptent
        </p>
        <div className="flex flex-col items-center gap-2.5 mt-[95px] cursor-pointer">
          <Image
            src={"/img/scroll_down_icon.svg"}
            width={62}
            height={62}
            alt="Scroll Down"
          />
          <p className="text-[13px]">scroll down</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
