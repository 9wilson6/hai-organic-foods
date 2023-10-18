import { v4 as uuidv4 } from "uuid";

export const navbarContent = {
  navbar: {
    logo: "Hai",

    navLinks: [
      // { id: uuidv4(), title: "Home", href: "/" },
      { id: uuidv4(), title: "Shop", href: "/shop" },
      // { id: uuidv4(), title: "FAQ", href: "/faq" },
      // { id: uuidv4(), title: "Contact", href: "/contact" },
    ],
    cta: {
      label: "Deliver",
      href: "/deliver",
    },
  },
};

export const heroContent = {
  ingredients:
    "Dive into delicious meals crafted from local, organic ingredients. Every bite supports the planet",
  delivery:
    "Delivery of fresh produce with a traceability from the organic farm to your plate with confidence",
};
