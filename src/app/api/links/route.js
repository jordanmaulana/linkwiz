import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/utils/prisma";
import { GetUserId } from "@/lib/token_library";

export async function GET(request) {
  const token = request.cookies.get("token")?.value;

  try {
    const userId = GetUserId(token);

    const result = await prisma.links.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        id: "asc",
      },
    });
    return NextResponse.json(
      {
        data: result,
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
  const token = request.cookies.get("token")?.value;

  try {
    const userId = GetUserId(token);
    const { name, slug } = await request.json();

    const result = await prisma.links.create({
      data: {
        name,
        slug,
        userId,
      },
    });

    return NextResponse.json(
      {
        data: result,
        message: "link created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Error creating link",
        log: `${error}`,
      },
      { status: 500 }
    );
  }
}
