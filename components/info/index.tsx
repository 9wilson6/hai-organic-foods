"use client";
import React from "react";
import { CiShoppingCart, CiCreditCard1 } from "react-icons/ci";
import { SlTag } from "react-icons/sl";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiCubeFocusThin } from "react-icons/pi";
import { AiTwotoneEdit } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ReactStars from "react-rating-star-with-type";
import AddCart from "../addCart";

interface InfoProps {
  id: number;
  title: string;
  description: string;
  category: string;
  style: string;
  store: string;
  size: string;
  inventory: number;
  color: string;
  price: number;
  images: string;
  userId: number;
  //   rating: number;
  //   numbercomments: number;
}

export default function Info({
  id,
  title,
  description,
  category,
  style,
  store,
  size,
  inventory,
  color,
  price,
  images,
  userId,
}: InfoProps) {
  const { data: session } = useSession();
  const currentUserId = session?.user.id;
  return (
    <div className="relative">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <h3 className="text-sm text-neutral-500">{store}</h3>
      <div className="flex items-center space-x-12 mt-4">
        <ReactStars value={4} size={20} />
        {/* <span className="flex items-start space-x-3">
          <FaRegCommentDots size={22} />
        </span> */}
      </div>
      <div className="flex items-center mt-7 space-x-10">
        <AddCart productId={id} />
      </div>
      <hr className="w-9/12 mt-10" />

      <div className="grid grid-cols-2 gap-10 opacity-70 mt-5">
        <span className="text-sm fles items-center space-x-4">
          <span className="p-2 bg-gray-100 inline-block rounded-full">
            <CiCreditCard1 size={24} />
          </span>
          <p>Secure Payment</p>
        </span>
        {/* <span className="text-sm fles items-center space-x-4">
          <span className="p-2 bg-gray-100 inline-block rounded-full">
            <SlTag size={24} />
          </span>
          <p>Size & Fit</p>
        </span> */}
        <span className="text-sm fles items-center space-x-4">
          <span className="p-2 bg-gray-100 inline-block rounded-full">
            <LiaShippingFastSolid size={24} />
          </span>
          <p>Free Shipping</p>
        </span>
        <span className="text-sm fles items-center space-x-4">
          <span className="p-2 bg-gray-100 inline-block rounded-full">
            <PiCubeFocusThin size={24} />
          </span>
          <p>Free Shipping & Return</p>
        </span>
      </div>
      {currentUserId === userId && (
        <Link href={`/edit/${id}`}>
          <span className="absolute top-0 right-0 p-2 bg-green-600 rounded-full text-white cursor-pointer">
            <AiTwotoneEdit size={24} />
          </span>
        </Link>
      )}
    </div>
  );
}
