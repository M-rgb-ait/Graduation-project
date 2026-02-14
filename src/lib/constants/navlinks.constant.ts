import {
  ClipboardList,
  Gift,
  Headset,
  House,
  Info,
  PartyPopper,
} from "lucide-react";

export const HEADER_NAV_LINKS = [
  {
    name: "home",
    path: "/",
    icon: House,
  },
  {
    name: "products",
    path: "/products",
    icon: Gift,
  },
  {
    name: "categories",
    path: "/categories",
    icon: ClipboardList,
  },
  {
    name: "occasions",
    path: "/occasions",
    icon: PartyPopper,
  },
  {
    name: "contact",
    path: "/contact",
    icon: Headset,
  },
  {
    name: "about",
    path: "/about",
    icon: Info,
  },
];

export const FOOTER_NAV_LINKS = [
  ...HEADER_NAV_LINKS,
  {
    name: "terms-conditions",
    path: "/terms-and-conditions",
  },
  {
    name: "privacy-policy",
    path: "/privacy-policy",
  },
  {
    name: "faqs",
    path: "/faqs",
  },
];
