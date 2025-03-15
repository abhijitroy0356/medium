import { Context } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { jwt, sign } from "hono/jwt";
import { signupZod, signinZod } from "@abhijit09988/medium-zods-v1";


export const signup = async (c:Context)=>{
   
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json()
    console.log("🔥 Signup route hit!");
    const validate= signupZod.safeParse(body)
    if(!validate.success){
        console.log(body)
        return c.json({
            message:"invalid body"
        },500)
    }
    const user = await prisma.user.create({
        data:{
            email:body.email,
            name:body.name,
            password:body.password
        },
    })
    const token = await sign({id:user.id}, c.env.JWT_SERECT)

    return c.text(token)
}

export const signin = async (c:Context)=>{
    const body = await c.req.json()
    const validate =signinZod.safeParse(body)
    console.log(body)
    if (!validate.success) {
        console.log('heeb')
        return c.json({
            message: "Invalid request body",
            errors: validate.error.format() // Provides detailed error messages
        }, 400);
    }    
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const user = await prisma.user.findFirst({
        where:{
            email:body.email,
            password:body.password
        }

    })
    if(!user){
        c.status(404)
       return c.json({
        error:"cannot find user with this mail",
       })
    }
    const token = await sign({id:user.id},c.env.JWT_SERECT)
    return c.text(token)
}