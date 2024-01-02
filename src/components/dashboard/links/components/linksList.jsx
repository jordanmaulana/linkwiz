"use client";
import React from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import { LinkCell } from "./LinkCell";
import { CreateLink } from "./CreateLink";

export const LinksList = ({ links }) => {
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "SLUG", uid: "slug" },
    { name: "TOTAL AGENTS", uid: "agents" },
    { name: "YOUR LINK", uid: "link" },

    { name: "STATUS", uid: "isActive" },
    { name: "ACTIONS", uid: "actions" },
  ];

  return (
    <div className="space-y-6 relative h-full">
      <h1 className="font-bold text-xl my-3">Links Management</h1>
      <Table aria-label="Manage links" className="max-w-5xl">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={links}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  <LinkCell data={item} column={columnKey} />
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="absolute bottom-16 right-16">
        <CreateLink />
      </div>
    </div>
  );
};
