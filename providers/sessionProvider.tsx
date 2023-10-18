"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

type sessionProviderProps = {
  children: React.ReactNode;
};

export default function Provider({ children }: sessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
