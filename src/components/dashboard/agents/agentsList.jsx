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
import { CreateAgent } from "./CreateAgent";

export const AgentsList = ({ agents, links }) => {
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "PHONE", uid: "phone" },
    { name: "STATUS", uid: "isActive" },
    { name: "LINK", uid: "link" },
    { name: "ACTIONS", uid: "actions" },
  ];

  return (
    <div className="space-y-6 relative h-full">
      <section>
        <h1 className="font-bold text-xl">Agents Management</h1>
        <p className="text-gray-500"> Manage your agents here. </p>
      </section>

      <Table aria-label="Manage agents" shadow="sm">
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
      <div className="absolute bottom-8 right-0">
        <CreateAgent links={links} />
      </div>
    </div>
  );
};
