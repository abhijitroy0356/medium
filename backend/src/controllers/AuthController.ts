import { Context } from "hono";

export const signup = async (c:Context)=>{
    const body = await c.req.json()
    return c.json({
        message:'signed up done'
    })
}

export const signin = async (c:Context)=>{
    const body = await c.req.json()
    return c.json({
        message:'sign-in done'
    })
}