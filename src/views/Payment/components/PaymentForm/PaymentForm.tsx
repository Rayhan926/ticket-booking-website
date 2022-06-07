import React from "react";
import BillingAddressForm from "../BillingAddressForm";
import ChoosePaymentOption from "../ChoosePaymentOption";
import CouponCodeInput from "../CouponCodeInput";
import TotalPrice from "../TotalPrice";

const PaymentForm = () => {
  return (
    <>
      <CouponCodeInput />
      <BillingAddressForm />
      <TotalPrice />
      <ChoosePaymentOption />
    </>
  );
};

export default PaymentForm;
