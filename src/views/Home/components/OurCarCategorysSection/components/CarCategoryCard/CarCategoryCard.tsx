import Image from "next/image";
import React from "react";

const CarCategoryCard = () => {
  return (
    <div className="pb-12">
      <div
        style={{
          boxShadow: "0 3px 11px rgba(0,0,0,0.05)",
        }}
        className="pt-[35px] px-[30px] pb-[65px] rounded-[10px] text-center bg-dark-700 scale-[0.85] origin-bottom duration-300 car_category_card"
      >
        <Image
          src={"/img/Economy_Taxi.png"}
          width={900}
          height={604}
          alt="Economy Taxi"
        />
        <h4 className="title_md">Economy Taxi</h4>
        <p className="text_md mt-1">Up To 3 Passengers</p>
      </div>
    </div>
  );
};

export default CarCategoryCard;
