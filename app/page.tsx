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
          <div className="my-16"></div>
        <hr className=" h-5 mx-auto my-96 mb-96 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
          <div className="my-16"></div>
        <DisplayToDos todos={todos} active={false}/>
      </main>
  );
}