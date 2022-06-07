import Input from "@components/Input";
import React from "react";

const BillingAddressForm = () => {
  return (
    <div className="mt-9">
      <h1 className="title_md text-primary">Billing Address</h1>
      <div className="card_style mt-5 p-10 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Input label="First Name" />
          <Input label="Last Name" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Input label="Company" />
          <Input label="Address" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[30%,30%,auto] gap-6">
          <Input label="City" />
          <Input label="Zip Code" />
          <Input label="Country" />
        </div>
      </div>
    </div>
  );
};

export default BillingAddressForm;
