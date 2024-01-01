import { DashboardTemplate } from "@/components/dashboard/dashboardTemplate";
import React from "react";

export default function Layout({ children }) {
  return <DashboardTemplate>{children}</DashboardTemplate>;
}
