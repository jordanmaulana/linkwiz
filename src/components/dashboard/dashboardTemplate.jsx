import React from "react";
import Link from "next/link";
import { Activity, Box, Receipt } from "lucide-react";

export const DashboardTemplate = ({ children }) => {
  return (
    <main className="flex h-screen">
      <aside className="w-[230px] border-r-2 p-8 flex flex-col justify-between">
        <div>
          <Link
            className="menu flex gap-4 items-center my-4"
            href="/dashboard/links"
          >
            <Activity size={15} />
            Links
          </Link>
          <Link
            className="menu flex gap-4 items-center my-4"
            href="/dashboard/agents"
          >
            <Box size={15} />
            Agents
          </Link>
        </div>
        <div className="menu">Logout</div>
      </aside>
      <section className="w-[calc(100vw-230px)] p-8">
        <div className="max-w-5xl m-auto">{children}</div>
      </section>
    </main>
  );
};
