import { Header } from "@/components/shared-ui/Header";
import Image from "next/image";
import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="max-w-7xl m-auto h-screen grid grid-cols-1 lg:grid-cols-3 ">
        <section className="flex flex-col items-start justify-center p-16 max-w-2xl mb-32 relative">
          <Image
            src="/spot.png"
            width={355}
            height={393}
            className="absolute -z-10"
          />
          <div className="font-bold text-5xl">Start Boosting Your Sales</div>
          <div className="font-semibold mt-8">
            Create 1 link for all your customer service agents
          </div>
        </section>
        <Image
          src="/rocket.png"
          width={355}
          height={393}
          className="self-center  mt-24"
        />
        <div className="flex justify-center items-center">
          <section>{children}</section>
        </div>{" "}
      </main>
    </div>
  );
};
