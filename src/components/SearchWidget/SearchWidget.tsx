import React from "react";
import PickAddressWidget from "./components/PickAddressWidget";

const SearchWidget = () => {
  return (
    <div
      style={{
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
      }}
      className="container bg-white rounded-md p-3 -translate-y-1/2"
    >
      <div className="grid grid-cols-[300px,300px,auto,auto,auto,auto] gap-2.5">
        <PickAddressWidget onSelect={(value) => console.log({ value })} />
        <PickAddressWidget onSelect={(value) => console.log({ value })} />
      </div>
    </div>
  );
};

export default SearchWidget;
