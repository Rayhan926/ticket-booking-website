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
  onSelect: (value: any) => void;
  value: {} | null;
}

export interface PickDateTimeValue {
  date: Date | null;
  time: {
    hour: string | null;
    minute: string | null;
  };
}
export interface PickDateTimeModalProps {
  targetElmId: string;
  value: PickDateTimeValue;
  setValue: (e: PickDateTimeValue) => void;
  pickupTimeTitle?: ReactNode;
  minDate?: Date;
  minHour?: string;
  minMinute?: string;
}

export interface PickDateTimeWidgetProps {
  value: PickDateTimeValue;
  setValue: (e: PickDateTimeValue) => void;
  isClearable?: boolean;
  isOptional?: boolean;
  widgetTitle: ReactNode;
  id: string;
  pickupTimeTitle?: ReactNode;
  minDate?: Date;
  minHour?: string;
  minMinute?: string;
}

export interface IncrementDecrement {
  title: ReactNode;
  subtitle: ReactNode;
  value: number;
  onChange: (prev: any) => void;
  min?: number;
  max?: number;
}

type PassengerType = {
  adults: number;
  children: number;
  infantsCount: number;
};
export interface PassengersWidget {
  passangers: PassengerType;
  setPassangers: (e: any) => void;
}

export interface ClientReviewType {
  reviewText: string;
  img: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  name: string;
  stars: number;
  rating: number;
}
