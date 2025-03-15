import { Hono } from "hono";
import { signin, signup } from "../../controllers/AuthController";

const authRouter = new Hono();

authRouter.post('/signup',signup)
authRouter.post('/signin',signin)

export default authRouter