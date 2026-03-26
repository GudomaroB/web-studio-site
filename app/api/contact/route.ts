import { prisma } from "@/lib/prisma";
import { transporter } from "@/lib/mail";
import { NextResponse } from "next/server";

const rateLimit = new Map<string, number>();

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const lastRequest = rateLimit.get(ip);

  if (lastRequest && now - lastRequest < 10000) {
    return NextResponse.json(
      { error: "Слишком часто. Подождите немного." },
      { status: 429 }
    );
  }

  rateLimit.set(ip, now);

  try {
    const body = await req.json();

    const { name, email, phone, company, service, budget, message } = body;

    if (!name || !email || !phone || !service || !budget || !message) {
      return NextResponse.json(
        { error: "Заполните обязательные поля." },
        { status: 400 }
      );
    }

    const contactRequest = await prisma.contactRequest.create({
      data: {
        name,
        email,
        phone,
        company: company || null,
        service,
        budget,
        message
      }
    });

    // await transporter.sendMail({
    //   from: process.env.GMAIL_USER,
    //   to: process.env.GMAIL_USER,
    //   subject: `Новая заявка от ${name}`,
    //   html: `
    //     <h2>Новая заявка с сайта</h2>
    //     <p><strong>Имя:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Телефон:</strong> ${phone}</p>
    //     <p><strong>Компания:</strong> ${company || "Не указана"}</p>
    //     <p><strong>Услуга:</strong> ${service}</p>
    //     <p><strong>Бюджет:</strong> ${budget}</p>
    //     <p><strong>Сообщение:</strong></p>
    //     <p>${message}</p>
    //     <hr />
    //     <p><strong>ID заявки:</strong> ${contactRequest.id}</p>
    //   `
    // });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `🔥 Новая заявка от ${name}`,
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Новая заявка с сайта</h2>

      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Компания:</strong> ${company || "Не указана"}</p>
      <p><strong>Услуга:</strong> ${service}</p>
      <p><strong>Бюджет:</strong> ${budget}</p>

      <p><strong>Сообщение:</strong></p>
      <p>${message}</p>

      <hr />

      <h3>Быстрая связь:</h3>

      <p>
        <a href="https://wa.me/${phone.replace(/\\D/g, "")}" target="_blank">
          💬 Написать в WhatsApp
        </a>
      </p>

      <p>
        <a href="https://t.me/gudomarov" target="_blank">
          ✈️ Telegram
        </a>
      </p>

      <p>
        <a href="https://www.instagram.com/vassilyi.g/" target="_blank">
          📸 Instagram
        </a>
      </p>

      <hr />
      <p><strong>ID заявки:</strong> ${contactRequest.id}</p>
    </div>
  `
    });

    return NextResponse.json(contactRequest, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "Ошибка сервера." }, { status: 500 });
  }
}
