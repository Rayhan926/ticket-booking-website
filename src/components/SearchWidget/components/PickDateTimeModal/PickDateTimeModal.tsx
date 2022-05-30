import Button from "@components/Button";
import { hoursOptions, minutesOptions } from "@config/constants";
import { PickDateTimeModalProps, PickDateTimeValue } from "@config/types";
import React, { useEffect, useState } from "react";
import { Calendar } from "react-date-range";
import { BsClock } from "react-icons/bs";

const PickDateTimeModal = ({
  targetElmId,
  value,
  setValue,
  pickupTimeTitle = "Pickup Time",
  minDate,
  minHour,
  minMinute,
}: PickDateTimeModalProps) => {
  const [position, setPosition] = useState<React.CSSProperties>({
    top: 0,
    left: 0,
    width: 265,
    minWidth: 285,
  });
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dateTime, setDateTime] = useState<PickDateTimeValue>({
    date: value.date,
    time: {
      minute: value.time.minute,
      hour: value.time.hour,
    },
  });

  const timeOnChangeHandler = (e: any, key: string) => {
    setDateTime((prev) => {
      const returnValue = {
        ...prev,
        time: {
          ...prev.time,
          [key]: e.target.value,
        },
      };
      setValue(returnValue);
      return returnValue;
    });
  };

  const dateChangeHandler = (date: Date) => {
    setDateTime((prev) => {
      const returnValue = {
        ...prev,
        date: date,
      };
      setValue(returnValue);
      return returnValue;
    });
  };

  const openModalHandler = () => {
    setIsOpenModal(true);
    document.querySelector("#headerMain")?.classList.add("hide_fixed_header");
  };
  const closeModalHandler = () => {
    setIsOpenModal(false);
    document
      .querySelector("#headerMain")
      ?.classList.remove("hide_fixed_header");
  };

  const setModalContentPosition = (elm: any) => {
    const rect = elm.getBoundingClientRect();
    const windowSize = window.innerWidth;
    if (windowSize < 769) {
      setPosition((prev) => ({
        ...prev,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }));
    } else {
      setPosition((prev) => ({
        ...prev,
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: "auto",
      }));
    }
  };

  useEffect(() => {
    const targetElm: HTMLDivElement | null = document.querySelector(
      `#${targetElmId}`,
    );
    if (!targetElm) return;

    targetElm.addEventListener("click", () => {
      setModalContentPosition(targetElm);
      openModalHandler();
    });
  }, [targetElmId]);

  useEffect(() => {
    const targetElm: HTMLDivElement | null = document.querySelector(
      `#${targetElmId}`,
    );
    window.addEventListener("scroll", () => {
      if (!targetElm || !isOpenModal) return;
      setModalContentPosition(targetElm);
    });
  }, [isOpenModal, targetElmId]);

  useEffect(() => {
    const shouldCloseModal = (e: any) => {
      if (e.target.id === "modalOverly") {
        closeModalHandler();
      }
    };

    document.addEventListener("click", shouldCloseModal);

    return () => {
      document.removeEventListener("click", shouldCloseModal);
    };
  }, []);

  return (
    <div
      id="modalOverly"
      className={`fixed top-0 left-0 w-full h-screen z-[9999999999] duration-150
        ${
          isOpenModal
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        className="px-1 pb-2 border border-dark-500/70 bg-white drop-shadow-md absolute datePickerWrapper w-full h-full z-[99999]"
        style={{
          ...position,
          ...(isOpenModal
            ? {
                transform: "translateY(0) perspective(600px) rotateX(0)",
                transition:
                  "transform .15s ease-out,opacity .15s ease-out,max-height 0s,border-width 0s",
                transitionDelay: "0s, 0s, 0s, 0s",
              }
            : {
                transform: "translateY(-1em) perspective(600px) rotateX(10deg)",
                transition:
                  "transform .15s ease-out,opacity .15s ease-out,max-height 0s .15s,border-width 0s .15s",
                transitionDelay: "0s, 0s, 0.15s, 0.15s",
              }),
        }}
      >
        <div>
          <Calendar
            showMonthAndYearPickers={false}
            minDate={minDate || new Date()}
            date={dateTime.date || new Date()}
            onChange={(r) => dateChangeHandler(r)}
          />
        </div>

        <div className="mt-2">
          <div className="flex justify-center gap-2 text-dark text-sm">
            <BsClock size={17} className="translate-y-[1px]" />
            {pickupTimeTitle}
          </div>

          <div className="flex justify-center items-center mt-4 gap-1">
            <select
              className="border-[2.5px] px-1.5 py-0.5 outline-none border-primary rounded"
              value={dateTime.time.hour || ""}
              onChange={(e) => timeOnChangeHandler(e, "hour")}
            >
              {hoursOptions.map(({ value, label }, i) => (
                <option
                  key={i}
                  value={value}
                  disabled={parseInt(value) < parseInt(minHour || "0")}
                >
                  {label}
                </option>
              ))}
            </select>
            :
            <select
              className="border-[2.5px] px-1.5 py-0.5 outline-none border-primary rounded"
              value={dateTime.time.minute || ""}
              onChange={(e) => timeOnChangeHandler(e, "minute")}
            >
              {minutesOptions.map(({ value, label }, i) => (
                <option
                  key={i}
                  value={value}
                  disabled={parseInt(value) < parseInt(minMinute || "0")}
                >
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5 px-1">
            <Button onClick={closeModalHandler}>Confirm</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickDateTimeModal;
