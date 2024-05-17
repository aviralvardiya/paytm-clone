"use server";

import { getServerSession } from "next-auth";

import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function fetchUserNameAction():Promise<{
  message:string,
  name?:string
}> {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;

  if (!userId) {
    return {
      message: "user not logged in",
    };
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
    });

    return {
      message:"ok",
      name:user?.name||""
    } 
  } catch (error) {
    console.log(error);
    return {
      message: "an error occurred",
    };
  }
}
