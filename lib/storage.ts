import { promises as fs } from "fs";
import path from "path";

export type InquiryRecord = {
  id: string;
  createdAt: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  type?: string;
  length?: string;
  sku?: string;
  yard?: string;
  notes?: string;
  meta?: Record<string, unknown>;
};

const dataDir = path.join(process.cwd(), "data");
const jsonlPath = path.join(dataDir, "inquiries.jsonl");

export async function persistInquiry(record: InquiryRecord): Promise<void> {
  await fs.mkdir(dataDir, { recursive: true });
  const line = JSON.stringify(record) + "\n";
  await fs.appendFile(jsonlPath, line, "utf8");
}
