import { NextRequest, NextResponse } from "next/server";
import schema from "@/app/api/todo/create/schema";
import prisma from "@/prisma/client";
import {authOptions} from "@/app/api/auth/authOptions";
import {getServerSession} from "next-auth";

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions)
    const user = await prisma.user.findUnique({where: {email: session!.user!.email!}})
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });
    const addedToDo = await prisma.toDo.create({
        data: {user: user!.id, text: body.text, heading: body.title}
    });
    return NextResponse.json({}, { status: 201 });
}
