import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/utils/prisma";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  //const id = params.id;
  //localhost:3000/api/link/fb-ads

  const findLink = await prisma.links.findUnique({
    where: {
      url: params.url,
    },
    select: {
      is_active: true,
      name: true,
      id: true,
    },
  });

  if (!findLink) {
    return <div>Link id Not Found</div>;
  }

  console.log(`id: `, findLink.id);

  const wa = await prisma.agents.firstWhere({
    where: {
      id: "9f715a77-30a8-4139-8eeb-79820d0d7ffe",
    },
    select: {
      isActive: true,
      name: true,
      id: true,
      phone: true,
    },
  });

  /*   const payLoad = {
    url: findLink.url,
    is_active: findLink.is_active,
  }; */

  //console.log(`WA :`, wa.phone);

  //const linkurl = `https://wa.me/`, { wa.phone };

  //console.log(linkurl);


  if (findLink.is_active == true) {
    redirect("https://wa.me/"${wa.phone});
  }

  //return <div>My Post: {findLink.is_active}</div>;
  return <div>My Post: {params.url}</div>;
}
