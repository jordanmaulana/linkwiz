"use client";

import React from "react";
import { AgentCell } from "./AgentCell";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export const AgentsList = ({ agents }) => {
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "PHONE", uid: "phone" },
    { name: "STATUS", uid: "isActive" },

    { name: "ACTIONS", uid: "actions" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="font-bold text-xl my-3">Agents Management</h1>
      <Table aria-label="Manage agents">
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
        <TableBody items={agents}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  <AgentCell data={item} column={columnKey} />
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
