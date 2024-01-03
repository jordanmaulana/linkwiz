import React from "react";

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
      {children}
    </div>
  );
}
