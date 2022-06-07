import React from "react";

const CouponCodeInput = () => {
  return (
    <div className="card_style px-10 pb-[34px] pt-[53px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <p className="text-[13px] text-dark mb-1.5">Use Discount Code</p>
          <form className="relative">
            <input type="text" className="__input pr-[130px]" />
            <button className="bg-primary hover:bg-primary-hover duration-150 text-white font-medium absolute right-1 h-[calc(100%-8px)] -translate-y-1/2 top-1/2 rounded px-8 py-3">
              Apply
            </button>
          </form>
        </div>
        <span></span>
      </div>
    </div>
  );
};

export default CouponCodeInput;
