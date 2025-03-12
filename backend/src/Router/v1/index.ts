import { Hono } from "hono";
import authRouter from "./Auth";
import blogRouter from "./Blog";
const v1 = new Hono();

v1.route('/auth',authRouter)
v1.route('/blog',blogRouter)

export default v1;