"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { signIn, signOut, useSession } from "next-auth/react";
import { useClickOutside } from "@/hooks/useClickOutside";

export default function Avatar() {
  const [showProfile, setShowProfile] = useState(false);
  const ref = useClickOutside(() => setShowProfile(false));
  const { data: session } = useSession();
  console.log(session);

  const LogOut = () => {
    if (session && session.user) {
      return (
        <ul className="py-5 text-sm px-4 text-neutral-600">
          <li className="hover:bg-gray-100 hover:text-neutral-900 whitespace-nowrap px-1 w-full py-2 cursor-pointer">
            {session.user.name}
          </li>
          <li className="whitespace-nowrap hover:bg-neutral-50 hover:text-neutral-900 px-1 py-2 cursor-pointer">
            <Link href="/addproduct">Add Meal</Link>
          </li>
          <li
            className="whitespace-nowrap hover:text-red-600 px-1 py-2 cursor-pointer"
            onClick={() => signOut()}
          >
            Sign out
          </li>
        </ul>
      );
    }
    return (
      <ul>
        <li
          onClick={() => signIn()}
          className="whitespace-nowrap hover:bg-gray-100 hover:text-neutral-900 px-5 py-2 cursor-pointer"
        >
          Sign in
        </li>
      </ul>
    );
  };
  return (
    <>
      <div
        ref={ref}
        onClick={() => setShowProfile(!showProfile)}
        className="relative cursor-pointer"
      >
        <Image
          src={`/images/placeholder.jpg`}
          width={50}
          height={50}
          className="w-[25px] h-[25px] rounded-full object-cover"
          alt="Avatar"
        />
        <div
          className={`absolute right-0 bg-white rounded-lg p-2 shadow-xl z-[2] ${
            showProfile ? "" : "hidden"
          }`}
        >
          <LogOut />
        </div>
      </div>
      <Link href="/cart">
        <div className="p-1 bg-gray-100 rounded-full">
          <CiShoppingCart size={16} />
        </div>
      </Link>
    </>
  );
}
