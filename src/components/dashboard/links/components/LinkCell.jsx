import React from "react";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Switch, Tooltip } from "@nextui-org/react";
import { API_URL } from "@/config/apiUrl";

import { EditIcon } from "../../../shared-ui/EditIcon";
import { DeleteIcon } from "../../../shared-ui/DeleteIcon";

export const LinkCell = ({ data, column }) => {
  const router = useRouter();

  const [available, setAvailable] = useState(data.isActive);

  async function handleUpdate(value) {
    setAvailable(value);
    await fetch(`${API_URL}/links/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isActive: value }),
    });
    router.refresh();
  }

  async function handleDelete() {
    await fetch(`${API_URL}/links/${data.id}`, {
      method: "DELETE",
    });
    router.refresh();
  }

  const cellValue = data[column];

  switch (column) {
    case "name":
      return <div className="w-32">{data.name}</div>;
    case "slug":
      return <div className="w-32">{data.slug}</div>;

    case "agents":
      return <div className="text-center">{data.agents.length}</div>;

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
    case "link":
      return (
        <a
          href={`http://localhost:3000/${data.slug}`}
          target="_blank"
          className="text-blue-500 underline"
        >
          http://localhost:3000/{data.slug}
        </a>
      );
    case "actions":
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Edit link">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EditIcon />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Delete link">
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
