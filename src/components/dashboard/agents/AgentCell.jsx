"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Switch, Tooltip } from "@nextui-org/react";
import { API_URL } from "@/config/apiUrl";

import { EditIcon } from "../../shared-ui/EditIcon";
import { DeleteIcon } from "../../shared-ui/DeleteIcon";
import Link from "next/link";

export const AgentCell = ({ data, column }) => {
  const router = useRouter();

  const [available, setAvailable] = useState(data.isActive);

  async function handleUpdate(value) {
    setAvailable(value);
    await fetch(`${API_URL}/agents/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isActive: value }),
    });
    router.refresh();
  }

  async function handleDelete() {
    await fetch(`${API_URL}/agents/${data.id}`, {
      method: "DELETE",
    });
    router.refresh();
  }

  const cellValue = data[column];

  switch (column) {
    case "name":
      return <div className="w-32">{data.name}</div>;
    case "phone":
      return (
        <a
          className="w-32"
          href={`https://wa.me/${data.phone}`}
          target="_blank"
        >
          {data.phone}
        </a>
      );

    case "isActive":
      return (
        <Tooltip content="Change Availability">
          <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
            <Switch
              isSelected={available}
              size="sm"
              aria-label="Automatic updates"
              onValueChange={handleUpdate}
            />
          </span>
        </Tooltip>
      );
    case "actions":
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Edit agent">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <Link href={`/dashboard/agents/${data.id}`}>
                <EditIcon />
              </Link>
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Delete agent">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <div onClick={handleDelete}>
                <DeleteIcon />
              </div>
            </span>
          </Tooltip>
        </div>
      );
    default:
      return cellValue;
  }
};
