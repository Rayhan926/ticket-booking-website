import { FooterLinksSection } from "@config/types";
import Link from "next/link";
import React from "react";

type FooterLinksRendererProps = FooterLinksSection &
  React.ComponentProps<"div">;
const FooterLinksRenderer = ({
  section_title,
  links,
  ...props
}: FooterLinksRendererProps) => {
  return (
    <div {...props}>
      <h6 className="title_sm text-[22px] mb-2.5 text-white font-semibold">
        {section_title}
      </h6>
      <ul className="text_md space-y-1">
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.url}>
              <a className="inline-block hover:text-primary hover:underline text-white">
                {link.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksRenderer;
