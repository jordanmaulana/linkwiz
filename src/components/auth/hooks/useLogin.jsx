"use client";

import { useState } from "react";
import { API_URL } from "@/config/apiUrl";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const useLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  async function handleSubmitLogin(event) {
    setLoading(true);
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const res = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.status !== 200) {
      setLoading(false);
      toast.error(`${data.message}`);
      return;
    }

    Cookies.set("token", data.token);
    Cookies.set("userId", data.data.id);
    localStorage.setItem("userdata", JSON.stringify(data.data));

    setLoading(false);
    toast.success("Login succesfully, redirecting...");
    setTimeout(() => router.push("/dashboard"), 2000);
  }

  return {
    loading,
    handleSubmitLogin,
    togglePasswordVisibility,
    isPasswordVisible,
  };
};
