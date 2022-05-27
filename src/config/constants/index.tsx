import { FooterLinksSectionsType, IconCardType } from "@config/types";

export const safeJourneyCards: IconCardType[] = [
  {
    img: {
      src: "/img/safe_secure_icon.svg",
      width: 84,
      height: 84,
      alt: "Safe And Secure Travel",
    },
    title: "Safe And Secure Travel",
    subtitle:
      "Our drivers regularly sanitize vehicles, wear masks and comply with all local laws",
  },
  {
    img: {
      src: "/img/wait_time_icon.svg",
      width: 84,
      height: 84,
      alt: "Complimentary Wait Time",
    },
    title: "Complimentary Wait Time",
    subtitle:
      "Take your time, with 1 hour of complimentary wait time and flight tracking.",
  },
  {
    img: {
      src: "/img/clear_price_icon.svg",
      width: 84,
      height: 84,
      alt: "Clear Price",
    },
    title: "Clear Price",
    subtitle:
      "Immediate confirmation, all-inclusive rates – no extra costs, no cash required",
  },
  {
    img: {
      src: "/img/professional_drivers_icon.svg",
      width: 84,
      height: 84,
      alt: "Professional Drivers",
    },
    title: "Professional Drivers",
    subtitle:
      "Reach your destination safely and relaxed with a licensed, insured and professional chauffeur.",
  },
];

export const howDoesItWorkCards: IconCardType[] = [
  {
    img: {
      src: "/img/select_car_icon.svg",
      width: 84,
      height: 84,
      alt: "Enter Your Route And Select Car",
    },
    title: "Enter Your Route And Select Car",
    subtitle:
      "Immediate confirmation, all-inclusive rates – no extra costs, no cash required",
  },
  {
    img: {
      src: "/img/book_form_icon.svg",
      width: 84,
      height: 84,
      alt: "Complete Booking Form",
    },
    title: "Complete Booking Form",
    subtitle:
      "Enter the details of the lead passenger, add extras if you wish. Proceed to payment and receive your voucher",
  },
  {
    img: {
      src: "/img/meet_driver_icon.svg",
      width: 84,
      height: 84,
      alt: "Meet Your Driver",
    },
    title: "Meet Your Driver",
    subtitle:
      "You will receive your driver's details 3 hours prior to pickup and he will be waiting for you on-site with a Name Sign.",
  },
];

export const weHaveStats = [
  {
    title: "VEHICLES STOCK",
    value: "3874",
  },
  {
    title: "DEALERS SERVED",
    value: "299+",
  },
  {
    title: "VEHICLES ON Ride",
    value: "1450+",
  },
  {
    title: "HAPPY CUSTOMERS",
    value: "6403",
  },
];

export const airplaneListsCards = [
  {
    boxBg: "#4FBDE6",
    lists: [
      "Chania Airport Transfers (CHQ)",
      "Pisa Airport Transfers (PSA) ",
      "Menorca Airport Transfers (MAH)",
      "Turku Airport Transfers (TKU)",
      "Billund Airport Transfers (BLL)",
      "Copernicus Airport Wrocław Transfers (WRO)",
    ],
  },
  {
    boxBg: "#46A4C7",
    lists: [
      "Zakynthos Airport Transfers (ZTH)",
      "Sofia Airport Transfers (SOF)",
      "Zadar Airport Transfers (ZAD)",
      "Riga International Airport Transfers (RIX)",
      "London City Airport Transfers (LCY)",
      "Bolzano Airport Transfers (BZO)",
    ],
  },
  {
    boxBg: "#0A1A34",
    lists: [
      "Bologna Airport Transfers (BLQ) ",
      "Ancona Falconara Airport Transfers (AOI)",
      "Melbourne Moorabbin Airport Transfers (MBW)",
      "Burgas Airport Transfers (BOJ)",
      "Hamilton Airport Transfers (HLZ)",
      "Verona Airport Transfers (VRN) ",
    ],
  },
];

export const footerLinksSections: FooterLinksSectionsType = {
  discover_us: {
    section_title: "Discover Us",
    links: [
      {
        text: "Contact Us",
        url: "#",
      },
      {
        text: "About Us",
        url: "#",
      },
    ],
  },
  contact_us: {
    section_title: "Conatct Us",
    links: [
      {
        text: (
          <p className="flex gap-1">
            <img src="/img/english.svg" alt="English" /> English +1 4156599831
          </p>
        ),
        url: "#",
      },
      {
        text: (
          <p className="flex gap-1">
            <img src="/img/italiano.svg" alt="Italiano" /> Italiano +39
            0656556172
          </p>
        ),
        url: "#",
      },
      {
        text: (
          <p className="flex gap-1">
            <img src="/img/deutsch.svg" alt="Deutsch" /> Deutsch +44 2078552543
          </p>
        ),
        url: "#",
      },
      {
        text: <p className="flex gap-1">GENERAL : Info@Transfeero.Com</p>,
        url: "mailto:Info@Transfeero.Com",
      },
    ],
  },
  company: {
    section_title: "Company",
    links: [
      {
        text: "Terms & Conditions",
        url: "#",
      },
      {
        text: "Privacy Policy",
        url: "#",
      },
      {
        text: "For Travel Agencies",
        url: "#",
      },
      {
        text: "Become A Supplier",
        url: "#",
      },
      {
        text: "Supplier Login",
        url: "#",
      },
    ],
  },
  top_airports: {
    section_title: "Top Airports",
    links: [
      {
        text: "London Heathrow Airport",
        url: "#",
      },
      {
        text: "Brindisi Salento Airport",
        url: "#",
      },
      {
        text: "Málaga Airport",
        url: "#",
      },
      {
        text: "Alghero Airport",
        url: "#",
      },
      {
        text: "Naples Airport",
        url: "#",
      },
      {
        text: "Heraklion Airport",
        url: "#",
      },
      {
        text: "Frankfurt Airport",
        url: "#",
      },
      {
        text: "Faro Airport",
        url: "#",
      },
      {
        text: "Palermo Airport",
        url: "#",
      },
      {
        text: "Bari Airport",
        url: "#",
      },
    ],
  },
};
