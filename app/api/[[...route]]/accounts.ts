import { Hono } from "hono";
import { db } from "@/db/drizzle";
import { accounts, insertAccountSchema } from "@/db/schema";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { eq } from "drizzle-orm";
import { zValidator } from "@hono/zod-validator";
import { createId } from "@paralleldrive/cuid2";
// we should chain the .get method directly with Hono function to get use of the RPC

const app = new Hono()
	.get("/", clerkMiddleware(), async (c) => {
		const auth = getAuth(c);
		if (!auth?.userId) {
			return c.json({ error: "Unauthorized" }, 401);
		}
		const data = await db
			.select({ id: accounts.id, name: accounts.name })
			.from(accounts)
			.where(eq(accounts.userId, auth.userId)); // get accounts for the logged in user
		return c.json({ data });
	})
	.post(
		"/",
		clerkMiddleware(),
		zValidator("json", insertAccountSchema.pick({ name: true })), // validating what type of json this post will accept// using pick method because the userID will be assigned using the auth variable
		async (c) => {
			const auth = getAuth(c);
			const values = c.req.valid("json");
			if (!auth?.userId) {
				return c.json({ error: "Unauthorized" }, 401);
			}
			const [data] = await db //in drizzle we always gets an array because they are staying true to sequel it keeps stuck  so destructure it to get the first item and the only item in it
				.insert(accounts)
				.values({
					id: createId(), // this will create a unique id using @paralleldrive/cuid2 package
					userId: auth.userId,
					...values,
				})
				.returning(); // without chaining .returning nothing will be returned
			return c.json({ data });
		}
	);
export default app;
