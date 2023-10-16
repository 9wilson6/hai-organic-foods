import React from "react";
import Container from "../layouts/Container";
import heroImage from "../../public/images/hero-img.jpg";
import Image from "next/image";
export default function Hero() {
  const heroStyle = {
    background: `url(${heroImage}) no-repeat`,
  };
  return (
    <section className={` ${heroStyle} `}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 h-[50vh] relative">
          <Image
            width={1920}
            height={300}
            src="/images/hero-img.jpg"
            alt="Hero Image"
            className="mb-5 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <Container>
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Hai Organic Foods
              </h1>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
