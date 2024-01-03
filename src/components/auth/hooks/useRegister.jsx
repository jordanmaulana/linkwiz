"use client";

import { useState } from "react";
import { API_URL } from "@/config/apiUrl";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const useRegister = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const [isRetypeVisible, setIsRetypeVisible] = useState(false);
  const toggleRetypeVisibility = () => setIsRetypeVisible(!isRetypeVisible);

  async function handleSubmitRegister(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const passwordConfirmation = event.target.passwordConfirmation.value;

    let error = "";

    if (!name) error += "Name must not be empty\n";
    if (!email) error += "Email must not be empty\n";
    if (!password) error += "Password must not be empty\n";
    if (passwordConfirmation !== password)
      error += "Password fields didn't match";

    if (error) {
      alert(error);
      return;
    }

    setLoading(true);

    const res = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (res.status !== 201) {
      setLoading(false);
      toast.error(data.message);
      return;
    }

    setLoading(false);

    toast.success("User registered, please login...");
    router.replace("/login");
  }

  return {
    loading,
    handleSubmitRegister,
    togglePasswordVisibility,
    isPasswordVisible,
    isRetypeVisible,
    toggleRetypeVisibility,
  };
};
