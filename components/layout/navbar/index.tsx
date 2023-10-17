import Container from "@/components/Container";
import { navbarContent } from "@/data/siteData";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
const { SITE_NAME } = process.env;

export default function Navbar() {
  return (
    <Container>
      <nav className="relative flex items-center justify-between p-6 lg:px-6">
        <div className="block flex-none md:hidden">
          <MobileMenu />
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/4">
            <Link
              href="/"
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <div className="ml-2 flex-none text-slate-900 text-base font-extrabold  lg:block">
                <span className="text-[#01b48c]">Hai</span>Organic
              </div>
            </Link>
          </div>
          <div className="hidden justify-center md:flex md:w-1/2">
            {navbarContent.navbar.navLinks.length ? (
              <ul className="hidden gap-12 text-sm md:flex md:items-center">
                {navbarContent.navbar.navLinks.map((link) => {
                  const { id, href, title } = link;
                  return (
                    <li key={id}>
                      <Link
                        href={href}
                        className="text-neutral-600 font-medium tracking-[1px] underline-offset-4 hover:text-slate-900 hover:underline"
                      >
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
          <div className="flex justify-end md:w-1/4">
            {navbarContent.navbar.cta.label ? (
              <Link
                href={navbarContent.navbar.cta.href}
                className="bg-slate-800 flex items-center gap-1 hover:bg-slate-900 text-white px-2 py-1.5 rounded-sm text-sm font-medium"
              >
                {navbarContent.navbar.cta.label}
                <span className="hidden md:block">my food</span>
              </Link>
            ) : null}
          </div>
        </div>
      </nav>
    </Container>
  );
}
