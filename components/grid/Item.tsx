import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ItemProps {}
export default async function Item() {
  const products = await prisma.product.findMany();
  if (products.length === 0) {
    return <div>empty</div>;
  }
  //   console.log(products);

  return (
    <div>
      <h1 className="py-3 text-xl">Vegetables</h1>
      <section className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-20">
        {products.map((product) => {
          return (
            <article key={product.id} className="">
              <Link href={`/dashboard/${product.id}`}>
                <div className="relative rounded-lg">
                  <Image
                    src={product.images.split(",")[0]}
                    width={300}
                    height={200}
                    alt={product.title}
                    className="w-[250px] h-[200px] object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <h1 className="text-[14px] font-medium max-w-[150px] whitespace-nowrap overflow-hidden">
                      {product.title}
                    </h1>
                    <p className="text-[13px] opacity-60">{product.store}</p>
                  </div>
                  <span className="px-2 font-medium bg-gray-100 rounded-lg">
                    ${product.price}.00
                  </span>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}
