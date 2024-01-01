"use client";

import { useState } from "react";
import { REGISTER_URL } from "@/config/apiUrl";
import toast from "react-hot-toast";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const [isRetypeVisible, setIsRetypeVisible] = useState(false);
  const toggleRetypeVisibility = () => setIsRetypeVisible(!isRetypeVisible);

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  }

  async function handleSubmitRegister(callback) {
    const { name, email, password, retypepassword } = registerData;
    let error = "";

    if (!name) error += "Name must not be empty\n";
    if (!email) error += "Email must not be empty\n";
    if (!password) error += "Password must not be empty\n";
    if (retypepassword !== password) error += "Password fields didn't match";

    if (error) {
      alert(error);
      return;
    }

    setLoading(true);

    const res = await fetch(REGISTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();

    if (!data) {
      setLoading(false);
      toast.error("Error registering!");
      return;
    }

    setLoading(false);

    toast.success("User registered, please login...");
    callback(true);
  }

  return {
    loading,
    handleChange,
    handleSubmitRegister,
    togglePasswordVisibility,
    isPasswordVisible,
    isRetypeVisible,
    toggleRetypeVisibility,
  };
};
