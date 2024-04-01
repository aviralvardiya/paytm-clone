import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";

export const GET = async () => {
  try {
    const serverSession = await getServerSession(authOptions);

    if (serverSession.user) {
      return NextResponse.json({ user: serverSession.user });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "you are not logged in " },
      {
        status: 403,
      }
    );
  }
};
