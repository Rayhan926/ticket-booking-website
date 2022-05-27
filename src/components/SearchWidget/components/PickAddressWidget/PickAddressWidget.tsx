import React, { useRef, useState } from "react";
import { IoAirplane, IoClose, IoLocationSharp } from "react-icons/io5";
import { Tooltip } from "react-tippy";
import PlacesAutocomplete from "react-places-autocomplete";
import { IoMdTrain } from "react-icons/io";
import { PickAddressWidgetProps } from "@config/types";

const TooltipComponent = Tooltip as unknown as React.FC<any>;

const PickAddressWidget = ({ onSelect }: PickAddressWidgetProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null!);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [results, setResults] = useState<any>([]);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<any>(null!);

  const hasInclude = (text: string, key: string) => {
    return text
      .split(" ")
      .map((e: any) => e.toLowerCase())
      .includes(key);
  };

  const renderFunc = ({ getInputProps, suggestions, loading }: any) => {
    setResults(suggestions);
    setIsLoading(loading);
    return (
      <>
        <div className="relative">
          <div
            className={`pt-3 pb-1 flex items-center gap-2 font-semibold text-dark absolute top-0 left-0 w-full bg-dark-400 ${
              selectedLocation
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              onClick={() => {
                setSelectedLocation(null);
                searchInputRef.current?.focus();
              }}
              className="cursor-pointer shrink-0 text-dark-300 hover:text-dark"
            >
              <IoClose />
            </div>
            <p className="line_clam_1">{selectedLocation?.description}</p>
          </div>
          <input
            ref={searchInputRef}
            type="text"
            onFocus={() => setIsOpenDropdown(true)}
            className="pt-3 pb-1 text-dark bg-transparent outline-none border-none px-2"
            placeholder="Address, Airport , Hotel..."
            {...getInputProps()}
            onBlur={() => {
              setIsOpenDropdown(false);

              setTimeout(() => {
                getInputProps().onBlur();
                setValue("");
              }, 100);
            }}
          />
        </div>
      </>
    );
  };

  const onSelectHandler = (value: any) => {
    setSelectedLocation(value);
    onSelect && onSelect(value);
  };

  return (
    <TooltipComponent
      open={isOpenDropdown || results.length > 0}
      onRequestClose={() => setIsOpenDropdown(false)}
      html={
        <p>
          {results.length > 0 ? (
            <>
              <div className="px-2 py-2">
                {results.map((suggestion: any) => {
                  return (
                    <div
                      onClick={() => onSelectHandler(suggestion)}
                      className="flex items-start gap-2 px-4 py-2.5 cursor-pointer hover:bg-primary/30 text-dark duration-100 rounded-md"
                    >
                      <span className="shrink-0 translate-y-[3px]">
                        {hasInclude(suggestion.description, "train") ? (
                          <IoMdTrain size={20} />
                        ) : hasInclude(suggestion.description, "airplane") ? (
                          <IoAirplane size={20} />
                        ) : (
                          <IoLocationSharp size={20} />
                        )}
                      </span>
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <p className="px-4 py-3 text-dark-300">
              {isLoading ? "Loading.." : "Start typing.."}
            </p>
          )}
        </p>
      }
      position="bottom-start"
      trigger="click"
      theme="light"
    >
      <div className="rounded-[5px] bg-dark-400 px-5 py-4">
        <div className="flex items-center gap-2 text-dark-300 capitalize font-medium">
          <IoLocationSharp size={20} />
          pickup Address:
        </div>
        <PlacesAutocomplete
          value={value}
          onChange={(address) => setValue(address)}
        >
          {renderFunc}
        </PlacesAutocomplete>
      </div>
    </TooltipComponent>
  );
};

export default PickAddressWidget;