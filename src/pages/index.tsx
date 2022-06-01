import { NextPageWithHeaderType } from "@config/types";
import Home from "@views/Home";
import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPageWithHeaderType = () => {
  return (
    <>
      <Home />
    </>
  );
};

HomePage.headerType = "fixed";
export default HomePage;
