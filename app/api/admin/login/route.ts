// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { password } = await req.json();

//   if (password !== process.env.ADMIN_PASSWORD) {
//     return NextResponse.json({ error: "Неверный пароль" }, { status: 401 });
//   }

//   const response = NextResponse.json({ ok: true });

//   response.cookies.set("admin_auth", "true", {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     path: "/",
//     maxAge: 60 * 60 * 24,
//     sameSite: "lax"
//   });

//   return response;
// }

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  console.log("Введённый пароль:", password);
  console.log("ADMIN_PASSWORD:", process.env.ADMIN_PASSWORD);

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Неверный пароль" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });

  response.cookies.set("admin_auth", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
    sameSite: "lax"
  });

  return response;
}
