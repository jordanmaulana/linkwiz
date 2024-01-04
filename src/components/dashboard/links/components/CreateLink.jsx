"use client";
import React from "react";
import { GreenButton } from "@/components/shared-ui/GreenButton";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/config/apiUrl";

export const CreateLink = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleCreateLink(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const slug = event.target.slug.value;

    setLoading(true);
    await fetch(`${API_URL}/links`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ name, slug }),
    });
    setLoading(false);
    event.target.reset();

    router.refresh();
  }

  return (
    <div className="rounded-lg border hover:shadow-lg transition duration-300 space-y-4 p-8">
      <h2>Quick Add Link ⚡</h2>
      <form onSubmit={handleCreateLink}>
        <section className="space-y-3">
          <Input isRequired name="name" label="Link Name" className="w-72" />
          <Input isRequired name="slug" label="Slug" className="w-72" />
          <div className="mt-8" />
          <GreenButton type="submit" isDisabled={loading} title={"Submit"} loading={loading} />
        </section>
      </form>
    </div>
  );
};
