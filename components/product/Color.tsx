"use client";
import React, { useEffect, useState } from "react";
import { GrAdd } from "react-icons/gr";
import ColorPicker from "react-pick-color";

interface ColorProps {
  Color: string;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function Color({ Color, setFormData }: ColorProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [color, setColor] = useState("#fff");

  const colorArray: string[] = Color.split(",");
  const [selectedColors, setSelectedColors] = useState(colorArray);

  if (colorArray.length < 0) {
    setSelectedColors([]);
  }

  const handleColorButtonClick = () => {
    setSelectedColors((prevSelectedColors) => [...prevSelectedColors]);
    setOpen(false);
  };

  useEffect(() => {
    const handleSelectedColors = () => {
      setFormData((prevFormData: FormData) => ({
        ...prevFormData,
        color: selectedColors.join(","),
      }));
    };

    handleSelectedColors();
  }, [selectedColors, setFormData]);

  const handleDeleteColor = (indexToDelete: number) => {
    setSelectedColors((prevSelectedColors) => {
      const updateColors = [...prevSelectedColors];
      updateColors.splice(indexToDelete, 1);
      return updateColors;
    });
  };

  return (
    <>
      <div className="flex items-center justify-between mt-3">
        <button
          className="block border-[1px] rounded-lg px-3 text-[14px]"
          onClick={() => setOpen(!open)}
        >
          Choose
        </button>
        {open && (
          <ColorPicker
            color={color}
            onChange={(color) => setColor(color.hex)}
          />
        )}
        <button
          className="flex items-center spac-x-1 border-[1px] rounded-lg p-1 px-3 text-[14px]"
          onClick={handleColorButtonClick}
        >
          Add <GrAdd className="ml-1" size={16} />
        </button>
      </div>
      <div className="mt-5">
        {selectedColors.map((selectedColor, index) => (
          <div key={index} className="flex items-center space-x-4 mb-2">
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                backgroundColor: selectedColor,
                display: "inline-block",
              }}
            ></div>
            <span className="border-[1px] rounded-lg p-1 px-3 text-[14px]">
              {selectedColor}
            </span>
            <button
              className="border-[1px] rounded-lg p-1 px-3 text-[14px]"
              onClick={() => handleDeleteColor(index)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
