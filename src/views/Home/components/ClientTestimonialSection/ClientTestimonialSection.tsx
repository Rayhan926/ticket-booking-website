import React from "react";
import ClientReviewCard from "@views/Home/components/ClientTestimonialSection/components/ClientReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { Navigation } from "swiper";

const ClientTestimonialSection = () => {
  return (
    <section className="bg-primary pt-[150px] pb-[250px] mt-[200px]">
      <div className="container">
        <h2 className="title_lg text-white">What our client's say</h2>
        <div className="flex items-center justify-between mt-4">
          <p className="text_md text-[#E4E4E5] max-w-[510px]">
            Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
            Ut sit amet erat nec nibh .
          </p>
          <p className="text-lg text-white font-semibold">
            4.7 out of 5 based on 846 reviews
          </p>
        </div>

        <div className="mt-[50px] relative client_review_slider">
          <button className="navigation_prev right-[calc(100%+30px)]">
            <HiArrowNarrowLeft size={35} />
          </button>
          <button className="navigation_next left-[calc(100%+30px)]">
            <HiArrowNarrowRight size={35} />
          </button>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Navigation]}
            navigation={{
              prevEl: ".navigation_prev",
              nextEl: ".navigation_next",
            }}
          >
            {[...new Array(6).keys()].map((e) => (
              <SwiperSlide key={e}>
                <ClientReviewCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialSection;
