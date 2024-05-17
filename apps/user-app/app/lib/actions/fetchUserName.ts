"use server";

import { getServerSession } from "next-auth";

import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function fetchUserNameAction() {
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

    return user?.name;
  } catch (error) {
    console.log(error);
    return {
      message: "an error occurred",
    };
  }
}
