import ImageGallery from "@/components/imageGallery";
import Info from "@/components/info";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

export default async function SingleProduct({
  params,
}: {
  params: { slug: string };
}) {
  const productId = parseInt(params.slug, 10);
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  const urlString = product?.images;
  return (
    <div className="max-w-[1280px] mx-auto px-5 py-5">
      {/* <div className="font-semibold text-2xl mb-2">
        <Link href="/">Hai Organics</Link>
      </div> */}

      {product && (
        <div className="grid grid-cols-2 mt-10 gap-14">
          {urlString && (
            <>
              <ImageGallery imageUrls={urlString} />
            </>
          )}
          <Info {...product} />
        </div>
      )}
    </div>
  );
}
