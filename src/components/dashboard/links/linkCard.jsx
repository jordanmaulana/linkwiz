"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import React from "react";
import { MoreHorizontal } from "lucide-react";
import {
  Avatar,
  Switch,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { extractInitials } from "@/lib/string_library";
import { API_URL } from "@/config/apiUrl";

export const LinkCard = ({ id, name, phone, isActive, linkId }) => {
  const router = useRouter();

  const [available, setAvailable] = useState(isActive);

  async function handleUpdate(value) {
    setAvailable(value);
    await fetch(`${API_URL}/links/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isActive: value }),
    });
    router.refresh();
  }

  async function handleDelete() {
    await fetch(`${API_URL}/agents/${id}`, {
      method: "DELETE",
    });
    router.refresh();
  }

  return (
    <div className="flex gap-4 m-4 shadow-md rounded-lg p-4 bg-white">
      <Avatar
        name={extractInitials(name)}
        className="text-sm font-semibold"
        color="primary"
      />
      <div className="flex-1 flex-col">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-xs text-gray-700">{phone}</div>
      </div>
      <div className="flex flex-col items-end ">
        <Dropdown>
          <DropdownTrigger>
            <MoreHorizontal />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="edit">Edit</DropdownItem>
            <DropdownItem
              key="delete"
              className="text-danger"
              color="danger"
              onClick={() => {
                const result = confirm("Delete this agent?");
                if (result) handleDelete();
              }}
            >
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Switch
          isSelected={available}
          aria-label="Automatic updates"
          className="mt-4"
          onValueChange={handleUpdate}
        />
      </div>
    </div>
  );
};
