"use client";
import React from "react";
import { LinkCard } from "./linkCard";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Switch,
} from "@nextui-org/react";

import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";

import { columns } from "./data";
import { LinkCell } from "./LinkCell";

export const LinksList = ({ links }) => {
  const renderCell = React.useCallback((link, columnKey) => {
    const cellValue = link[columnKey];

    switch (columnKey) {
      case "name":
        return <div>{link.name}</div>;
      case "slug":
        return <div>{link.slug}</div>;

      case "agents":
        return <div className="text-center">{link.agents.length}</div>;

      case "isActive":
        return (
          <Switch
            size="sm"
            isSelected={link.isActive}
            aria-label="Automatic updates"
            // onValueChange={handleUpdate}
          />
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
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
                {/* {renderCell(item, columnKey)} */}
                <LinkCell data={item} column={columnKey} />
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );

  return (
    <div className="grid grid-cols-3 gap-12 ">
      {links?.map(({ id, name, slug, isActive, agents }) => {
        return (
          <LinkCard
            key={id}
            id={id}
            name={name}
            slug={slug}
            isActive={isActive}
            agents={agents}
          />
        );
      })}
    </div>
  );
};
