import Footer from "@components/Footer";
import Header from "@components/Header";
import React, { ReactNode } from "react";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
