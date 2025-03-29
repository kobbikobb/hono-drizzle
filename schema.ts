import { integer, text, pgTable } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    username: text("username").notNull(),
    email: text("email").notNull(),
    nickname: text("nickname")
});
