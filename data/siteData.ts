import { v4 as uuidv4 } from "uuid";

export const navbarContent = {
  navbar: {
    logo: "Hai",

    navLinks: [
      // { id: uuidv4(), title: "Home", href: "/" },
      { id: uuidv4(), title: "Meal Kits", href: "/meal-kits" },
      { id: uuidv4(), title: "FAQ", href: "/faq" },
      { id: uuidv4(), title: "Contact", href: "/contact" },
    ],
    cta: {
      label: "Deliver",
      href: "/deliver",
    },
  },
};
