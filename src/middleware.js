import { NextResponse } from "next/server";
import * as jose from "jose";

export default async function middleware(req) {
  const jwtSecret = process.env.SECRET_KEY;
  const encodedJwtSecret = new TextEncoder().encode(jwtSecret);
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    await jose.jwtVerify(token, encodedJwtSecret);

    if (req.nextUrl.pathname === "/") {
      return NextResponse.rewrite(new URL("/dashboard/links", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.log({ error });
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/"],
};
