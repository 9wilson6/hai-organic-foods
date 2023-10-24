import Container from "@/components/Container";
import { navbarContent } from "@/data/siteData";
import Link from "next/link";
import React, { Suspense } from "react";
import MobileMenu from "./MobileMenu";
import Search from "./Search";
import Image from "next/image";
import { getCurrentUser } from "@/lib/session";
import Avatar from "./Avatar";

export default async function Navbar() {
  const user = await getCurrentUser();
  return (
    <>
      <nav className="relative flex items-center justify-between py-6 lg:py-9">
        <div className="block flex-none md:hidden">
          <MobileMenu />
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full flex-1 md:w-1/3">
            <Link
              href="/"
              className="flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <div className="flex-none text-xl font-medium lg:block">
                {navbarContent.navbar.logo ? (
                  <p className="flex items-center">
                    <span>{navbarContent.navbar.logo}</span>
                    <span className="text-green-500 font-extrabold text-2xl">
                      O
                    </span>
                    rganics
                  </p>
                ) : null}
              </div>
            </Link>
            {navbarContent.navbar.navLinks.length ? (
              <ul className="ml-8 hidden gap-4 text-sm md:flex md:items-center">
                {navbarContent.navbar.navLinks.map((link) => {
                  const { id, href, title } = link;
                  return (
                    <li key={id}>
                      <Link
                        href={href}
                        className="text-neutral-500 underline-offset-4 hover:text-green-500 hover:underline"
                      >
                        {title}
                      </Link>
                    </li>
                  );
                })}
                {user && (
                  <li>
                    <Link
                      href="/myproducts"
                      className="whitespace-nowrap text-neutral-500 underline-offset-4 hover:text-green-500 hover:underline"
                    >
                      My Products
                    </Link>
                  </li>
                )}
              </ul>
            ) : null}
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <Search />
          </div>
          <div className="flex items-center gap-3 justify-end md:w-1/3">
            <Suspense>
              <Avatar />
            </Suspense>
          </div>
        </div>
      </nav>
    </>
  );
}
