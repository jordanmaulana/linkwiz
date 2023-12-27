import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/utils/prisma";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  //const id = params.id;

  const findLink = await prisma.links.findUnique({
    where: {
      id: params.id,
    },
  });

  /*   const payLoad = {
    url: findLink.url,
    is_active: findLink.is_active,
  }; */
  if (!findLink) {
    return <div>Link id Not Found</div>;
  }

  if (findLink.is_active == true) {
    redirect(findLink.url);
  }

  return <div>My Post: {findLink.is_active}</div>;
  //return <div>My Post: {params.id}</div>;
}
