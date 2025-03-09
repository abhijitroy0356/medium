import { Hono } from 'hono';
import { createBlog, getBlogs, updateBlog } from '../../controllers/BlogController';
import { verify } from 'hono/jwt';
import { Context } from 'hono';

const blogRouter = new Hono();

blogRouter.use('api/v1/blog/*',async (c:Context, next)=>{
    const header= c.req.header('authorization') || ""
    if(!header.startsWith("Bearer ")){
        return new Response(JSON.stringify({
            error:"Unauthorized token"
        }),{status:401})
    }
    const token =header.split(" ")[1];
    const decoded = await verify(token, c.env.JWT_SECRET);
    try {
        if( decoded && decoded.id){
           await next();
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: "Unauthorized: Invalid token" }), { status: 401 });
    }
    c.set('userId',decoded.id)
    await next();
})
blogRouter.post('/',createBlog)
blogRouter.put('/',updateBlog)
blogRouter.get('/:id',getBlogs)

export default blogRouter