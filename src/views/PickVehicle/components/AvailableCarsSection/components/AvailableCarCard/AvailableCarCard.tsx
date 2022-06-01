import IconList from "@components/IconList";
import Door from "@components/Icons/Door";
import HandShake from "@components/Icons/HandShake";
import Passengers from "@components/Icons/Passengers";
import Shield from "@components/Icons/Shield";
import Suitcase from "@components/Icons/Suitcase";
import WaitingTime from "@components/Icons/WaitingTime";
import Image from "next/image";
import React from "react";
import { ImPlus } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import NoHiddenCost from "@components/Icons/NoHiddenCost";
import { AvailableCarType } from "@config/types";

const AvailableCarCard = ({
  img,
  description,
  hasPrivateTransfer,
  rating,
  hasPorterSercvice,
  classType,
  passanger,
  suitcase,
  hasMeetAndGreetIncluded,
  hasFreeWaitingTime,
  hasDoorToDoor,
  hasSafeJourney,
  price,
  hasFreeCancelation,
  hasNoHiddenCost,
}: AvailableCarType) => {
  return (
    <div className="card_shadow pt-[30px] pl-10 pr-[26px] pb-[50px] rounded-[10px] bg-white">
      <div className="flex justify-end text-[13px] text-text-gray">
        Total One Way Price
      </div>
      <div className="grid grid-cols-1 gap-y-7 xl:grid-cols-[30%,auto,30%]">
        <div className="border-none lg:border-r border-[#C5C5C5] pr-10">
          <Image {...img} />
          <p className="text-sm text-[#C2C1C1] leading-[24px]">{description}</p>
          {hasPrivateTransfer && (
            <div className="flex items-center gap-2.5 text-dark mt-3">
              <Shield className="text-dark" size={18} />
              Private Tranfer
            </div>
          )}

          <div className="text-dark flex items-center gap-3 mt-2">
            {rating.toFixed(1)}
            <div className="flex items-center gap-1.5 text-star">
              {[...new Array(rating).keys()].map((star) => (
                <FaStar size={18} key={star} />
              ))}
            </div>
          </div>
          {hasPorterSercvice && (
            <div className="mt-2 flex items-center gap-3 text-[13px] text-text-gray">
              <Suitcase />
              Porter Sercvice
            </div>
          )}
        </div>

        <div className="border-none lg:border-r border-[#C5C5C5] xl:pl-[30px] text-sm text-text-gray">
          <h2 className="title_md">{classType}</h2>
          <div className="space-y-3.5">
            <div className="flex items-center mt-4 gap-4">
              {passanger && <IconList icon={<Passengers />} text={passanger} />}
              {suitcase && (
                <IconList
                  icon={<Suitcase size={16} className="text-primary" />}
                  text={`${suitcase} Suitcase`}
                />
              )}
            </div>
            {hasMeetAndGreetIncluded && (
              <IconList icon={<HandShake />} text="Meet And Greet Included" />
            )}
            {hasFreeWaitingTime && (
              <IconList icon={<WaitingTime />} text="Free Waiting Time" />
            )}
            {hasDoorToDoor && <IconList icon={<Door />} text="Door To Door" />}
            {hasSafeJourney && (
              <IconList
                icon={<Shield className="text-primary" size={16} />}
                text="Safe Journey"
              />
            )}

            <div className="!mt-9">
              <button className="border-none outline-none flex items-center gap-2 hover:text-primary duration-150">
                <ImPlus className="text-primary" />
                Show More Information
              </button>
            </div>
          </div>
        </div>

        <div className="xl:pl-11 xl:pt-6">
          <h3 className="text-primary text-[52px] font-medium">{price}$</h3>
          <div className="space-y-2.5 mt-2">
            {hasFreeCancelation && (
              <IconList
                icon={<IoMdCloseCircleOutline size={22} />}
                text="Free Cancelation"
                className="text-[#3FDF4B]"
              />
            )}
            {hasNoHiddenCost && (
              <IconList
                icon={<NoHiddenCost />}
                text="No Hidden Cost"
                className="text-primary"
              />
            )}

            <button className="bg-primary text-white rounded px-[30px] py-2 font-medium !mt-9 hover:bg-primary-hover duration-150">
              Select Car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCarCard;
