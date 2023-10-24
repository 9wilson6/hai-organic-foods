import React from "react";
import Container from "../Container";
import Link from "next/link";
import Item from "./Item";
import Filter from "./Filter";

export default function ProductGrid() {
  return (
    <>
      <Container>
        <section className="flex">
          <Link href="/filter" className="opacity-60">
            <div className="">
              <Filter />
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
