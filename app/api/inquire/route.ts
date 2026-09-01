import { NextResponse } from "next/server";
import { z } from "zod";
import { persistInquiry } from "@/lib/storage";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(1),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  type: z.string().optional(),
  length: z.string().optional(),
  sku: z.string().optional(),
  yard: z.string().optional(),
  notes: z.string().optional()
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const record = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...data,
      meta: {
        ip: (req.headers.get("x-forwarded-for") ?? "").split(",")[0] || undefined,
        ua: req.headers.get("user-agent") ?? undefined
      }
    };

    await persistInquiry(record);
    await maybeEmail(record);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    const message = err?.message ?? "Invalid request";
    return new NextResponse(message, { status: 400 });
  }
}

async function maybeEmail(record: any) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  if (!apiKey || !to) return;
  const resend = new Resend(apiKey);
  const subject = `TENFOUR inquiry — ${record.name} ${record.company ? `(${record.company})` : ""}`;
  const lines = [
    `Name: ${record.name}`,
    `Company: ${record.company ?? "-"}`,
    `Email: ${record.email}`,
    `Phone: ${record.phone ?? "-"}`,
    `Type: ${record.type ?? "-"}`,
    `Length: ${record.length ?? "-"}`,
    `SKU: ${record.sku ?? "-"}`,
    `Yard: ${record.yard ?? "-"}`,
    `Notes: ${record.notes ?? "-"}`,
    `When: ${record.createdAt}`,
    record.meta?.ip ? `IP: ${record.meta.ip}` : "",
    record.meta?.ua ? `UA: ${record.meta.ua}` : ""
  ]
    .filter(Boolean)
    .join("\n");
  await resend.emails.send({
    from: "inquiries@tenfour.example", // can be overridden in Resend
    to,
    subject,
    text: lines
  });
}
