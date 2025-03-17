import { Hono } from 'hono';
import { bulkBlogs, createBlog, getBlogs, updateBlog } from '../../controllers/BlogController';
import { verify } from 'hono/jwt';
import { Context } from 'hono';

const blogRouter = new Hono<{
    Bindings:{
        JWT_SERECT:string
    },
    Variables: {
        userId: string;
    }
}>()

blogRouter.use('/*', async (c, next) => {
    const token = c.req.header('authorization'); // ✅ Get token directly

    if (!token) {
        return new Response(JSON.stringify({
            error: "Unauthorized: No token provided"
        }), { status: 401 });
    }

    try {
        const decoded = await verify(token, c.env.JWT_SERECT);
        if (decoded && decoded.id && typeof decoded.id === "string") {
            c.set("userId", decoded.id);
            await next();
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: "Unauthorized: Invalid token" }), { status: 401 });
    }
});

blogRouter.post('/',createBlog)
blogRouter.put('/',updateBlog)
blogRouter.get('/',getBlogs)
blogRouter.get('/bulk',bulkBlogs)

export default blogRouter