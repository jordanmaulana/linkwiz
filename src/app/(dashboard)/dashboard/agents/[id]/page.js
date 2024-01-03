import { UpdateAgent } from "@/components/dashboard/agents/UpdateAgent";
import React from "react";
import { cookies } from "next/headers";
import { API_URL } from "@/config/apiUrl";

async function getData(id) {
  const res = await fetch(`${API_URL}/agents/${id}`, {
    cache: "no-store",
    headers: {
      authorization: `Bearer ${cookies().get("token").value}`,
    },
  });

  const data = await res.json();
  return data;
}

async function getLinks() {
  const res = await fetch(`${API_URL}/links`, {
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
  const links = await getLinks();

  return (
    <div>
      <UpdateAgent data={data} links={links.data} />
    </div>
  );
}
