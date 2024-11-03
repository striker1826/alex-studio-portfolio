import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { password, date, name } = await req.json();
  if (password !== process.env.ADMIN_PASSWORD) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }

  // await connectDatabase();
  // const scheduleRepository = getRepository(Schedule);

  // const newPhoto = scheduleRepository.create();
  // newPhoto.date = date;
  // newPhoto.name = name;
  // await scheduleRepository.save(newPhoto);

  await sql`INSERT INTO SCHEDULES (date, name) VALUES (${date}, ${name})`;
  return NextResponse.json({ result: "success" }, { status: 201 });
};

export const GET = async () => {
  // await connectDatabase();
  // const scheduleRepository = getRepository(Schedule);
  // const scheduleList = await scheduleRepository.find();
  const { rows } = await sql`SELECT * FROM SCHEDULES`;

  return NextResponse.json({ result: rows }, { status: 200 });
};
