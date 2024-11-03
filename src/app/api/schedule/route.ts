import { connectDatabase } from "@/db/connect";
import { Schedule } from "@/entities/schedule";
import { NextRequest, NextResponse } from "next/server";
import { getRepository } from "typeorm";

export const POST = async (req: NextRequest) => {
  const { password, date, name } = await req.json();
  if (password !== process.env.ADMIN_PASSWORD) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }

  await connectDatabase();
  const scheduleRepository = getRepository(Schedule);

  const newPhoto = scheduleRepository.create();
  newPhoto.date = date;
  newPhoto.name = name;
  await scheduleRepository.save(newPhoto);

  return NextResponse.json({ result: "success" }, { status: 201 });
};

export const GET = async () => {
  await connectDatabase();
  const scheduleRepository = getRepository(Schedule);
  const scheduleList = await scheduleRepository.find();

  return NextResponse.json({ result: scheduleList }, { status: 200 });
};
