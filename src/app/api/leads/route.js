import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/utils/prisma";
import { GetUserId } from "@/lib/token_library";

export async function GET(request) {
  try {
    const userId = GetUserId();

    const result = await prisma.leads.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        date: "asc",
      },
    });
    return NextResponse.json(
      {
        data: result,
        message: "All leads fetched successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Error fetching leads",
        log: `${error}`,
      },
      { status: 500 }
    );
  }
}
