import { ReactNode } from "react";

export interface SectionTitleSubtitle {
  title: ReactNode;
  subtitle: ReactNode;
}

export interface IconCardType {
  img: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  title: ReactNode;
  subtitle: ReactNode;
}

export interface FooterLinksSection {
  section_title: ReactNode;
  links: {
    text: ReactNode;
    url: string;
  }[];
}
export interface FooterLinksSectionsType {
  [key: string]: FooterLinksSection;
}

export interface HeaderNavLink {
  text: ReactNode;
  url: string;
}

export interface PickAddressWidgetProps {
  onSelect?: (value: any) => void;
}
