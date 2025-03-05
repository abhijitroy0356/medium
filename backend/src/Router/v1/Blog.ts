import { Hono } from 'hono';
import { createBlog, getBlogs, updateBlog } from '../../controllers/BlogController';

const blogRouter = new Hono();

blogRouter.post('/blog',createBlog)
blogRouter.put('/blog',updateBlog)
blogRouter.get('/blog/:id',getBlogs)

export default blogRouter