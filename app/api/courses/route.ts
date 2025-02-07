import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const { title } = await req.json();

    if (!userId) return new NextResponse("Unauthorized!", { status: 401 });

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course);
  } catch (e) {
    console.log(`[Courses]`, e);
    return new NextResponse("Internal Error Occurred", { status: 500 });
  }
}
