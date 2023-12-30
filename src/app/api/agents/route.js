import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/utils/prisma";
import { GetUserId } from "@/lib/token_library";

export async function GET(request) {
  const token = request.cookies.get("token")?.value;

  try {
    ///TODO: implement user id by token
    const userId = GetUserId(token);

    const agents = await prisma.agents.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        name: "asc",
      },
    });
    return NextResponse.json(
      {
        data: agents,
        message: "All agents fetched successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Error fetching agents",
        log: `${error}`,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const token = request.cookies.get("token")?.value;

  try {
    const userId = GetUserId(token);
    const { name, phone, linkId } = await request.json();

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
        message: "Agent created successfully",
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
