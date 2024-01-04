"use client";
import React from "react";
import { GreenButton } from "@/components/shared-ui/GreenButton";
import { Input, Select, SelectItem } from "@nextui-org/react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/config/apiUrl";

export const UpdateLink = ({ data }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleUpdate(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const slug = event.target.slug.value;

    setLoading(true);
    await fetch(`${API_URL}/links/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ name, slug }),
    });
    setLoading(false);
    event.target.reset();

    router.push("/dashboard/links");
  }

  return (
    <div className="rounded-lg shadow-lg space-y-4 p-8 w-min m-auto">
      <h2>Update Agent</h2>
      <form onSubmit={handleUpdate}>
        <section className="space-y-3">
          <Input
            isRequired
            name="name"
            label="Link Name"
            className="w-72"
            defaultValue={`${data.name}`}
          />
          <Input
            isRequired
            name="slug"
            label="Slug"
            className="w-72"
            defaultValue={`${data.slug}`}
          />

          <div className="mt-8 w-72">
            <GreenButton
              type="submit"
              isDisabled={loading}
              title={"Submit"}
              loading={loading}
            />
          </div>
        </section>
      </form>
    </div>
  );
};
