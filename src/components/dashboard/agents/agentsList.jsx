import React from "react";
import { AgentCard } from "./agentCard";

export const AgentsList = ({ agents }) => {
  return (
    <div className="grid grid-cols-3 gap-12 ">
      {agents.map(({ id, name, phone, isActive, linkId }) => {
        return (
          <AgentCard
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
