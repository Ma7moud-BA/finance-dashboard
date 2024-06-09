## Neon

hosts databases
[Neon](https://neon.tech/)

## Setup

In neon make a new project, copy the Postgres link and paste it in the .env file

go to [This Doc](https://orm.drizzle.team/docs/get-started-postgresql#neon) from Drizzle to connect to Neon + download `drizzle-zod@` +`drizzle kit`
make a folder named db then a file name drizzle.ts the paste the following in it to initialize the drizzle entrypoint

```js
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
const db = drizzle(sql);
```

make a schema file to make the first schema

Follow [this doc](https://orm.drizzle.team/docs/sql-schema-declaration) to make schemas

install `dotenv` package as -D
install `pg` package as -D

add these in the package.json file

```js
    "db:generate": "drizzle-kit generate",
    "db:migrate": "drizzle-kit migrate",
    "db:studio": "drizzle-kit studio"
```

Create a drizzle.config.ts file in the root folder

```js
import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
	schema: "./db/schema.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
	verbose: true,
	strict: true,
});

```

first run db:generate then ddb:migrate and for UI for the db run db:studio
