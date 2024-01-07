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
      <aside className="w-[280px] border-r bg-gray-50 p-4 flex flex-col justify-between">
        <div className="">
          <div className="font-bold text-lg mb-4 pl-4 pt-4">LinkWiz</div>
          <Link className="menu flex gap-4 items-center py-3 px-4 hover:bg-gray-100 rounded-xl" href="/dashboard/links">
            <Activity size={15} />
            Links
          </Link>
          <Link className="menu flex gap-4 items-center py-3 px-4 hover:bg-gray-100 rounded-xl" href="/dashboard/agents">
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
          <Link
            className="menu flex gap-4 items-center my-4"
            href="/dashboard/statistics"
          >
            <AreaChartIcon size={15} />
            Statistics
          </Link>
        </div>
        <div className="menu cursor-pointer flex gap-4 items-center py-3 px-4 hover:bg-gray-100 rounded-xl" onClick={handleSubmitLogout}>
          Logout
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
      <section className="py-8 px-12 w-[calc(100vw-280px)]">{children}</section>
    </main>
  );
};
