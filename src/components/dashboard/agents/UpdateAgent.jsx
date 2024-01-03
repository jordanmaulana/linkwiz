"use client";
import React from "react";
import { GreenButton } from "@/components/shared-ui/GreenButton";
import { Input, Select, SelectItem } from "@nextui-org/react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/config/apiUrl";

export const UpdateAgent = ({ data, links }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [currentLink, setCurrentLink] = useState(data.linkId);

  async function handleUpdate(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const link = event.target.link.value;

    setLoading(true);
    await fetch(`${API_URL}/agents/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ name, phone, linkId: link }),
    });
    setLoading(false);
    event.target.reset();

    router.refresh();
  }

  return (
    <div className="rounded-lg shadow-lg space-y-4 p-8 w-min m-auto">
      <h2>Update Agent</h2>
      <form onSubmit={handleUpdate}>
        <section className="space-y-3">
          <Input
            isRequired
            name="name"
            label="Name"
            className="w-72"
            defaultValue={`${data.name}`}
          />
          <Input
            isRequired
            name="phone"
            label="Phone"
            className="w-72"
            defaultValue={`${data.phone}`}
          />

          <Select
            isRequired
            label="Link"
            placeholder="Select a Link"
            className="w-72"
            name="link"
            onChange={(e) => {
              setCurrentLink(e.target.value);
            }}
            selectedKeys={[currentLink]}
          >
            {links?.map((link) => (
              <SelectItem key={link.id} value={link.id}>
                {link.slug}
              </SelectItem>
            ))}
          </Select>

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
