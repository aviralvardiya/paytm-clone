"use client"


import { PrismaClient } from "@repo/db/client";
import { Appbar } from "@repo/ui/Appbar";
import { signIn, signOut, useSession } from "next-auth/react";

const client = new PrismaClient()



export default function Page(): JSX.Element {
  const session = useSession()

  return (
    <div>
      {/* <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} /> */}
      <h1 >Namaste!!</h1>
      
    </div>
  );
}
