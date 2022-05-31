import Image from "next/image";
import React from "react";
import SearchWidget from "@components/SearchWidget";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen relative overflow-hidden bg-dark-900"
      id="heroSection"
    >
      <img
        src="/img/hero_image.jpg"
        className="w-full h-full object-cover absolute top-0 left-0"
        alt="Reliable Airport Transfers"
      />

      <div className="w-full flex flex-col items-center px-5 relative z-[1] pt-[230px] lg:pt-[280px] pb-[100px]">
        <p className="text-2xl lg:text-[40px] mb-3 lg:mb-5 text-center text-white">
          We Are Here To Give You A
        </p>
        <h1 className="text-[45px] leading-[55px] md:text-[60px] md:leading-[70px] xl:text-[80px] xl:leading-[80px] font-bold text-center text-white">
          Reliable <span className="text-primary">Airport Transfers</span>
        </h1>
        <p className="px-5 md:max-w-[700px] lg:max-w-[900px] mx-auto mt-5 lg:mt-7 text-center text-white">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed,
          accumsan scelerisque dui. Morbi purus mauris, vulputate quis felis
          nec, fermentum aliquam orci. Quisque ornare iaculis placerat. Class
          aptent
        </p>
        <SearchWidget />
        <a
          href="#ride-a-safe-journey"
          className="flex flex-col items-center gap-2.5 mt-[60px] lg:mt-[95px] cursor-pointer"
        >
          <Image
            src={"/img/scroll_down_icon.svg"}
            width={62}
            height={62}
            alt="Scroll Down"
          />
          <p className="text-[13px] text-white text-center">scroll down</p>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
