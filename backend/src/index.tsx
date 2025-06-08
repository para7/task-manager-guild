import { type Context, Hono } from "hono";

type HonoContextVars = {
	Bindings: {
		MY_VAR: string;
		DB: D1Database;
	};
	Variables: {
		MY_VAR_IN_VARIABLES: string;
	};
};

const app = new Hono<HonoContextVars>();
export type HonoContext = Context<HonoContextVars, "*">;

app.use("/", async (c) => {
	return c.json({
		message: "Hello, world!",
	});
});

export default app;
