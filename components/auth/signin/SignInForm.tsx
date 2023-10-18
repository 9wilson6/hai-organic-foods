"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
export default function SignInForm() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = () => {
    try {
      signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: true,
        callbackUrl: "/",
      });
    } catch (error) {
      console.log("Error while signing in");
    }
  };
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] py-2">
      <div className="p-10 rounded-lg shadow-lg flex flex-col">
        <h1 className="text-xl font-medium mb-4">Sign in</h1>

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
          onClick={onLogin}
          className="p-2 border bg-green-500 text-white border-gray-300 mt-2 mb-4 focus:outline-none"
        >
          Sign in Now
        </button>
        <Link
          href="/signup"
          className="text-sm text-center mt-5 text-blue-600 hover:underline transition-all"
        >
          Don&apos;t have an account? Create
        </Link>
        <Link href="/" className="text-center mt-4">
          Home
        </Link>
      </div>
    </section>
  );
}
