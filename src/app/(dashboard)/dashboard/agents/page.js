import { AgentsList } from "@/components/dashboard/agents/agentsList";
import React from "react";
import { API_URL } from "@/config/apiUrl";
import { cookies } from "next/headers";

async function getData() {
  const res = await fetch(`${API_URL}/agents`, {
    cache: "no-store",
    headers: {
      authorization: `Bearer ${cookies().get("token").value}`,
    },
  });

  const data = await res.json();
  return data;
}

export default async function Page() {
  const { data } = await getData();

  return <AgentsList agents={data} />;
}
