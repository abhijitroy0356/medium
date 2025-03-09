import { Context } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from "hono/jwt";
import { signinZod,signupZod } from "../validation/UserZod";


export const signup = async (c:Context)=>{
   
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json()
    console.log("🔥 Signup route hit!");
    const validate= signupZod.safeParse(body)
    if(!validate.success){
        const errorMessage = JSON.stringify(validate.error.format(), null, 2);
        throw new Error(`zod catched the issue in body ${errorMessage}`)
    }
    const user = await prisma.user.create({
        data:{
            email:body.email,
            name:body.name,
            password:body.password
        },
    })
    

    const token = await sign({id:user.id}, c.env.JWT_SERECT)

    return c.json({
        jwt: token,
        message:'signed up done'
    })
}

export const signin = async (c:Context)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json()
    const validate =signinZod.safeParse(body)
    if(!validate.success){
        const errorMsg = JSON.stringify(validate.error.format(),null,2);
        throw new Error (`bad requrest body found out by zod ${errorMsg}`)
    }
    const user = await prisma.user.findUnique({
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
    return c.json({
        jwt:token,
        message:'sign-in done'
    })
}