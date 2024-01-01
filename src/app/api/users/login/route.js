import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const findUser = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    // Jika user tidak ditemukan, kirim pesan error
    if (!findUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Bandingkan password yang diinput dengan password di database
    const comparePassword = await bcrypt.compare(password, findUser.password);

    // Jika password tidak cocok, kirim pesan error
    if (!comparePassword) {
      return NextResponse.json(
        { message: "Invalid Credentials" },
        { status: 401 }
      );
    }

    // Jika password cocok, kirim data user
    const payload = {
      id: findUser.id,
      name: findUser.name,
      email: findUser.email,
    };

    // Buat token
    const token = sign(payload, process.env.SECRET_KEY, { expiresIn: "7d" });
    const res = NextResponse.json(
      { data: payload, message: "Login success" },
      { status: 200 }
    );
    res.cookies.set("token", token);

    return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later" },
      { status: 500 }
    );
  }
}
