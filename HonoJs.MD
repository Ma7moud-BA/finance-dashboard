# HonoJs

since we have a project user the command 'bun add Hono'

## Integrate with NextJs

If you use the App Router, Edit app/api/[[...route]]/route.ts

This will make an endpoint to make every request go through hono instead of regular route handlers in NextJs.

## Best practice

Use app.route() to build a larger application without creating "Ruby on Rails-like Controllers".

If your application has /authors and /books endpoints and you wish to separate files from index.ts, create authors.ts and books.ts.

```js
// authors.ts
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json("list authors"));
app.post("/", (c) => c.json("create an author", 201));
app.get("/:id", (c) => c.json(`get ${c.req.param("id")}`));

export default app;
```

## RPC with Hono

RPC is a feature that allows the sharing of the API specification between the server and the client, in this project i used it with Zod validator.

with every route initialized with hono we can pass a middleware "The middleware is passed between the route and the initialization of context"

```js
app.get(
	"/hello",
	(middlewareGoesHere) => {},
	(c) => {
		// c stands for context
		return c.json({
			message: "Hello Next.js!",
		});
	}
);
```

[Zod Validator With Hono](https://github.com/honojs/middleware/tree/main/packages/zod-validator)
install the following:

bun add @hono/zod-validator
bun add zod

## Params validation

![validator options](/public/tutorial-assets/image.png)

after adding the zValidator you can choose what you are validating
Here is an example showing how to validate the param
![Example](/public/tutorial-assets/image-1.png)

Here is an example of how to validate the body
![Example2](/public/tutorial-assets/image-2.png)

We can also merge two validators
![MergeValidatorsExample](/public/tutorial-assets/image-3.png)

But why using this, when we start integrating the database from drizzle i am gonna share the schema from drizzle with the backend to make sure everything is type safe

## Protected routes in Hono

[Clerk Authentication in Hono](https://github.com/honojs/middleware/tree/main/packages/clerk-auth)

note: in the .env.local file we have the publishable_key from clerk marked as NEXT_PUBLIC (NEXT_PUBLIC exposes the environment variables to the client) but in order for this integration to work we have to make the publishable key in form of server only like this(CLERK_PUBLISHABLE_KEY=<Your-publishable-key>), so just duplicate the existing key and change the variable name of it.

### How to

by adding this line of code `app.use('*', clerkMiddleware())` it will make every route uses the middleware

add clerkMiddleware() pass teh context to the getAuth method to get access the userId then protect your route accordingly

```js
app.get("/hello", clerkMiddleware(), (c) => {
	const auth = getAuth(c);
	if (!auth?.userId) {
		return c.json({ error: "UnAuthorized" });
	}
	// c stands for context
	return c.json({
		message: "Hello Next.js!",
		userId: auth.userId,
	});
});
```
