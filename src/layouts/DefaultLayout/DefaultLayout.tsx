import Footer from "@components/Footer";
import Header from "@components/Header";
import React, { ReactNode } from "react";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
