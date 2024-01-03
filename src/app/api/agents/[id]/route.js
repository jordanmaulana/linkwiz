import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(request, { params }) {
  try {
    const agents = await prisma.agents.findUnique({
      where: {
        id: params.id,
      },
      include: {
        link: true,
      },
    });
    return NextResponse.json(
      {
        data: agents,
        message: "Agent fetched successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Error fetching agent",
        log: `${error}`,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    const { name, phone, isActive, linkId } = await request.json();

    const agents = await prisma.agents.update({
      where: {
        id: params.id,
      },
      data: { name, phone, isActive, linkId },
    });
    return NextResponse.json(
      {
        data: agents,
        message: "Agent updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Error updating agents",
        log: `${error}`,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const agents = await prisma.agents.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(
      {
        data: agents,
        message: "Agent deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Error deleting agents",
        log: `${error}`,
      },
      { status: 500 }
    );
  }
}
