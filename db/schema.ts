import { pgTable, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
export const accounts = pgTable("accounts", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	plaidId: text("plaid_id"),
	userId: text("user_id").notNull(),
});

// this will create a schema for this table that we can use across the app
// bun add drizzle-zod
export const insertAccountSchema = createInsertSchema(accounts);
