import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="max-w-5xl m-auto flex justify-between mt-4 ">
      <a className="font-bold text-2xl" href="/">
        LinkWiz
      </a>
      <div className="flex gap-8 items-center">
        <Link href="/login">Login</Link>
        <Link href="/register">
          <div className="bg-primary px-4 py-2 rounded-lg text-white">Sign Up</div>
        </Link>
      </div>
    </header>
  );
};
