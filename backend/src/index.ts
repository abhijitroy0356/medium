import { Hono } from 'hono';
import v1 from './Router/v1';
import { cors } from 'hono/cors';
const app = new Hono()
app.use('/*',cors())
app.route('/api/v1',v1);

export default app;
