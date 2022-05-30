import React from "react";
import ClientReviewCard from "@views/Home/components/ClientTestimonialSection/components/ClientReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { Navigation } from "swiper";
import { clientReviews } from "@config/constants";

const ClientTestimonialSection = () => {
  return (
    <section className="bg-primary pt-[100px] pb-[180px] lg:pt-[150px] lg:pb-[250px] mt-[100px] lg:mt-[200px]">
      <div className="container">
        <h2 className="title_lg text-white">What our client's say</h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4 gap-y-3">
          <p className="text_md text-[#E4E4E5] max-w-[510px]">
            Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
            Ut sit amet erat nec nibh .
          </p>
          <p className="text-lg text-white font-semibold">
            4.7 out of 5 based on 846 reviews
          </p>
        </div>

        <div className="mt-[50px] relative client_review_slider">
          <button className="navigation_prev left-0 2xl:right-[calc(100%+30px)] 2xl:left-auto">
            <HiArrowNarrowLeft size={35} />
          </button>
          <button className="navigation_next right-0 2xl:right-0 2xl:left-[calc(100%+30px)]">
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
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {clientReviews.map((clientReview, i) => (
              <SwiperSlide key={i}>
                <ClientReviewCard {...clientReview} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialSection;
