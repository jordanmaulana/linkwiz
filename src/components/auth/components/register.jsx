"use client";

import { GreenButton } from "@/components/shared-ui/GreenButton";
import { Button, Input } from "@nextui-org/react";
import React from "react";

export const Register = () => {
  async function handleRegister(event) {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const res = await fetch("/api/auth/register", {
      method: "POST",
      BODY: JSON.stringify({ fullName, email, password }),
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <main className="space-y-3 p-16 rounded-lg flex flex-col shadow-xl ">
      <div className="block lg:hidden">
        <div className="relative w-full h-[64px] ">
          <Image
            src="/logo.png"
            fill
            className="object-scale-down bg-gradient-to-br from-pink to-purple rounded-xl"
            alt="logo"
          />
        </div>
      </div>
      <h1 className="text-lg font-semibold">Register</h1>
      <form onSubmit={handleRegister}>
        <section>
          <Input name="fullName" placeholder="Full Name" />
          <Input name="email" placeholder="Email" />
          <Input name="password" placeholder="Password" type="password" />
          <Button type="submit">Register</Button>
          <Input
            name="name"
            label="Name"
            onChange={handleChange}
            className="w-72"
          />
          <Input
            name="email"
            label="Email Address"
            onChange={handleChange}
            className="w-72"
          />
          <Input
            name="password"
            label="Password"
            type={isPasswordVisible ? "text" : "password"}
            onChange={handleChange}
            className="w-72"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <EyeOff /> : <Eye />}
              </button>
            }
          />
          <Input
            name="passwordConfirmation"
            label="Password Confirmation"
            type={isRetypeVisible ? "text" : "password"}
            onChange={handleChange}
            className="w-72"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleRetypeVisibility}
              >
                {isRetypeVisible ? <EyeOff /> : <Eye />}
              </button>
            }
          />
          <div className="mt-8" />

          <GreenButton
            type="submit"
            className="mt-16"
            isDisabled={loading}
            clicked={() => {
              handleSubmitRegister((success) => {
                if (success) {
                  router.replace("/login");
                }
              });
            }}
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
