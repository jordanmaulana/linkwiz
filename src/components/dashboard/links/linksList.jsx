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

export const LinksList = ({ links }) => {
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "SLUG", uid: "slug" },
    { name: "STATUS", uid: "isActive" },
    { name: "TOTAL AGENTS", uid: "agents" },
    { name: "ACTIONS", uid: "actions" },
  ];

  return (
    <Table aria-label="Manage links">
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
  );
};
