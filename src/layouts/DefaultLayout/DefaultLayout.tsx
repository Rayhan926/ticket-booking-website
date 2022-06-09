import Footer from "@components/Footer";
import Header from "@components/Header";
import { disableFooterUrls } from "@config/constants";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const shoudlHideFooter = disableFooterUrls.includes(router.pathname);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      {!shoudlHideFooter && (
        <div className="mt-auto">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default DefaultLayout;
