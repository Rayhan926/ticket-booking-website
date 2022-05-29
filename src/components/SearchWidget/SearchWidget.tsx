import { PickDateTimeValue } from "@config/types";
import React, { useState } from "react";
import PassengersWidget from "@components/SearchWidget/components/PassengersWidget";
import PickAddressWidget from "@components/SearchWidget/components/PickAddressWidget";
import PickDateWidget from "@components/SearchWidget/components/PickDateTimeWidget";
import { FiSearch } from "react-icons/fi";

const SearchWidget = () => {
  const [pickDateAndTime, setPickDateAndTime] = useState<PickDateTimeValue>({
    date: null,
    time: {
      hour: "13",
      minute: "00",
    },
  });
  const [addReturnDateTime, setAddReturnDateTime] = useState<PickDateTimeValue>(
    {
      date: null,
      time: {
        hour: "13",
        minute: "00",
      },
    },
  );

  console.log({ pickDateAndTime });
  return (
    <section
      style={{
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
      }}
      className="container bg-white rounded-md p-3 -mt-[60px] z-[3] relative"
      // -translate-y-1/2
    >
      <div className="grid grid-cols-1 xl:grid-cols-[300px,300px,360px,auto,auto] gap-2.5">
        <PickAddressWidget onSelect={(value) => console.log({ value })} />
        <PickAddressWidget onSelect={(value) => console.log({ value })} />
        <div className="flex gap-2.5 flex-row justify-between">
          <PickDateWidget
            value={pickDateAndTime}
            setValue={setPickDateAndTime}
            widgetTitle="Pickup Date"
            id="pickDate"
          />
          <PickDateWidget
            value={addReturnDateTime}
            setValue={setAddReturnDateTime}
            isClearable
            isOptional
            widgetTitle="Add a Return"
            id="returnDate"
            pickupTimeTitle="Pickup time return"
          />
        </div>
        <PassengersWidget />
        <button className="h-full rounded-[5px] bg-primary flex items-center justify-center text-white hover:bg-primary-hover duration-150 gap-3 font-medium uppercase text-lg min-h-[96px]">
          <FiSearch size={24} />
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchWidget;
