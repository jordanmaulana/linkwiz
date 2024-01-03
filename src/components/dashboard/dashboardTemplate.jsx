"use client";
import React from "react";
import Link from "next/link";
import { Activity, UsersRoundIcon } from "lucide-react";
import Image from "next/image";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const DashboardTemplate = ({ children }) => {
  const router = useRouter();

  async function handleSubmitLogout() {
    Cookies.remove("token");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    let valToken = Cookies.get("token");

    if (valToken) {
      toast.error("Error logout!");
      return;
    }

    toast.success("Logout succesfully, redirecting...");
    setTimeout(() => router.push("/"), 2000);
  }

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
        <div className="menu hover:cursor-pointer" onClick={handleSubmitLogout}>
          Logout
        </div>
      </aside>
      <section className="p-8 w-full">{children}</section>
    </main>
  );
};
