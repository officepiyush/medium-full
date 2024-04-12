import { Hono } from 'hono'
import { userRouter } from './router/user';
import { blogRouter } from './router/blog';
import {cors} from "hono/cors"

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string;
    JWT_SECRET: string

	}
}>();
app.use("/*", cors())
app.route("api/user", userRouter);
app.route("api/blog", blogRouter);

// app.use('api/user/blog', async(c, next) => {  
//   const header = c.req.header("authorization") || "";
//   const response = await verify(header, c.env.JWT_SECRET)
//   if(response.id) {
//   next()
//   } else {
//     c.status(403)
//     return c.json({error: "unauthorized"})
//   }
// })

export default app;