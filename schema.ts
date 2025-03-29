import { integer, text, pgTable } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    nickname: text("nickname")
});
