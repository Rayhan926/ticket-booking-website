import { PickDateTimeValue } from "@config/types";
import React, { useState } from "react";
import PickAddressWidget from "./components/PickAddressWidget";
import PickDateWidget from "./components/PickDateTimeWidget";

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
      className="container bg-white rounded-md p-3"
      // -translate-y-1/2
    >
      <div className="grid grid-cols-[300px,300px,180px,180px,auto,auto] gap-2.5">
        <PickAddressWidget onSelect={(value) => console.log({ value })} />
        <PickAddressWidget onSelect={(value) => console.log({ value })} />
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
    </section>
  );
};

export default SearchWidget;
