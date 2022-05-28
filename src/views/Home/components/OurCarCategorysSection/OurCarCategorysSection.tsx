import SectionTitleSubtitle from "@components/SectionTitleSubtitle";
import React from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CarCategoryCard from "@views/Home/components/OurCarCategorysSection/components/CarCategoryCard";

const OurCarCategorysSection = () => {
  return (
    <section className="bg-dark-800 pt-[55px] pb-[65px]">
      <div className="container">
        <SectionTitleSubtitle
          title="Our Car Categorys"
          subtitle="there have our car category which are on service"
        />

        <div className="mt-[50px] relative lg:w-[85%] mx-auto car_categories_slider">
          {/* <button className="navigation_prev right-[calc(100%+30px)]">
            <IoMdArrowRoundBack size={35} />
          </button>
          <button className="navigation_next left-[calc(100%+30px)]">
            <IoMdArrowRoundForward size={35} />
          </button> */}
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Navigation]}
            navigation={{
              prevEl: ".navigation_prev",
              nextEl: ".navigation_next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
                spaceBetween: 10,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 3,
              },
            }}
          >
            {[...new Array(6).keys()].map((e) => (
              <SwiperSlide key={e}>
                <CarCategoryCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurCarCategorysSection;
