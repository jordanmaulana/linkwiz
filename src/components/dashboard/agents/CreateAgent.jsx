"use client";
import React from "react";
import { GreenButton } from "@/components/shared-ui/GreenButton";
import {
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/config/apiUrl";

export const CreateAgent = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleCreateAgent(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const slug = event.target.slug.value;

    setLoading(true);
    await fetch(`${API_URL}/agents`, {
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
    <div className="rounded-lg shadow-lg space-y-4 p-8">
      <h2>Quick Add Agent ⚡</h2>
      <form onSubmit={handleCreateAgent}>
        <section className="space-y-3">
          <Input name="name" label="Link Name" className="w-72" />
          <Input name="phone" label="Phone" className="w-72" />
          <div className="mt-8" />
          <GreenButton
            type="submit"
            isDisabled={loading}
            title={"Submit"}
            loading={loading}
          />
        </section>
      </form>
    </div>
  );
};
