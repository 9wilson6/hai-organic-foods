"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

export default function Avatar() {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowProfile(!showProfile)}
        className="relative cursor-pointer"
      >
        <Image
          src="/images/placeholder.jpg"
          width={50}
          height={50}
          className="w-[25px] h-[25px] rounded-full object-cover"
          alt="Avatar"
        />
        <div
          className={`absolute bg-white rounded-lg p-2 shadow-lg z-[2] ${
            showProfile ? "" : "hidden"
          }`}
        >
          <Link href="/sign">Signin</Link>
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
