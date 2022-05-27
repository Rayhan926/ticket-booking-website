import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const ClientReviewCard = () => {
  return (
    <div className="px-[30px] pt-[65px] pb-[50px] rounded-[13px] bg-white">
      <p className="text_md text-dark">
        Some days a motivational quote can provide a quick pick-me-up for
        employees and even management. They can be a breath of fresh air when it
        comes to a drab afternoon.
      </p>
      <div className="max-w-[45px] ml-auto mr-9 mt-4">
        <Image width={544} height={464} src="/img/quoto.png" alt="Quoto" />
      </div>
      <div className="flex items-center mt-5 gap-2.5">
        <div className="w-[58px] h-[58px] relative rounded overflow-hidden">
          <Image src={"/img/profile.jpg"} layout="fill" alt="Profile" />
        </div>
        <div>
          <h6 className="font-semibold text-dark">Patrick Bell</h6>
          <div className="flex items-center gap-0.5 text-[#FFD013] mt-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className="text-dark text-sm ml-1.5 translate-y-0.5">
              5.0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewCard;
