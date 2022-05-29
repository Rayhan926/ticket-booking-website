import React, { useState } from "react";
import PickDateTimeModal from "@components/SearchWidget/components/PickDateTimeModal";
import { FiCalendar } from "react-icons/fi";
import { BsClock } from "react-icons/bs";
import { PickDateTimeWidgetProps } from "@config/types";
import { format } from "date-fns";
import { IoClose } from "react-icons/io5";

const PickDateTimeWidget = ({
  value,
  setValue,
  isClearable,
  isOptional,
  widgetTitle,
  pickupTimeTitle,
  id,
}: PickDateTimeWidgetProps) => {
  const hour = value.time.hour;
  const minute = value.time.minute;
  const date = value.date;
  const isEverythingNull = date === null || (hour === null && minute === null);

  const clearValue = () => {
    if (!isClearable) return;
    setValue({
      date: null,
      time: {
        minute: null,
        hour: null,
      },
    });
  };

  return (
    <>
      <div className="relative">
        {!isEverythingNull && isClearable && (
          <div
            onClick={clearValue}
            className="absolute top-1 right-1 w-6 h-6 rounded-full bg-primary hover:bg-primary-hover duration-150 -translate-y-1/2 translate-x-1/2 flex items-center justify-center text-white cursor-pointer"
          >
            <IoClose size={16} className="-translate-y-[0.5px]" />
          </div>
        )}

        {isOptional && isEverythingNull && (
          <span className="text-xs text-dark/50 absolute bottom-3 right-5 pointer-events-none">
            Optional
          </span>
        )}

        <div
          id={id}
          className="w-full h-full bg-dark-400 rounded-[5px] cursor-pointer flex flex-col justify-center px-5"
        >
          <div
            className={`flex items-center gap-2 text-dark-300 capitalize font-medium first-letter:
        ${isEverythingNull ? "text-base" : "text-xs"}
        `}
          >
            <FiCalendar size={isEverythingNull ? 20 : 15} />
            {widgetTitle}
          </div>
          {isEverythingNull ? (
            ""
          ) : (
            <>
              <p className="text-lg font-semibold text-dark mt-0.5">
                {date && format(date, "dd MMMM")}
                {/* 01 June */}
              </p>
              <div className="flex items-center gap-1.5">
                <BsClock size={14} />
                {hour && minute && (
                  <p className="text-xs">
                    {value.time.hour}:{value.time.minute}
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <PickDateTimeModal
        targetElmId={id}
        value={value}
        setValue={setValue}
        pickupTimeTitle={pickupTimeTitle}
      />
    </>
  );
};

export default PickDateTimeWidget;
