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
    console.log("old session", session.user);

    await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        name: name,
      },
    });

    const newSession = await getServerSession(authOptions);
    console.log("new session", newSession.user);

    // console.log("name set to " + name);

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
