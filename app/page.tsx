import {authOptions} from "@/app/api/auth/authOptions";
import {getServerSession} from "next-auth";
import prisma from "@/prisma/client";
import DisplayToDos from "@/app/components/DisplayToDos";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if(!session) return "Login to continue"
  const user = await prisma.user.findUnique({where: {email: session.user!.email!}})
  if(!user) return "An error occurred"
  const todos = await prisma.toDo.findMany({where: {user: user.id}});
  return (
      <main className="relative h-screen">
        <DisplayToDos todos={todos}/>
      </main>
  );
}