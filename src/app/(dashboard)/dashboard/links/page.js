import React from "react";
import { API_URL } from "@/config/apiUrl";
import { LinksList } from "@/components/dashboard/links/linksList";
import { cookies } from "next/headers";

async function getData() {
  const res = await fetch(`${API_URL}/links`, {
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

  return <LinksList links={data} />;
}
