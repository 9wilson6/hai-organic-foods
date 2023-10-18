"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignUpForm() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onRegister = () => {
    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
    };

    axios
      .post("/api/register", data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        router.push("/signin");
      });
  };
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] py-2">
      <div className="p-10 rounded-lg shadow-lg flex flex-col">
        <h1 className="text-xl font-medium mb-4">Sign up</h1>
        {/* Name */}
        <label className="mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={user.name}
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="p-2 border-gray-300 border-[1px] rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        />
        {/* Email */}
        <label className="mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={user.email}
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="p-2 border-gray-300 border-[1px] rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        />
        {/* Password */}
        <label className="mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={user.password}
          placeholder="Name"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="p-2 border-gray-300 border-[1px] rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        />
        <button
          onClick={onRegister}
          className="p-2 border bg-green-500 text-white border-gray-300 mt-2 mb-4 focus:outline-none"
        >
          Register Now
        </button>
        <Link
          href="/signin"
          className="text-sm text-center mt-5 text-blue-600 hover:underline transition-all"
        >
          Already have an account
        </Link>
        <Link href="/" className="text-center mt-4">
          Home
        </Link>
      </div>
    </section>
  );
}
