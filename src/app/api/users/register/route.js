import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { prisma } from "@/utils/prisma";

export async function POST(req) {
  const { name, email, password } = await req.json();

  try {
    // Create hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    const findUser = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    // Jika user tidak ditemukan, kirim pesan error
    if (findUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Create user to database
    const createUser = await prisma.users.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { data: createUser, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later" },
      { status: 500 }
    );
  }
}
