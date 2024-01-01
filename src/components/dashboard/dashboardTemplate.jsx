import React from "react";
import Link from "next/link";
import { Activity, UsersRoundIcon } from "lucide-react";
import Image from "next/image";

export const DashboardTemplate = ({ children }) => {
  return (
    <main className="flex h-screen">
      <aside className="w-[230px] border-r-2 p-8 flex flex-col justify-between">
        <div>
          <Image src="/logo.png" width={342} height={103} />

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
            <UsersRoundIcon size={15} />
            Agents
          </Link>
        </div>
        <div className="menu">Logout</div>
      </aside>
      <section className="p-8">{children}</section>
    </main>
  );
};
