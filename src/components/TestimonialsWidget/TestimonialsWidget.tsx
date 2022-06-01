import { clientReviews } from "@config/constants";
import Image from "next/image";
import React from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialsWidget = () => {
  return (
    <div className="rounded-[10px] card_shadow bg-white px-[30px] py-[23px] overflow-hidden">
      <h5 className="title_sm">Testimonials</h5>
      <p className="text_md text-dark mt-1.5">
        4.7 out of 5 based on <span className="font-medium">846 reviews</span>
      </p>
      <p className="title_sm text-[15px] font-bold mt-2.5">Client Says</p>

      <div className="mt-3 flex flex-col-reverse gap-[35px]">
        <div className="flex items-center gap-3.5 w-full justify-center">
          <button className="text-primary" id="client_review_prev_btn">
            <BsArrowLeftCircle size={32} />
          </button>
          <div className="clients_review_pagination_wrapper flex gap-[5px]"></div>
          <button className="text-primary" id="client_review_next_btn">
            <BsArrowRightCircle size={32} />
          </button>
        </div>

        <div className="card_shadow rounded-md">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              el: ".clients_review_pagination_wrapper",
            }}
            navigation={{
              prevEl: "#client_review_prev_btn",
              nextEl: "#client_review_next_btn",
            }}
          >
            {clientReviews.map(
              ({ name, img, rating, reviewText, stars }, i) => (
                <SwiperSlide key={i}>
                  <div className="rounded-md px-[15px] pt-[30px] pb-5">
                    <p className="text_sm text-dark leading-[28px]">
                      {reviewText}
                    </p>
                    <div className="w-[28px] ml-auto -translate-x-5">
                      <Image
                        src="/img/quoto.png"
                        width={544}
                        height={464}
                        alt="Quoto"
                      />
                    </div>

                    <div className="flex items-center mt-5 gap-2.5">
                      <div className="w-[40px] h-[40px] relative rounded overflow-hidden">
                        <Image {...img} alt={img.alt || name} />
                      </div>
                      <div>
                        <h6 className="font-semibold text-dark text-sm">
                          {name}
                        </h6>
                        <div className="flex items-center gap-0.5 text-star -mt-0.5">
                          {[...new Array(rating).keys()].map((star) => (
                            <FaStar key={star} size={12} />
                          ))}
                          <span className="text-dark text-sm ml-1.5 translate-y-0.5">
                            {stars.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-right text-text-gray text-sm mt-5 pr-5">
                      1 Day Ago
                    </p>
                  </div>
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsWidget;
