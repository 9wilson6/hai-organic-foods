import Hero from "@/components/elements/Hero";
import Container from "@/components/layouts/Container";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-[1900px]">
      <Hero />
      {/* <Container>
        <h1 className="">Home</h1>
        <div className="relative">
          <div className="absolute w-full h-[300px]">
            <Image
              src="/images/hero-img.jpg"
              fill
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </Container> */}
    </div>
  );
}
