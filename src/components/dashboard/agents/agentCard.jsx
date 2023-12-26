"use client";

import React from "react";
import { MoreHorizontal } from "lucide-react";
import {
  Avatar,
  Switch,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { extractInitials } from "@/lib/string_library";

export const AgentCard = ({ id, name, phone, isActive, linkId }) => {
  console.log(isActive);
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
            <DropdownItem key="delete" className="text-danger" color="danger">
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Switch
          isSelected={isActive}
          aria-label="Automatic updates"
          className=" mt-4"
        />
      </div>
    </div>
  );
};
