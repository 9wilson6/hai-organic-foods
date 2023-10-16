import { v4 as uuidv4 } from "uuid";

export const headerContent = {
  header: {
    logo: "Hai",

    navLinks: [
      { id: uuidv4(), title: "Products", href: "/products" },
      { id: uuidv4(), title: "FAQ", href: "/faq" },
      { id: uuidv4(), title: "About", href: "/about" },
    ],
  },
};
