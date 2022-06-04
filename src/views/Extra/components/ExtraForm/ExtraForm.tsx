import BosterSeat from "@components/Icons/BosterSeat";
import ChildSeat from "@components/Icons/ChildSeat";
import FlightNumber from "@components/Icons/FlightNumber";
import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import SeatConfigure from "../SeatConfigure";

const ExtraForm = () => {
  return (
    <>
      <div className="space-y-[15px]">
        {/* Flight Number --Start-- */}
        <div className="card_style px-[35px] py-5">
          <h5 className="title_sm text-xl">Flight Number</h5>
          <div>
            <div className="relative">
              <div className="absolute top-1/2 -translate-y-1/2 left-6">
                <FlightNumber />
              </div>
              <input
                type="text"
                className="bg-input-bg text-[17px] py-5 px-10 text-dark border-none outline-none rounded-[5px] w-full placeholder:text-[#DCDCDC] pl-16 mt-2.5"
                placeholder="Example : Lh0987h"
              />
            </div>
            <p className="text-[#c4c4c4] text-sm mt-4">
              Please Provide A Flight Number (The Driver Will Monitor Your
              Flight)
            </p>
          </div>
        </div>
        {/* Flight Number --End-- */}

        {/* Configure Seat --Start-- */}
        <div className="card_style py-5 lg:pt-[35px] px-[35px] lg:px-[50px] pb-6">
          <div className="divide-y divide-[#ECECEC]">
            <SeatConfigure
              title="Child Seat"
              subtitle="Suitable For Toddlers Weighing 0-18 Kg (Approx 0 To 4 Years)."
              isFree
              icon={<ChildSeat />}
            />
            <SeatConfigure
              title="Boster Seat"
              subtitle="Suitable For Children Weighing 15-36 Kg (Approx 4 To 10 Years)."
              isFree
              icon={<BosterSeat />}
            />
          </div>

          <div className="flex items-center text-dark text-[13px] gap-2 mt-4">
            <BsInfoCircle size={14} className="shrink-0" />
            Please Write Into The "Notes For The Chauffeur" The Age And Weight
            Of Your Child/S In Order To Provide An Appropriate Device.
          </div>
        </div>
        {/* Configure Seat --End-- */}

        {/* Note For Travel --Start-- */}
        <div className="card_style px-[35px] py-5">
          <h5 className="title_sm text-xl">Note For Travel</h5>
          <p className="text-dark text-[13px] mt-2">
            <span className="font-semibold">From:</span> Antalya Airport (AYT),
            Antalya, Turkey <span className="font-semibold">To:</span> Yalova,
            Yalova Merkez/Yalova, Turkey
          </p>
          <textarea
            rows={3}
            className="bg-input-bg text-[17px] py-5 px-8 text-dark border-none outline-none rounded-[5px] w-full placeholder:text-[#DCDCDC] mt-3.5 resize-none"
            placeholder="Right Here If You Have Any Spacial Request To Us We Will Try Make It Done For You "
          ></textarea>

          <div className="flex justify-end gap-2 mt-5">
            <button className="border border-dark-500 px-6 py-1.5 rounded text-dark-300 hover:bg-dark-500/5">
              Skip
            </button>
            <button className="border border-primary bg-primary px-5 py-1.5 rounded text-white hover:bg-primary-hover">
              Continue
            </button>
          </div>
        </div>
        {/* Note For Travel --End-- */}
      </div>
    </>
  );
};

export default ExtraForm;
