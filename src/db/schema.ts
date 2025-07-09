import { pgTable } from "drizzle-orm/pg-core";
import { PgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const chats = pgTable('chats', {
    id: serial('id').primaryKey(), 
    userId: text('user_id').notNull(), 
    message: text('messag').notNull(), 
    reply: text('reply').notNull(), 
    createdAt: timestamp('created_at').defaultNow().notNull()

})

export const users = pgTable('users',{
    userId: text('user_id').primaryKey(), 
    name: text('name').notNull(), 
    email: text('email').notNull(), 
    createdAt: timestamp('create_at').defaultNow().notNull()
});

// Type inference for Drizzle Queries
export type ChatInsert = typeof chats.$inferInsert;
export type ChatSelect = typeof chats.$inferSelect;
export type UserInsert = typeof users.$inferInsert;
export type UserSelect = typeof users.$inferSelect;

