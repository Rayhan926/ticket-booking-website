import { ClientReviewType } from "@config/types";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const ClientReviewCard = ({
  name,
  img,
  rating,
  reviewText,
  stars,
}: ClientReviewType) => {
  return (
    <div className="px-[30px] pt-[65px] pb-[50px] rounded-[13px] bg-white">
      <p className="text_md text-dark">{reviewText}</p>
      <div className="max-w-[45px] ml-auto mr-9 mt-4">
        <Image width={544} height={464} src="/img/quoto.png" alt="Quoto" />
      </div>
      <div className="flex items-center mt-5 gap-2.5">
        <div className="w-[58px] h-[58px] relative rounded overflow-hidden">
          <Image {...img} />
        </div>
        <div>
          <h6 className="font-semibold text-dark">{name}</h6>
          <div className="flex items-center gap-0.5 text-star mt-1">
            {[...new Array(stars).keys()].map((star) => (
              <FaStar key={star} />
            ))}
            <span className="text-dark text-sm ml-1.5 translate-y-0.5">
              {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewCard;
