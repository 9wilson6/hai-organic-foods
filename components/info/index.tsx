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
    </div>
  );
}
