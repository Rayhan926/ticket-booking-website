import React from "react";
import FooterLinksRenderer from "@components/Footer/components/FooterLinksRenderer";
import { footerLinksSections } from "@config/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark pt-[150px] pb-[80px]">
      <div className="container">
        <div className="grid grid-cols-4 gap-8">
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
            <div className="space-y-2">
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
      </div>
    </footer>
  );
};

export default Footer;
