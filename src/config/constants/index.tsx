import BestPriceGuarantee from "@components/Icons/BestPriceGuarantee";
import FreeCancelCalender from "@components/Icons/FreeCancelCalender";
import IncludedVat from "@components/Icons/IncludedVat";
import type {
  AvailableCarType,
  BookingStep,
  BookWithConfidenceCard,
  ClientReviewType,
  FooterLinksSectionsType,
  HeaderNavLink,
  IconCardType,
  PaymentOption,
  YourRideInfoProps,
} from "@config/types";

export const headerNavLinks: HeaderNavLink[] = [
  {
    text: "Home",
    url: "#",
  },
  {
    text: "Airport Taxi",
    url: "#",
  },
  {
    text: "City Rides",
    url: "#",
  },
  {
    text: "Help",
    url: "#",
  },
];

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

export const languages = ["ENGLISH", "ITALIC", "GERMAN", "SPANISH"];

export const hoursOptions = [
  {
    label: "hour",
    value: "",
  },
  {
    label: "0",
    value: "00",
  },
  {
    label: "1",
    value: "01",
  },
  {
    label: "2",
    value: "02",
  },
  {
    label: "3",
    value: "03",
  },
  {
    label: "4",
    value: "04",
  },
  {
    label: "5",
    value: "05",
  },
  {
    label: "6",
    value: "06",
  },
  {
    label: "7",
    value: "07",
  },
  {
    label: "8",
    value: "08",
  },
  {
    label: "9",
    value: "09",
  },
  {
    label: "10",
    value: "10",
  },
  {
    label: "11",
    value: "11",
  },
  {
    label: "12",
    value: "12",
  },
  {
    label: "13",
    value: "13",
  },
  {
    label: "14",
    value: "14",
  },
  {
    label: "15",
    value: "15",
  },
  {
    label: "16",
    value: "16",
  },
  {
    label: "17",
    value: "17",
  },
  {
    label: "18",
    value: "18",
  },
  {
    label: "19",
    value: "19",
  },
  {
    label: "20",
    value: "20",
  },
  {
    label: "21",
    value: "21",
  },
  {
    label: "22",
    value: "22",
  },
  {
    label: "23",
    value: "23",
  },
];

export const minutesOptions = [
  {
    label: "minute",
    value: "",
  },
  {
    label: "00",
    value: "00",
  },
  {
    label: "05",
    value: "05",
  },
  {
    label: "10",
    value: "10",
  },
  {
    label: "15",
    value: "15",
  },
  {
    label: "20",
    value: "20",
  },
  {
    label: "25",
    value: "25",
  },
  {
    label: "30",
    value: "30",
  },
  {
    label: "35",
    value: "35",
  },
  {
    label: "40",
    value: "40",
  },
  {
    label: "45",
    value: "45",
  },
  {
    label: "50",
    value: "50",
  },
  {
    label: "55",
    value: "55",
  },
];

export const placesKeyword = {
  airport: ["airplane", "airport", "plane"],
  railway: ["train", "railway", "rail"],
  hotels: ["hotel", "hotels"],
};

export const carsCategories: IconCardType[] = [
  {
    img: {
      src: "/img/Van-First-Class.png",
      width: 900,
      height: 604,
      alt: "Van First Class",
    },
    title: "Van First Class",
    subtitle: "Up To 6 Passengers",
  },
  {
    img: {
      src: "/img/Economy_Taxi.png",
      width: 900,
      height: 604,
      alt: "Economy Taxi",
    },
    title: "Economy Taxi",
    subtitle: "Up To 3 Passengers",
  },
  {
    img: {
      src: "/img/Van-First-Class-2.png",
      width: 900,
      height: 604,
      alt: "Van First Class",
    },
    title: "Van First Class",
    subtitle: "Up To 6 Passengers",
  },
  {
    img: {
      src: "/img/Van-First-Class.png",
      width: 900,
      height: 604,
      alt: "Van First Class",
    },
    title: "Van First Class",
    subtitle: "Up To 6 Passengers",
  },
  {
    img: {
      src: "/img/Economy_Taxi.png",
      width: 900,
      height: 604,
      alt: "Economy Taxi",
    },
    title: "Economy Taxi",
    subtitle: "Up To 3 Passengers",
  },
  {
    img: {
      src: "/img/Van-First-Class-2.png",
      width: 900,
      height: 604,
      alt: "Van First Class",
    },
    title: "Van First Class",
    subtitle: "Up To 6 Passengers",
  },
];

export const clientReviews: ClientReviewType[] = [
  {
    reviewText:
      "Some days a motivational quote can provide a quick pick-me-up for employees and even management. They can be a breath of fresh air when it comes to a drab afternoon.",
    img: {
      src: "/img/profile.jpg",
      width: 58,
      height: 58,
      alt: "Patrick Bell",
    },
    name: "Patrick Bell",
    stars: 5,
    rating: 5.0,
  },
  {
    reviewText:
      "Some days a motivational quote can provide a quick pick-me-up for employees and even management. They can be a breath of fresh air when it comes to a drab afternoon.",
    img: {
      src: "/img/profile-2.png",
      width: 58,
      height: 58,
      alt: "Patrick Bell",
    },
    name: "Patrick Bell",
    stars: 5,
    rating: 5.0,
  },
  {
    reviewText:
      "Some days a motivational quote can provide a quick pick-me-up for employees and even management. They can be a breath of fresh air when it comes to a drab afternoon.",
    img: {
      src: "/img/profile-3.png",
      width: 58,
      height: 58,
      alt: "Patrick Bell",
    },
    name: "Patrick Bell",
    stars: 5,
    rating: 5.0,
  },
  {
    reviewText:
      "Some days a motivational quote can provide a quick pick-me-up for employees and even management. They can be a breath of fresh air when it comes to a drab afternoon.",
    img: {
      src: "/img/profile.jpg",
      width: 58,
      height: 58,
      alt: "Patrick Bell",
    },
    name: "Patrick Bell",
    stars: 5,
    rating: 5.0,
  },
  {
    reviewText:
      "Some days a motivational quote can provide a quick pick-me-up for employees and even management. They can be a breath of fresh air when it comes to a drab afternoon.",
    img: {
      src: "/img/profile-2.png",
      width: 58,
      height: 58,
      alt: "Patrick Bell",
    },
    name: "Patrick Bell",
    stars: 5,
    rating: 5.0,
  },
];

export const bookingSteps: BookingStep[] = [
  {
    title: "Vehicle",
    pageUrl: "/pick-vehicle",
  },
  {
    title: "Extras",
    pageUrl: "/extra",
  },
  {
    title: "Details",
    pageUrl: "/details",
  },
  {
    title: "Payment",
    pageUrl: "/payment",
  },
];

export const availableCars: AvailableCarType[] = [
  {
    img: {
      src: "/img/Economy_Taxi.png",
      width: 900,
      height: 604,
      alt: "Economy Taxi",
    },
    description:
      "Skoda Octavia, Toyota Prius Or Similar.Image For Illustrative Purposes.",
    hasPrivateTransfer: true,
    rating: 5,
    hasPorterSercvice: true,
    classType: "Economy",
    passanger: "Upto 3 Passanger",
    suitcase: 3,
    hasMeetAndGreetIncluded: true,
    hasFreeWaitingTime: true,
    hasDoorToDoor: true,
    hasSafeJourney: true,
    price: 150,
    hasFreeCancelation: true,
    hasNoHiddenCost: true,
    popular: true,
  },
  {
    img: {
      src: "/img/Van-First-Class.png",
      width: 900,
      height: 604,
      alt: "Van First Class",
    },
    description:
      "Skoda Octavia, Toyota Prius Or Similar.Image For Illustrative Purposes.",
    hasPrivateTransfer: true,
    rating: 4,
    hasPorterSercvice: true,
    classType: "Standered Class",
    passanger: "Upto 3 Passanger",
    suitcase: 3,
    hasMeetAndGreetIncluded: true,
    hasFreeWaitingTime: true,
    hasDoorToDoor: true,
    hasSafeJourney: true,
    price: 180,
    hasFreeCancelation: true,
    hasNoHiddenCost: true,
  },
  {
    img: {
      src: "/img/Van-First-Class-2.png",
      width: 900,
      height: 604,
      alt: "Van First Class",
    },
    description:
      "Skoda Octavia, Toyota Prius Or Similar.Image For Illustrative Purposes.",
    hasPrivateTransfer: true,
    rating: 5,
    hasPorterSercvice: true,
    classType: "Economy",
    passanger: "Upto 3 Passanger",
    suitcase: 3,
    hasMeetAndGreetIncluded: true,
    hasFreeWaitingTime: true,
    hasDoorToDoor: true,
    hasSafeJourney: true,
    price: 200,
    hasFreeCancelation: true,
    hasNoHiddenCost: true,
    popular: true,
  },
  {
    img: {
      src: "/img/Economy_Taxi.png",
      width: 900,
      height: 604,
      alt: "Economy Taxi",
    },
    description:
      "Skoda Octavia, Toyota Prius Or Similar.Image For Illustrative Purposes.",
    hasPrivateTransfer: true,
    rating: 5,
    hasPorterSercvice: true,
    classType: "Economy",
    passanger: "Upto 3 Passanger",
    suitcase: 3,
    hasMeetAndGreetIncluded: true,
    hasFreeWaitingTime: true,
    hasDoorToDoor: true,
    hasSafeJourney: true,
    price: 150,
    hasFreeCancelation: true,
    hasNoHiddenCost: true,
  },
  {
    img: {
      src: "/img/Van-First-Class.png",
      width: 900,
      height: 604,
      alt: "Van First Class",
    },
    description:
      "Skoda Octavia, Toyota Prius Or Similar.Image For Illustrative Purposes.",
    hasPrivateTransfer: true,
    rating: 5,
    hasPorterSercvice: true,
    classType: "Standered Class",
    passanger: "Upto 4 Passanger",
    suitcase: 4,
    hasMeetAndGreetIncluded: true,
    hasFreeWaitingTime: true,
    hasDoorToDoor: true,
    hasSafeJourney: true,
    price: 350,
    hasFreeCancelation: true,
    hasNoHiddenCost: true,
  },
  {
    img: {
      src: "/img/Van-First-Class-2.png",
      width: 900,
      height: 604,
      alt: "Van First Class",
    },
    description:
      "Skoda Octavia, Toyota Prius Or Similar.Image For Illustrative Purposes.",
    hasPrivateTransfer: true,
    rating: 5,
    hasPorterSercvice: true,
    classType: "Economy",
    passanger: "Upto 3 Passanger",
    suitcase: 3,
    hasMeetAndGreetIncluded: true,
    hasFreeWaitingTime: true,
    hasDoorToDoor: true,
    hasSafeJourney: true,
    price: 250,
    hasFreeCancelation: true,
    hasNoHiddenCost: true,
    popular: true,
  },
];

export const trustsList = [
  "Thousands Of Customer Served",
  "Instant Confirmation",
  "All Inclusive Pricing",
  "Secure Payment By Credit Card, And Debit Card Or Paypal",
];

export const brand_small_logos = [
  "visa_small.png",
  "mastercard_small.png",
  "apple_pay_small.png",
  "paypal_small.png",
  "discover_small.png",
  "google_pay_small.png",
];

export const yourRideInfo: YourRideInfoProps = {
  fromAddress: "Antalya Airport (AYT), Antalya, Turkey",
  toAddress: "Yalova, Yalova Merkez/Yalova, Turkey",
  date: "5 Dec,2021",
  time: "12.00 (Pm)",
  person: "2 Person",
  speed: "122 Km/50 Miles",
  rideTime: "2 Hours",
};

export const companyLogoSectionPageUrls = [
  "/",
  "/pick-vehicle",
  "/extra",
  "/details",
];

export const bookWithConfidenceCards: BookWithConfidenceCard[] = [
  {
    icon: <BestPriceGuarantee />,
    description: (
      <p>
        Best Price Guarantee. Found Your Transfer For Less?{" "}
        <span className="font-semibold text-primary">
          We'll Refund The Difference.
        </span>
      </p>
    ),
  },
  {
    icon: <FreeCancelCalender />,
    description: (
      <p>
        <span className="font-semibold text-primary">Free Cancellation </span>
        Up To 24 Hours Before Pickup.
      </p>
    ),
  },
  {
    icon: <IncludedVat />,
    description: (
      <p>
        <span className="font-semibold text-primary">
          All Prices Are Inclusive Of VAT And Local Taxes.
        </span>
      </p>
    ),
  },
];

export const paymentOptions: PaymentOption[] = [
  {
    img: {
      src: "/img/company-logos/visa.png",
      width: 56,
      height: 18,
      alt: "Visa",
    },
  },
  {
    img: {
      src: "/img/company-logos/mastercard.png",
      width: 45.77,
      height: 27.4,
      alt: "Mastercard",
    },
  },
  {
    img: {
      src: "/img/company-logos/apple_pay.png",
      width: 53.15,
      height: 21.82,
      alt: "Apple Pay",
    },
  },
  {
    img: {
      src: "/img/company-logos/paypal.png",
      width: 69.68,
      height: 17.02,
      alt: "Paypal",
    },
  },
  {
    img: {
      src: "/img/company-logos/discover.png",
      width: 65.89,
      height: 17.86,
      alt: "Discover",
    },
  },
  {
    img: {
      src: "/img/company-logos/google_pay.png",
      width: 55.37,
      height: 22,
      alt: "Google Pay",
    },
  },
];
