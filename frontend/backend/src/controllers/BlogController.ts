import { Context } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { createBlogZod, updateBlogZod } from "@abhijit09988/medium-zods-v1";

export const createBlog= async (c:Context)=>{
    const body = await c.req.json()
    const checkBlogBody= createBlogZod.safeParse(body)
    if(!checkBlogBody.success){
        return c.json({
            message:"bad request wrong body"
        },500)
    }
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const userId = c.get('userId')
    if(!userId){
        return c.json({
            error:"user is not authenticated",
            status:401
        })
    }
    const blog=await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:userId
        }
    })
    return c.json({
        message:`congratulation your blog ${blog.title} has been posted successfully`,
        status:200
    })
}

export const updateBlog = async (c: Context)=>{
    const body = await c.req.json();
    const checkUpdateBlogBody= updateBlogZod.safeParse(body)
    if(!checkUpdateBlogBody.success){
        return c.json({
            message:"wrong body has been given",
        },500)
    }
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog= await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content,
            published:body.published
        }
    })
    if(!blog){
        return c.json({
            message:"there is no record we have with this id",
        },404)
    }
    return c.json({
        message:"blog updated"
    },200)
}

export const getBlogs =async  (c: Context)=>{
    const blogid= await c.req.param('id')
    if(!blogid){
        return c.json({
            message:"missing blog id"
    },400)
    }
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const blog= await prisma.post.findFirst({
            where:{
                id:blogid
            }
        })
        return c.json({
            message:`fetching blog data`,
            blog:blog
        })
    }catch(err){
        return c.json({
            message:"can't find a blog with this id"
        },404)
    }
    //console.log(blog)

}

export const bulkBlogs = async(c:Context)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const allBlogs= await prisma.post.findMany() 
        const titleOfBlog = allBlogs.map(mp=>mp.title)
       if(titleOfBlog==null) throw new Error;
       
        return c.json({
           titleOfBlog
        },200)
    }catch(err){
        return c.json({
            err
        },411)
    }
}