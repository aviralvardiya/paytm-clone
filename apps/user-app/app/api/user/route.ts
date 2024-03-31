import { PrismaClient } from "@repo/db/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";

export const GET = async () => {
  const serverSession = await getServerSession(authOptions);

  if (serverSession.user) {
    return NextResponse.json({ user: serverSession.user });
  }

  return NextResponse.json(
    { message: "you are not logged in " },
    {
      status: 403,
    }
  );
};
