import { UpdateAgent } from "@/components/dashboard/agents/UpdateAgent";
import React from "react";
import { cookies } from "next/headers";
import { API_URL } from "@/config/apiUrl";
import { UpdateLink } from "@/components/dashboard/links/components/UpdateLink";

async function getData(id) {
  const res = await fetch(`${API_URL}/links/${id}`, {
    cache: "no-store",
    headers: {
      authorization: `Bearer ${cookies().get("token").value}`,
    },
  });

  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const { data } = await getData(params.id);

  return (
    <div>
      <UpdateLink data={data} />
    </div>
  );
}
