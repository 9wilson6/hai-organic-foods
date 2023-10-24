"use client";
import Image from "next/image";
import React, { useState } from "react";

interface ImageGalleryProps {
  imageUrls: string;
}

export default function ImageGallery({ imageUrls }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const urlArray = imageUrls.split(",");
  return (
    <div className="images grid grid-cols-7">
      <div className="all-images flex flex-col col-span-2 justify-center">
        {urlArray.map((url, index) => {
          return (
            <div key={index} className="image relative rounded-lg">
              <Image
                height={70}
                width={70}
                onClick={() => setSelectedImage(index)}
                src={url}
                alt={url}
                className={`w-[70px] h-[70px] rounded-lg mb-3 p-1 object-cover object-top ${
                  selectedImage === index
                    ? "border-[1px] border-green-500"
                    : "border-[1px border-green-200"
                }`}
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5">
        <Image
          width={400}
          height={400}
          src={urlArray[selectedImage]}
          alt=""
          className={`h-[300px] w-[600px] object-cover`}
        />
      </div>
    </div>
  );
}
