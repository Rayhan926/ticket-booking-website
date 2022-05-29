import Button from "@components/Button";
import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import IncrementDecrement from "./components/IncrementDecrement";

const PassengersWidget = () => {
  const [passangers, setPassangers] = useState({
    adults: 2,
    children: 0,
    infantsCount: 0,
  });
  const [isOpen, setIsOpen] = useState(false);

  const totalSum = Object.values(passangers).reduce((a, b) => {
    return a + b;
  });

  const onChangeHandler = (value: number, key: string) => {
    setPassangers((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <div className="relative">
      <div
        className="px-5 py-4 bg-dark-400 rounded-[5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-2 text-dark-300">
          <img src="/img/passengers.svg" alt="passengers" />
          <p className="md:hidden">Passengers</p>
        </div>
        <p className="text-dark-300 mt-3.5 text-lg font-medium">{totalSum}</p>
      </div>
      <div
        className={`absolute top-[calc(100%+10px)] right-0 min-w-[280px] bg-white shadow rounded duration-150 ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-5"
        }`}
      >
        <IncrementDecrement
          title="Adults"
          subtitle="+12 years"
          value={passangers.adults}
          onChange={(e) => onChangeHandler(e, "adults")}
          min={1}
        />
        <IncrementDecrement
          title="Children"
          subtitle="2-12 years"
          value={passangers.children}
          onChange={(e) => onChangeHandler(e, "children")}
        />
        <IncrementDecrement
          title="Infants"
          subtitle="0-2 years"
          value={passangers.infantsCount}
          onChange={(e) => onChangeHandler(e, "infantsCount")}
        />

        <div className="px-3 mt-3 pb-3">
          <Button onClick={() => setIsOpen(false)}>Confirm</Button>
        </div>
      </div>
    </div>
  );
};

export default PassengersWidget;
