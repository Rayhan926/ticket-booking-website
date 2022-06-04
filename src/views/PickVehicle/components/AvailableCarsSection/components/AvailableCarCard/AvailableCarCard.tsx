import IconList from "@components/IconList";
import Door from "@components/Icons/Door";
import HandShake from "@components/Icons/HandShake";
import Passengers from "@components/Icons/Passengers";
import Shield from "@components/Icons/Shield";
import Suitcase from "@components/Icons/Suitcase";
import WaitingTime from "@components/Icons/WaitingTime";
import Image from "next/image";
import React, { useState } from "react";
import { ImMinus, ImPlus } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import NoHiddenCost from "@components/Icons/NoHiddenCost";
import { AvailableCarType } from "@config/types";
import { BsChatSquareDots, BsFillInfoCircleFill } from "react-icons/bs";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { RiLuggageDepositLine } from "react-icons/ri";
import {
  IoCarSportOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import Collapsible from "react-collapsible";

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
  popular,
}: AvailableCarType) => {
  const [isOpenMoreInfo, setIsOpenMoreInfo] = useState(false);
  return (
    <div className="card_style pt-[30px] pl-10 pr-[26px] pb-[50px] relative">
      {/* Popular banner --Start-- */}
      {popular && (
        <div className="absolute top-5 left-0 bg-primary text-white text-sm py-1.5 rounded-r px-5">
          Popular
        </div>
      )}
      {/* Popular banner --End-- */}

      <div className="grid grid-cols-1 gap-y-7 xl:grid-cols-[30%,auto,30%]">
        <div className="border-b pb-6 xl:pb-0 xl:border-b-0 xl:border-r border-[#C5C5C5] pr-10">
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

        <div className="border-b pb-6 xl:pb-0 xl:border-b-0 xl:border-r xl:border-[#C5C5C5] xl:pl-[30px] text-sm text-text-gray">
          <h2 className="title_md">{classType}</h2>
          <div className="space-y-3.5">
            <div className="flex items-center mt-4 gap-4">
              {passanger && (
                <IconList icon={<Passengers />} title={passanger} />
              )}
              {suitcase && (
                <IconList
                  icon={<Suitcase size={16} className="text-primary" />}
                  title={`${suitcase} Suitcase`}
                />
              )}
            </div>
            {hasMeetAndGreetIncluded && (
              <IconList icon={<HandShake />} title="Meet And Greet Included" />
            )}
            {hasFreeWaitingTime && (
              <IconList icon={<WaitingTime />} title="Free Waiting Time" />
            )}
            {hasDoorToDoor && <IconList icon={<Door />} title="Door To Door" />}
            {hasSafeJourney && (
              <IconList
                icon={<Shield className="text-primary" size={16} />}
                title="Safe Journey"
              />
            )}

            <div className="!mt-9">
              <button
                className="outline-none flex lg:btems-center gap-2 hover:text-primary duration-150"
                onClick={() => setIsOpenMoreInfo((prev) => !prev)}
              >
                {isOpenMoreInfo ? (
                  <ImMinus className="text-primary translate-y-0.5" />
                ) : (
                  <ImPlus className="text-primary translate-y-0.5" />
                )}
                {isOpenMoreInfo ? "Hide" : "Show"} More Information
              </button>
            </div>
          </div>
        </div>

        <div className="xl:pl-11 xl:pt-6">
          <div className="flex lg:justify-end text-[13px] text-text-gray lg:-mt-6 lg:mb-8">
            Total One Way Price
          </div>
          <h3 className="text-primary text-[52px] font-medium">{price}$</h3>
          <div className="space-y-2.5 mt-2">
            {hasFreeCancelation && (
              <IconList
                icon={<IoMdCloseCircleOutline size={22} />}
                title="Free Cancelation"
                className="text-[#3FDF4B]"
              />
            )}
            {hasNoHiddenCost && (
              <IconList
                icon={<NoHiddenCost />}
                title="No Hidden Cost"
                className="text-primary"
              />
            )}

            <button className="bg-primary text-white rounded px-[30px] py-2 font-medium !mt-9 hover:bg-primary-hover duration-150">
              Select Car
            </button>
          </div>
        </div>
      </div>

      {/* Travel Info Box --Start-- */}
      <Collapsible open={isOpenMoreInfo} trigger="">
        <div className="pt-8">
          <div className="border-[3px] border-primary/20 rounded-lg px-5 py-5">
            <div className="flex items-center gap-2 text-dark-300 border-b border-[#C5C5C5] pb-5 mb-5">
              <BsFillInfoCircleFill size={20} className="text-primary" />
              Travel information
            </div>

            <div className="space-y-1.5 pb-8 mb-6 border-b border-[#C5C5C5]">
              <div className="text-sm text-dark-300 space-x-1">
                <AiOutlinePlusSquare size={16} className="inline" />
                <span className="font-semibold inline">Extras:</span>
                Child restraint devices and other ancillaries available after
                selecting this vehicle.
              </div>
              <div className="text-sm text-dark-300 space-x-1">
                <span className="inline">
                  <RiLuggageDepositLine size={16} className="inline" />
                </span>
                <span className="font-semibold inline">Luggage allowance:</span>
                You can bring 1 medium size suitcase per passenger seat and 1
                small item (laptop, camera bag or small shoulder bag)
              </div>
              <div className="text-sm text-dark-300 space-x-1">
                <span className="inline">
                  <IoCarSportOutline size={16} className="inline" />
                </span>
                <span className="font-semibold inline">
                  Vehicle may differ from image:
                </span>
                This vehicle can be upgraded to one with a higher capacity or
                higher class without surcharge depending on availability.
              </div>
            </div>

            <div className="flex items-center gap-2 text-dark-300 mb-5">
              <BsFillInfoCircleFill size={20} className="text-primary" />
              Need more information?
            </div>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-2 hover:underline font-semibold text-primary text-sm"
              >
                <IoChatbubbleEllipsesOutline size={20} />
                Check out our frequently asked questions.
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:underline font-semibold text-primary text-sm"
              >
                <BsChatSquareDots size={18} />
                Start a chat
              </a>
            </div>
          </div>
        </div>
      </Collapsible>
      {/* Travel Info Box --End-- */}
    </div>
  );
};

export default AvailableCarCard;
