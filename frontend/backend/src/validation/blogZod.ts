import {z} from 'zod'

export const createBlogZod = z.object({
    title:z.string(),
    content:z.string().min(20)
})

export const updateBlogZod = z.object({
    id:z.string().uuid(),
    title:z.string().optional(),
    content:z.string().min(20).optional(),
    published:z.boolean().optional()
})