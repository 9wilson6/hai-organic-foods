import React from "react";
import Container from "../Container";
import Link from "next/link";
import Item from "./Item";
import Filter from "./Filter";
import Filters from "@/app/filters/page";

export default function ProductGrid() {
  return (
    <>
      <Container>
        <section className="flex">
          <Link href="/filters" className="opacity-60">
            <div className="">
              <Filters />
            </div>
          </Link>

          <div className="px-20">
            <Item />
          </div>
        </section>
      </Container>
    </>
  );
}
