import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const rateLimit = new Map<string, number>();

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  const now = Date.now();
  const lastRequest = rateLimit.get(ip);

  // Ограничение: 1 запрос в 10 секунд
  if (lastRequest && now - lastRequest < 10000) {
    return NextResponse.json(
      { error: "Слишком часто. Подожди немного." },
      { status: 429 }
    );
  }

  rateLimit.set(ip, now);

  try {
    const body = await req.json();

    const { name, content, rating } = body;

    if (!name || !content || !rating) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const review = await prisma.review.create({
      data: {
        name,
        content,
        rating,
        approved: false // важно для модерации
      }
    });

    return NextResponse.json(review);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
