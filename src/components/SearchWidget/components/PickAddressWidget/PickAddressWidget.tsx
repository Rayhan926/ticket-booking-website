import React, { useRef, useState } from "react";
import { IoAirplane, IoClose, IoLocationSharp } from "react-icons/io5";
import { Tooltip } from "react-tippy";
import PlacesAutocomplete from "react-places-autocomplete";
import { IoMdTrain } from "react-icons/io";
import { PickAddressWidgetProps } from "@config/types";
import CircularProgress from "@components/CircularProgress";
import { placesKeyword } from "@config/constants";
import { FaHotel } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";

const TooltipComponent = Tooltip as unknown as React.FC<any>;

const wordInString = (s: string, words: string[]) => {
  let truFalse: boolean[] = [];

  words.forEach((word) => {
    truFalse.push(new RegExp("\\b" + word + "\\b", "i").test(s));
  });

  return truFalse.filter((e) => e).length > 0 ? true : false;
};

const PickAddressWidget = ({
  onSelect,
  value: selectedLocation,
}: PickAddressWidgetProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null!);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  // const [results, setResults] = useState<any>([]);
  const [value, setValue] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  const renderFunc = ({ getInputProps, suggestions, loading }: any) => {
    // setResults(suggestions);
    // setIsLoading(loading);
    return (
      <>
        <div className="relative">
          <label>
            <div className="rounded-[5px] bg-dark-400 px-5 py-4">
              <div className="flex items-center gap-2 text-dark-300 capitalize font-medium">
                <IoLocationSharp size={20} />
                pickup Address:
              </div>
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
                      onSelect(null);
                      searchInputRef.current?.focus();
                    }}
                    className="cursor-pointer shrink-0 text-dark-300 hover:text-dark"
                  >
                    <IoClose />
                  </div>
                  <p className="line_clam_1">
                    {(selectedLocation as any)?.description}
                  </p>
                </div>
                <input
                  ref={searchInputRef}
                  type="text"
                  onFocus={() => setIsOpenDropdown(true)}
                  className="pt-3 pb-1 text-dark bg-transparent outline-none border-none px-2"
                  placeholder="Address, Airport , Hotel..."
                  {...getInputProps()}
                  onBlur={() => {
                    setTimeout(() => {
                      setIsOpenDropdown(false);
                      getInputProps().onBlur();
                      setValue("");
                    }, 100);
                  }}
                />

                {loading && (
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 text-primary">
                    <CircularProgress size={24} />
                  </div>
                )}
              </div>
            </div>
          </label>

          <div
            className={`absolute top-full left-0 w-full max-h-[300px] bg-white drop-shadow-md scrollbar-thin scrollbar-thumb-slate-300 overflow-y-auto z-[5] duration-200 ${
              isOpenDropdown
                ? "opacity-100 pointer-events-auto translate-y-0"
                : "opacity-0 pointer-events-none -translate-y-5"
            }`}
          >
            <div>
              {suggestions.length > 0 ? (
                <>
                  <div className="px-2 py-2">
                    {suggestions.map((suggestion: any, i: number) => {
                      return (
                        <div
                          key={i}
                          onClick={() => onSelectHandler(suggestion)}
                          className="flex items-start gap-2 px-4 py-2.5 cursor-pointer hover:bg-primary/30 text-dark duration-100 rounded-md"
                        >
                          <span className="shrink-0 translate-y-[3px]">
                            {wordInString(
                              suggestion.description,
                              placesKeyword.railway,
                            ) ? (
                              <IoMdTrain size={20} />
                            ) : wordInString(
                                suggestion.description,
                                placesKeyword.airport,
                              ) ? (
                              <IoAirplane size={18} />
                            ) : wordInString(
                                suggestion.description,
                                placesKeyword.hotels,
                              ) ? (
                              <FaHotel size={16} />
                            ) : (
                              <AiTwotoneHome size={20} />
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
                  {loading ? "Loading.." : "Start typing.."}
                </p>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  const onSelectHandler = (value: any) => {
    onSelect(value);
    onSelect && onSelect(value);
  };

  return (
    <PlacesAutocomplete value={value} onChange={(address) => setValue(address)}>
      {renderFunc}
    </PlacesAutocomplete>
  );

  // return (
  //   <TooltipComponent
  //     open={!isLoading && (isOpenDropdown || results.length > 0)}
  //     onRequestClose={() => setIsOpenDropdown(false)}
  //     html={
  //       <p>
  //         {results.length > 0 ? (
  //           <>
  //             <div className="px-2 py-2">
  //               {results.map((suggestion: any, i: number) => {
  //                 return (
  //                   <div
  //                     key={i}
  //                     onClick={() => onSelectHandler(suggestion)}
  //                     className="flex items-start gap-2 px-4 py-2.5 cursor-pointer hover:bg-primary/30 text-dark duration-100 rounded-md"
  //                   >
  //                     <span className="shrink-0 translate-y-[3px]">
  //                       {wordInString(
  //                         suggestion.description,
  //                         placesKeyword.railway,
  //                       ) ? (
  //                         <IoMdTrain size={20} />
  //                       ) : wordInString(
  //                           suggestion.description,
  //                           placesKeyword.airport,
  //                         ) ? (
  //                         <IoAirplane size={18} />
  //                       ) : wordInString(
  //                           suggestion.description,
  //                           placesKeyword.hotels,
  //                         ) ? (
  //                         <FaHotel size={16} />
  //                       ) : (
  //                         <AiTwotoneHome size={20} />
  //                       )}
  //                     </span>
  //                     <span>{suggestion.description}</span>
  //                   </div>
  //                 );
  //               })}
  //             </div>
  //           </>
  //         ) : (
  //           <p className="px-4 py-3 text-dark-300">
  //             {isLoading ? "Loading.." : "Start typing.."}
  //           </p>
  //         )}
  //       </p>
  //     }
  //     position="bottom-start"
  //     trigger="click"
  //     theme="light"
  //   >
  //     <label>
  //       <div className="rounded-[5px] bg-dark-400 px-5 py-4">
  //         <div className="flex items-center gap-2 text-dark-300 capitalize font-medium">
  //           <IoLocationSharp size={20} />
  //           pickup Address:
  //         </div>
  //         <PlacesAutocomplete
  //           value={value}
  //           onChange={(address) => setValue(address)}
  //         >
  //           {renderFunc}
  //         </PlacesAutocomplete>
  //       </div>
  //     </label>
  //   </TooltipComponent>
  // );
};

export default PickAddressWidget;
