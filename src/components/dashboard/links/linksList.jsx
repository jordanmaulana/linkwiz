import React from "react";
import { LinkCard } from "./linkCard";

export const LinksList = ({ links }) => {
  return (
    <div className="grid grid-cols-3 gap-12 ">
      {links?.map(({ id, name, phone, isActive, linkId }) => {
        return (
          <LinkCard
            key={id}
            id={id}
            name={name}
            phone={phone}
            isActive={isActive}
            linkId={linkId}
          />
        );
      })}
    </div>
  );
};
