import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="w-full max-w-7xl px-5 mx-auto">{children}</div>;
}
