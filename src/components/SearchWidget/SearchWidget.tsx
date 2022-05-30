import { PickDateTimeValue } from "@config/types";
import React, { useState } from "react";
import PassengersWidget from "@components/SearchWidget/components/PassengersWidget";
import PickAddressWidget from "@components/SearchWidget/components/PickAddressWidget";
import PickDateTimeWidget from "@components/SearchWidget/components/PickDateTimeWidget";
import { FiSearch } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@state/hooks";
import { setPickDateTime, setReturnDateTime } from "@state/search/searchSlice";

const SearchWidget = () => {
  // const [pickDateAndTime, setPickDateAndTime] = useState<PickDateTimeValue>({
  //   date: null,
  //   time: {
  //     hour: "13",
  //     minute: "00",
  //   },
  // });
  // const [addReturnDateTime, setAddReturnDateTime] = useState<PickDateTimeValue>(
  //   {
  //     date: null,
  //     time: {
  //       hour: "13",
  //       minute: "00",
  //     },
  //   },
  // );

  const dispatch = useAppDispatch();
  const { pickDateTime, returnDateTime } = useAppSelector(
    (state) => state.search,
  );

  return (
    <section
      className="z-[3] relative mt-10 lg:mt-16 w-full"
      // -translate-y-1/2
    >
      <div className="container px-1 lg:px-5">
        <div
          className="bg-white rounded-md p-3 "
          style={{
            boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
          }}
        >
          <div className="grid grid-cols-1 xl:grid-cols-[300px,300px,360px,auto,auto] gap-2.5">
            <PickAddressWidget onSelect={(value) => console.log({ value })} />
            <PickAddressWidget onSelect={(value) => console.log({ value })} />
            <div className="flex gap-2.5 flex-row justify-between">
              <PickDateTimeWidget
                value={pickDateTime}
                setValue={(val) => dispatch(setPickDateTime(val))}
                widgetTitle="Pickup Date"
                id="pickDate"
              />
              <PickDateTimeWidget
                value={returnDateTime}
                setValue={(val) => dispatch(setReturnDateTime(val))}
                isClearable
                isOptional
                widgetTitle="Add a Return"
                id="returnDate"
                pickupTimeTitle="Pickup time return"
                minDate={pickDateTime.date || new Date()}
                minHour={pickDateTime.time.hour}
                minMinute={pickDateTime.time.minute}
              />
            </div>
            <PassengersWidget />
            <button className="h-full rounded-[5px] bg-primary flex items-center justify-center text-white hover:bg-primary-hover duration-150 gap-3 font-medium uppercase text-lg min-h-[96px]">
              <FiSearch size={24} />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchWidget;
