import {z} from 'zod'

export const signupZod = z.object({
    email:z.string().email(),
    name:z.string().min(5).optional(),
    password:z.string().min(6),
})

export const signinZod = z.object({
    email:z.string().email(),
    password:z.string().min(6)
})