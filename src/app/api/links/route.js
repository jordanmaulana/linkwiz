import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(request) {
  //   const token = request.cookies.get("token")?.value;

  try {
    ///TODO: implement user id by token
    // const userId = GetUserId(token);

    const links = await prisma.links.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return NextResponse.json(
      {
        data: agents,
        message: "All links fetched successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Error fetching links",
        log: `${error}`,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  //   const token = request.cookies.get("token")?.value;

  try {
    // const userId = GetUserId(token);

    ///TODO: implement user id by token
    const { name, phone, linkId, userId } = await request.json();

    const agent = await prisma.agents.create({
      data: {
        name,
        phone,
        linkId,
        userId,
      },
    });

    return NextResponse.json(
      {
        data: agent,
        message: "Agents created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Error creating agents",
        log: `${error}`,
      },
      { status: 500 }
    );
  }
}
