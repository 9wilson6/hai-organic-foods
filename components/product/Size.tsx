"use client";
import React, { useState } from "react";

interface SizeProps {
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function Size({ setFormData }: SizeProps) {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const sizes = ["sm", "md", "xl", "2xl", "3xl", "4xl"];
  const handleSizeButtonClick = (size: string) => {
    setSelectedSizes((prevSelectedSizes) => {
      if (prevSelectedSizes.includes(size)) {
        return prevSelectedSizes.filter((s) => s !== size);
      } else {
        return [...prevSelectedSizes, size];
      }
    });
  };

  const handleSubmit = () => {
    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      size: selectedSizes.join(","),
    }));
  };
  return (
    <div>
      {sizes.map((size) => {
        return (
          <button
            key={size}
            className={`border-[0.5px] transition-colors rounded-md text-center py-[2px] px-3 my-6 mr-5 cursor-pointer ${
              selectedSizes.includes(size) ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => handleSizeButtonClick(size)}
          >
            {size}
          </button>
        );
      })}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
