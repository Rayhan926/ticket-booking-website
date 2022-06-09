import Checkbox from "@components/Checkbox";
import Image from "next/image";
import React from "react";
import SignupInput from "./components/SignupInput";

const Signup = () => {
  return (
    <section className="grow bg-dark-900">
      <div className="grid grid-cols-1 2xl:grid-cols-[680px,auto]">
        <div className="hidden 2xl:block bg-[#4FBDE5]">
          <Image
            width={825}
            height={1080}
            src="/img/signup-illustrator.jpg"
            alt="signup illustrator"
          />
        </div>
        <div className="pt-[50px] px-6 md:px-[50px] 2xl:pt-[90px] 2xl:px-[120px] 3xl:px-[200px]">
          <p className="text-primary font-medium text-2xl uppercase">Signup</p>
          <h1 className="text-[30px] text-[#727272] font-bold">
            Sign Up for an Account
          </h1>

          <form className="mt-[50px] space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <SignupInput placeholder="First Name" label="First Name" />
              <SignupInput placeholder="Last Name" label="Last Name" />
            </div>
            <SignupInput
              placeholder="example@gmail.com"
              label="Email"
              type="email"
            />
            <SignupInput
              placeholder="Password"
              label="Password"
              type="password"
            />
            <div>
              <Checkbox
                label={
                  <span className="text-[17px] text-[#202842] font-medium">
                    I accept MyTransfer{" "}
                    <a href="#" className="__link">
                      Terms & Conditions
                    </a>
                  </span>
                }
              />
            </div>
            <div className="!mt-9">
              <button className="border-none outline-none py-[18px] hover:bg-primary-hover duration-150 px-4 bg-primary text-white w-full rounded-[5px] font-semibold">
                Let's Go
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
