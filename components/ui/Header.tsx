"use client";
import React, { useEffect, useState } from "react";
import Container from "../layouts/Container";
import Link from "next/link";
import { headerContent } from "@/data/siteData";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  }, []);

  return (
    // <header className="fixed w-full top-0 left-0 z-10 bg-opacity-70">
    //   <Container>
    //     <section className="flex items-center justify-between h-16">
    //       <Link href="/">
    //         {headerContent.header.logo && (
    //           <h1 className="text-2xl font-semibold text-white">
    //             {headerContent.header.logo}
    //           </h1>
    //         )}
    //       </Link>
    //       <nav className="bg-white bg-opacity-10 z-20 backdrop-filter backdrop-blur-xl px-6 py-2 rounded-full">
    //         {headerContent.header.navLinks && (
    //           <ul className="flex space-x-8 p-0.5">
    //             {headerContent.header.navLinks.map((link) => {
    //               const { id, href, title } = link;
    //               return (
    //                 <Link
    //                   key={id}
    //                   href={href}
    //                   className="bg-transparent rounded-full hover:bg-white/80 px-4 py-0.5 transition-all"
    //                 >
    //                   {title}
    //                 </Link>
    //               );
    //             })}
    //           </ul>
    //         )}
    //       </nav>
    //       <div className="flex items-center">
    //         <button className="bg-white px-4 py-1.5">Learn More</button>
    //         <button className="bg-white px-4 py-1.5">Get Food</button>
    //       </div>
    //     </section>
    //   </Container>
    // </header>
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-30 shadow-sticky backdrop-blur-lg !transition "
            : "absolute"
        }`}
      >
        <Container>
          <div className="relative -mx-4 flex items-center justify-betwen">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                className={`block w-full text-2xl font-bold text-white ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                }`}
                href="/"
              >
                Hai
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {headerContent.header.navLinks.map((link) => {
                      const { id, href, title } = link;
                      return (
                        <Link
                          href={href}
                          key={id}
                          className="text-white font-semibold"
                        >
                          {title}
                        </Link>
                      );
                    })}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  href="/signup"
                  className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
