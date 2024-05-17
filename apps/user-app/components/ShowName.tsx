"use client";

import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../app/store/user.atom";
import { useSession } from "next-auth/react";
import { authOptions } from "../app/lib/auth";
import prisma from "@repo/db/client";
import { fetchUserNameAction } from "../app/lib/actions/fetchUserName";

function ShowName() {
    const [user,setUser] =useRecoilState(userAtom)


  useEffect(() => {

    async function getName(){
        const name = await fetchUserNameAction()
        setUser({...user,name:name})
    }

    getName()
    
  }, []);

  return <p className="text-3xl font-bold">Hello, {user.name}</p>;
}

export default ShowName;
