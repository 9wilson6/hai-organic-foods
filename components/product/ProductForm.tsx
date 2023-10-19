"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Size from "./Size";
import Color from "./Color";
import TextArea from "./TextArea";
import ImageUpload from "./ImageUpload";
import axios from "axios";
export default function ProductForm() {
  const { data: session } = useSession();
  const id = session?.user.id;
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: `
    <div>
    <p>
    Enter your text here ....
    </p>
    </div>
    `,
    category: "",
    style: "",
    size: "",
    inventory: 0,
    color: "#22C55E",
    price: 0,
    images: "",
    userId: id,
    store: "",
  });

  const [Description, setDescription] = useState("");
  const [info, setInfo] = useState();
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const price =
      e.target.name === "price"
        ? parseInt(e.target.value)
        : parseInt(e.target.value);
    const inventory =
      e.target.name === "inventory"
        ? parseInt(e.target.value)
        : parseInt(e.target.value);

    setFormData({
      ...formData,
      [e.target.name]: price,
      [e.target.name]: inventory,
    });
  };

  const handleImageChange = () => {
    const strImages = JSON.stringify(imageUrls);
    setFormData({
      ...formData,
      images: strImages,
      description: Description,
      userId: id,
    });
  };

  //   useEffect(() => {
  //     console.log(formData.images);
  //     console.log(formData);
  //   }, [formData]);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: Description,
      images: imageUrls.toString(),
      userId: id,
    }));
  }, [imageUrls, id, Description]);

  const postData = async () => {
    handleImageChange();
    try {
      const res = await axios.post("/api/addproduct", formData);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="px-5 max-w-[1200px] mx-auto mt-16 mb-24">
      <h1 className="text-3xl font-semibold py-6">
        Add your <span className="text-green-500">Organic </span>
        Meal
      </h1>
      <div className="text-slate-900 mt-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {/* Title */}
          <div>
            <label htmlFor="title" className="font-medium">
              Title
            </label>
            <input
              type="text"
              className="w-full mt-3 h-[50px] border-[1px] rounded-lg focus:border-green-500 px-3 focus:border-2 outline-none"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          {/* Category */}
          <div>
            <label htmlFor="category" className="font-medium">
              Category
            </label>
            <input
              type="text"
              className="w-full mt-3 h-[50px] border-[1px] rounded-lg focus:border-green-500 px-3 focus:border-2 outline-none"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          {/* Style */}
          <div>
            <label htmlFor="style" className="font-medium">
              Style
            </label>
            <input
              type="text"
              className="w-full mt-3 h-[50px] border-[1px] rounded-lg focus:border-green-500 px-3 focus:border-2 outline-none"
              name="style"
              value={formData.style}
              onChange={handleChange}
            />
          </div>
          {/* Store */}
          <div>
            <label htmlFor="store" className="font-medium">
              Store
            </label>
            <input
              type="text"
              className="w-full mt-3 h-[50px] border-[1px] rounded-lg focus:border-green-500 px-3 focus:border-2 outline-none"
              name="store"
              value={formData.store}
              onChange={handleChange}
            />
          </div>
          {/* Store */}
          <div>
            <label htmlFor="size" className="font-medium">
              Size
            </label>
            <input
              type="text"
              className="w-full mt-3 h-[50px] border-[1px] rounded-lg focus:border-green-500 px-3 focus:border-2 outline-none"
              name="size"
              value={formData.size}
              onChange={handleChange}
            />
            <Size setFormData={setFormData} />
          </div>
          {/* Store */}
          <div>
            <label htmlFor="inventory" className="font-medium">
              Inventory
            </label>
            <input
              type="number"
              className="w-full mt-3 h-[50px] border-[1px] rounded-lg focus:border-green-500 px-3 focus:border-2 outline-none"
              name="inventory"
              value={formData.inventory}
              onChange={handlePriceChange}
            />
          </div>
          {/* Store */}
          <div>
            <label htmlFor="price" className="font-medium">
              Price
            </label>
            <input
              type="number"
              className="w-full mt-3 h-[50px] border-[1px] rounded-lg focus:border-green-500 px-3 focus:border-2 outline-none"
              name="price"
              value={formData.price}
              onChange={handlePriceChange}
            />
          </div>
          <section>
            {/* Store */}
            <div>
              <label htmlFor="color" className="font-medium">
                Color
              </label>
              <input
                type="text"
                className="w-full mt-3 h-[50px] border-[1px] rounded-lg focus:border-green-500 px-3 focus:border-2 outline-none"
                name="color"
                value={formData.color}
                onChange={handlePriceChange}
              />
            </div>
            <Color setFormData={setFormData} Color={formData.color} />
          </section>
        </div>
        <label htmlFor="" className="mt-10 inline-block font-medium">
          Description of organic food
        </label>
        <TextArea
          setDescription={setDescription}
          description={formData.description}
        />
        <label htmlFor="" className="mt-10 inline-block font-medium">
          Upload Images
        </label>
        <ImageUpload
          info={info}
          updateInfo={setInfo}
          imageUrls={imageUrls}
          setImageUrls={setImageUrls}
          handleImageChange={handleImageChange}
        />
        <button
          onClick={postData}
          className="text-white rounded-lg px-5 py-2 mt-10 border-[1px] bg-green-500"
        >
          Submit
        </button>
      </div>
    </section>
  );
}
