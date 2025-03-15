"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogZod = exports.createBlogZod = exports.signinZod = exports.signupZod = void 0;
const zod_1 = require("zod");
exports.signupZod = zod_1.z.object({
    email: zod_1.z.string().email(),
    name: zod_1.z.string().min(5).optional(),
    password: zod_1.z.string().min(6),
});
exports.signinZod = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6)
});
exports.createBlogZod = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string().min(20)
});
exports.updateBlogZod = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    title: zod_1.z.string().optional(),
    content: zod_1.z.string().min(20).optional(),
    published: zod_1.z.boolean().optional()
});
