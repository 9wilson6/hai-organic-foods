"use client";
import { navbarContent } from "@/data/siteData";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import Search from "./Search";

export default function MobileMenu() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="open mobile menu"
        className="flex h-9 w-9 items-center justify-center rounded-md border border-[#01b48c]"
      >
        <Bars3Icon className="h-6" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-[90%] flex-col bg-[#FDEFF3] pb-6">
              <div className="p-4">
                <button
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                  className="mb-4 flex h-9 w-9 items-center justify-center rounded-md border border-[#01b48c] text-slate-900 transition-colors"
                >
                  <XMarkIcon className="h-6" />
                </button>
                <div className="my-8 w-full border-t border-neutral-200 py-8">
                  <Search />
                </div>
                {navbarContent.navbar.navLinks ? (
                  <ul className="flex w-full flex-col">
                    {navbarContent.navbar.navLinks.map((link) => {
                      const { id, href, title } = link;
                      return (
                        <li
                          key={id}
                          className="py-2 text-base text-slate-900 transition-colors hover:text-neutral-900"
                        >
                          <Link href={href} onClick={closeMobileMenu}>
                            {title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
