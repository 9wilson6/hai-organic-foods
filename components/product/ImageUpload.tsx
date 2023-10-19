import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

interface ImageUploadProps {
  info: any;
  updateInfo: React.Dispatch<React.SetStateAction<any>>;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imageUrls: string[];
  setImageUrls: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ImageUpload({
  info,
  updateInfo,
  handleImageChange,
  imageUrls,
  setImageUrls,
}: ImageUploadProps) {
  const onUpload = (result: any) => {
    updateInfo(result.info.secure_url);
    const newImageUrl = result.info.secure_url;
    setImageUrls((prevImageUrls) => [...prevImageUrls, newImageUrl]);
    handleImageChange(result);
  };

  const handleDeleteImage = (index: number) => {
    setImageUrls((prevImageUrls) => {
      const updateImageUrls = [...prevImageUrls];
      updateImageUrls.splice(index, 1);
      return updateImageUrls;
    });
  };
  return (
    <div>
      <section className="mb-10">
        <CldUploadWidget uploadPreset="zugptr70" onUpload={onUpload}>
          {({ open }: any) => {
            function handleOnclick(e: React.MouseEvent<HTMLButtonElement>) {
              e.preventDefault();
              open();
            }
            return (
              <button
                className="border-[1px] rounded-lg p-1 px-2"
                onClick={handleOnclick}
              >
                Upload Food Images
              </button>
            );
          }}
        </CldUploadWidget>
      </section>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {imageUrls.map((imageUrl, index) => {
          return (
            <div key={index} className="flex flex-col justify-center">
              <Image
                src={imageUrl}
                width={300}
                height={300}
                className="w-[250px] h-[300px] object-cover object-top"
                alt={`upload images ${index + 1}`}
              />
              <button
                className="border-[1px] rounded-lg p-1 px-2 mt-5"
                onClick={() => handleDeleteImage(index)}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
