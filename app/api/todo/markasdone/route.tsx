import { NextRequest, NextResponse } from "next/server";
import schema from "@/app/api/todo/markasdone/schema";
import prisma from "@/prisma/client";

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const doneToDo = await prisma.toDo.update({
    where: {id: body.id},
      data: {isDone: true}
  });
  return NextResponse.json(doneToDo, { status: 201 });
}
