import React from "react";
import { prisma } from "@/utils/prisma";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  const findLink = await prisma.links.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      user: true,
      agents: {
        where: {
          isActive: true,
        },
        include: {
          leadBuffers: true,
        },
      },
    },
  });
  if (!findLink) return <div>Page Not Found</div>;
  if (!findLink.isActive) return <div>This link is inactive</div>;

  const agentsForLink = findLink.agents;
  let agentWithLowestTotal = null;
  let lowestTotal = Infinity;

  for (const agent of agentsForLink) {
    console.log("Agent:", agent);

    const totalLeads = agent.leadBuffers.reduce(
      (sum, buffer) => sum + buffer.total,
      0
    );

    if (totalLeads < lowestTotal) {
      lowestTotal = totalLeads;
      agentWithLowestTotal = agent;
    }
  }

  if (!agentWithLowestTotal) {
    console.error("No agents found for the link.");
    return <div>Sorry, no customer representative is available yet</div>;
  }

  // Now 'agentWithLowestTotal' contains the Agent with the lowest total leads.
  console.log("Agent with the lowest total leads:", agentWithLowestTotal);

  const currentDate = new Date();

  await prisma.leadBuffers.upsert({
    where: {
      agentId: agentWithLowestTotal.id,
    },
    update: {
      total: {
        increment: 1,
      },
      date: currentDate,
      agentId: agentWithLowestTotal.id,
      linkId: findLink.id,
    },
    create: {
      date: currentDate,
      agentId: agentWithLowestTotal.id,
      linkId: findLink.id,
      total: 1,
    },
  });

  await prisma.leads.create({
    data: {
      date: currentDate,
      agentId: agentWithLowestTotal.id,
      linkId: findLink.id,
      userId: findLink.user.id,
    },
  });

  redirect(`https://wa.me/${agentWithLowestTotal.phone}`);
}
