import React from "react";
import FooterLinksRenderer from "@components/Footer/components/FooterLinksRenderer";
import { footerLinksSections } from "@config/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark pt-[180px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-14 gap-8">
          <div>
            <FooterLinksRenderer
              {...footerLinksSections["discover_us"]}
              className="mb-7"
            />
            <FooterLinksRenderer {...footerLinksSections["contact_us"]} />
          </div>
          <FooterLinksRenderer {...footerLinksSections["company"]} />
          <FooterLinksRenderer {...footerLinksSections["top_airports"]} />
          <div>
            <h6 className="title_sm text-[22px] mb-3 text-white font-semibold">
              Download Our App
            </h6>
            <div className="flex flex-wrap gap-2 flex-row sm:flex-col">
              <Link href={"#"}>
                <a className="inline-block">
                  <img src="/img/google_playstore.svg" alt="Google Playstore" />
                </a>
              </Link>
              <Link href={"#"}>
                <a className="inline-block">
                  <img src="/img/app_store.svg" alt="App Store" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row md:justify-between gap-y-2 items-center border-t-2 flex-wrap border-white text-white py-4 md:py-6 mt-[60px]">
          <p className="opacity-60">@ 2020 Deksa. All rights reserved.</p>
          <p className="opacity-60">Made with love by pro_uiux</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
