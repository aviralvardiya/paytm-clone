import { PrismaClient } from "@repo/db/client"
import { NextResponse } from "next/server"

export const GET = async () => {
    const client = new PrismaClient()

    try {
        const newUser = await client.user.create({
            data:{
                name:"ramesh",
                email:"ramesh@gmail.com",
                number:"123456",
                password:"aklsudfghasdfg"
            }
        })
        return NextResponse.json(newUser)
        
    } catch (error:any) {
        console.log(error)
        return new Response(error)
    }

}