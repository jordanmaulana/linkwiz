"use client";

import { GreenButton } from "@/components/shared-ui/GreenButton";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import Link from "next/link";

import { useRegister } from "../hooks/useRegister";
import Image from "next/image";

import { Eye, EyeOff } from "lucide-react";

export const Register = () => {
  const { loading, handleSubmitRegister, togglePasswordVisibility, isPasswordVisible, isRetypeVisible, toggleRetypeVisibility } = useRegister();

  return (
    <main className="space-y-3 p-16 rounded-xl flex flex-col border">
      <div className="block lg:hidden">
        <div className="relative w-full h-[64px] ">
          <Image src="/logo.png" fill className="object-scale-down bg-gradient-to-br from-pink to-purple rounded-xl" alt="logo" />
        </div>
      </div>
      <h1 className="text-lg font-semibold">Register</h1>
      <form onSubmit={handleSubmitRegister}>
        <section className="space-y-3 ">
          <Input name="name" label="Full Name" className="w-72" />
          <Input name="email" label="Email Address" className="w-72" />
          <Input
            name="password"
            label="Password"
            type={isPasswordVisible ? "text" : "password"}
            className="w-72"
            endContent={
              <button className="focus:outline-none" type="button" onClick={togglePasswordVisibility}>
                {isPasswordVisible ? <EyeOff /> : <Eye />}
              </button>
            }
          />
          <Input
            name="passwordConfirmation"
            label="Password Confirmation"
            type={isRetypeVisible ? "text" : "password"}
            className="w-72"
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleRetypeVisibility}>
                {isRetypeVisible ? <EyeOff /> : <Eye />}
              </button>
            }
          />
          <div className="mt-8" />

          <GreenButton
            type="submit"
            className="mt-16"
            isDisabled={loading}
            // clicked={() => {
            //   handleSubmitRegister((success) => {
            //     if (success) {
            //       router.replace("/login");
            //     }
            //   });
            // }}
            title={"Register"}
            loading={loading}
          />
        </section>
      </form>
      <div className="flex gap-1 text-sm justify-center">
        <div>Have an account?</div>
        <Link href="/login" className="text-blue-600 underline">
          Login
        </Link>
      </div>
    </main>
  );
};
