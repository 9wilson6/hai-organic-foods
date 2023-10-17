"use client";
import { createUrl } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FormEvent } from "react";
export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const value = event.target as HTMLFormElement;
    const search = value.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(createUrl("/search", newParams));
  }
  return (
    <form
      onSubmit={onSearch}
      className="max-w-[550px] w-full relative lg:w-80 xl:w-full"
    >
      <input
        type="text"
        name="search"
        autoComplete="off"
        key={searchParams?.get("q")}
        defaultValue={searchParams?.get("q") || ""}
        placeholder="Search for a meal"
        className="w-full rounded-lg border bg-[#fef8fa] px-4 py-2 text-sm text-slate-900 placeholder:text-neutral-500"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-5" />
      </div>
    </form>
  );
}
