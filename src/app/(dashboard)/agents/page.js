import { AgentsList } from "@/components/dashboard/agents/agentsList";
import React from "react";
import { apiUrl } from "@/config/apiUrl";

async function getData() {
  const res = await fetch(`${apiUrl}/agents`, { cache: "no-store" });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { data } = await getData();

  return <AgentsList agents={data} />;
}
