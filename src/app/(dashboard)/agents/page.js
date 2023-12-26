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

  return (
    <section className="flex">
      <AgentsList agents={data} />
      <aside className="w-[230px] border-r-2 p-8 flex flex-col justify-between"></aside>
    </section>
  );
}
