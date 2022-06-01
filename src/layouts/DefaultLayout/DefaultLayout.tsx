import Footer from "@components/Footer";
import Header from "@components/Header";
import { HeaderType } from "@config/types";
import { setHeaderType } from "@state/application/applicationSlice";
import { useAppDispatch } from "@state/hooks";
import React, { ReactNode, useEffect } from "react";

const DefaultLayout = ({
  children,
  headerType,
}: {
  children: ReactNode;
  headerType?: HeaderType;
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setHeaderType(headerType));
  }, [headerType]);

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
