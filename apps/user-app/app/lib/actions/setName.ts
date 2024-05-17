"use server";

import { getServerSession } from "next-auth";

import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function setNameAction(name: string) {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;

  if (!userId) {
    return {
      message: "user not logged in",
    };
  }
  try {
    await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        name: name,
      },
    });

    return {
      message: "user's name set successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      message: "an error occurred",
    };
  }
}
