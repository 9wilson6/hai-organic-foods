"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "@/components/grid/Filter";
import Link from "next/link";
import Image from "next/image";
export default function Filters() {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [allHexValues, setHexValues] = useState<string[]>([]);
  const [selectedHexValues, setSelectedHexValues] = useState<string[]>([]);
  const [price, setPrice] = useState({
    min: 0,
    max: 10,
  });

  const [response, setResponse] = useState<any[]>([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios
          .get("/api/filterproduct", {
            params: {
              categories: selectedCategories,
              size: selectedSize,
              price: {
                min: price.min,
                max: price.max,
              },
              colors: selectedHexValues,
            },
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log("response", response.data);
            // setResponse(response.data);
          });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchdata();
  }, [selectedCategories, selectedSize, selectedHexValues, price]);

  return (
    <div className="px-5 max-w-[1280px]">
      <div className="">
        <div>
          <Filter
            price={price}
            setPrice={setPrice}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
      </div>
      <div className="px-10">
        {/* <h1 className="py-3 text-lg font-medium">Filtered Food</h1> */}
        <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-12 mt-5">
          {response &&
            response.map((product: any) => {
              return (
                <Link href={`/dashboard/${product.id}`} key={product.id}>
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
              );
            })}
        </section>
      </div>
    </div>
  );
}
