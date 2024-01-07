"use client";
import React from "react";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

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
      <section>
        <h1 className="font-bold text-xl">Links Management</h1>
        <p className="text-gray-500"> Manage your links here. </p>
      </section>
      <Table aria-label="Manage links" shadow="sm">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
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
      <div className="absolute bottom-8 right-0">
        <CreateLink />
      </div>
    </div>
  );
};
