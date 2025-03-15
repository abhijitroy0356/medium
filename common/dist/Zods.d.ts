import { z } from 'zod';
export declare const signupZod: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export type SignupInput = z.infer<typeof signupZod>;
export declare const signinZod: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type SigninInput = z.infer<typeof signinZod>;
export declare const createBlogZod: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export type CreateBlogZod = z.infer<typeof createBlogZod>;
export declare const updateBlogZod: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    published: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title?: string | undefined;
    content?: string | undefined;
    published?: boolean | undefined;
}, {
    id: string;
    title?: string | undefined;
    content?: string | undefined;
    published?: boolean | undefined;
}>;
export type UpdateBlogZod = z.infer<typeof updateBlogZod>;
