"use client";

import React from "react";
import Link from "next/link";
import { Activity, UsersRoundIcon, AreaChartIcon } from "lucide-react";
import Image from "next/image";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Avatar } from "@nextui-org/react";
import { extractInitials } from "@/lib/string_library";
import { useState, useEffect } from "react";

export const DashboardTemplate = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
  }, []);

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
      <aside className="w-[320px] border-r-2 p-8 flex flex-col justify-between">
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
          <Link
            className="menu flex gap-4 items-center my-4"
            href="/dashboard/statistics"
          >
            <AreaChartIcon size={15} />
            Statistics
          </Link>
        </div>
        <div>
          <div className="flex gap-4 items-center">
            <Avatar
              name={extractInitials(user?.name)}
              className="bg-green-400 text-white text-sm font-semibold"
            />
            <div>
              {user?.name}
              <div className="text-xs">{user?.email}</div>
            </div>
          </div>
          <div
            className="menu hover:cursor-pointer mt-8"
            onClick={handleSubmitLogout}
          >
            Logout
          </div>
        </div>
      </aside>
      <section className="p-8 w-full">{children}</section>
    </main>
  );
};
