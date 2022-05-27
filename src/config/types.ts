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
