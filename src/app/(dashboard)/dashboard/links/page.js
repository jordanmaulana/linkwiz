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

  return (
    <section className="flex">
      <LinksList agents={data} />
      <aside className="w-[230px] border-r-2 p-8 flex flex-col justify-between"></aside>
    </section>
  );
}
