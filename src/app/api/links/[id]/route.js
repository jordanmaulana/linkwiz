import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/utils/prisma";
import { GetUserId } from "@/lib/token_library";

export async function GET(request, { params }) {
  const token = request.cookies.get("token")?.value;

  try {
    const userId = GetUserId(token);

    const result = await prisma.links.findUnique({
      where: {
        id: params.id,
      },
      include: {
        Agents: true,
      },
    });
    return NextResponse.json(
      {
        data: result,
        message: "Link fetched successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Error fetching link",
        log: `${error}`,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    const { name, slug, isActive } = await request.json();

    const agents = await prisma.links.update({
      where: {
        id: params.id,
      },
      data: { name, slug, isActive },
    });
    return NextResponse.json(
      {
        data: agents,
        message: "Link updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Error updating link",
        log: `${error}`,
      },
      { status: 500 }
    );
  }
}
