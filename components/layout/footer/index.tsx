import React from "react";

export default function Footer() {
  return (
    <footer className="h-8 mt-8 border-t-neutral-100 py-12">
      <p className="text-center text-neutral-500 text-sm">
        &copy; Hai Organics Foods, {new Date().getFullYear()}. all rights
        reserved{" "}
      </p>
    </footer>
  );
}
