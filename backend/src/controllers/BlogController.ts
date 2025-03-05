import { Context } from "hono";

export const createBlog= async (c:Context)=>{
    const body = await c.req.json()

    return c.json({
        message:'blog created successfully'
    })
}

export const updateBlog = async (c: Context)=>{
    const body = await c.req.json();

    return c.json({
        message:"blog updated"
    })
}

export const getBlogs =async  (c: Context)=>{
    const blogid= await c.req.param('id')
    return c.json({
        message:"fetching all blog data",
        data:{
            id:blogid
        }
    })
}