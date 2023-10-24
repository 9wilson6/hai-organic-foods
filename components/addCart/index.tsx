"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
interface AddcartProps {
  productId: number;
}

export default function AddCart({ productId }: AddcartProps) {
  const { data: session } = useSession();
  const id = session?.user.id;
  const router = useRouter();

  const handleCart = async () => {
    if (session?.user) {
      try {
        const res = await axios
          .post("/api/cart", {
            productId: productId,
            userId: id,
          })
          .then(() => {
            router.push("/cart");
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      router.push("/signin");
    }
  };

  return (
    <div
      onClick={handleCart}
      className="flex items-center space-x-4 bg-green-500 hover:bg-green-600 transition-colors text-white px-6 p-2 rounded-full cursor-pointer"
    >
      <span>
        <CiShoppingCart size={24} />
      </span>
      <span className="text-sm">Add to Cart</span>
    </div>
  );
}
