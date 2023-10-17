"use client";
import { createUrl } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSearchClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const val = event.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(createUrl("/search", newParams));
  };
  return (
    <form
      onSubmit={onSearchClick}
      className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
    >
      <input
        key={searchParams?.get("q")}
        type="text"
        name="search"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className="w-full placeholder:text-neutral-500 rounded-lg border bg-white px-4 py-2 text-sm text-slate-800"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-5" />
      </div>
    </form>
  );
}
