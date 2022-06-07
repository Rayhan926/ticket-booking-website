import { ComponentProps, ReactNode } from "react";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ImageProps } from "next/image";

export interface SectionTitleSubtitle {
  title: ReactNode;
  subtitle: ReactNode;
}

type ImageType = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export interface IconCardType {
  img: ImageType;
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
  img: ImageType;
  name: string;
  stars: number;
  rating: number;
}

export interface BookingStep {
  title: string;
  pageUrl: string;
}

export type IconListProps = {
  icon: ReactNode;
  title: ReactNode;
  titleClass?: string;
  subtitle?: ReactNode;
  subtitleClass?: string;
} & ComponentProps<"div">;

export interface AvailableCarType {
  img: ImageType;
  description: string;
  hasPrivateTransfer: boolean;
  rating: number;
  hasPorterSercvice: boolean;
  classType: string;
  passanger: string | null;
  suitcase: number | null;
  hasMeetAndGreetIncluded: boolean;
  hasFreeWaitingTime: boolean;
  hasDoorToDoor: boolean;
  hasSafeJourney: boolean;
  price: number;
  hasFreeCancelation: boolean;
  hasNoHiddenCost: boolean;
  popular?: boolean;
}

export interface YourRideInfoProps {
  fromAddress: string;
  toAddress: string;
  date: string;
  time: string;
  person: string;
  speed: string;
  rideTime: string;
}

export interface BookingFormLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  title?: ReactNode;
  sectionClass?: string;
}

export interface YourBookingInfoWidgetProps {
  priec: string;
  category: string;
  hasHiddenCost?: boolean;
}

export interface SeatConfigureProps {
  icon: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
  isFree?: boolean;
}

export type CheckboxProps = {
  type?: "checkbox";
  label?: ReactNode;
} & Omit<React.ComponentProps<"input">, "type">;

export type InputProps = {
  label?: ReactNode;
  helperText?: ReactNode;
} & React.ComponentProps<"input">;

export interface BookWithConfidenceCard {
  icon: ReactNode;
  description: ReactNode;
}

export type RadioButtonProps = {
  type?: "radio";
} & Omit<React.ComponentProps<"input">, "type">;

export interface PaymentOption {
  img: ImageProps;
}
