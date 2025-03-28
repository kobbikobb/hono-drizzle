import * as neon from 'drizzle-orm/node-postgres';
import * as migrator from 'drizzle-orm/node-postgres/migrator';

export const getDb = async () => {
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is not set!");
    }
    return neon.drizzle(process.env.DATABASE_URL);
};

export const migrate = async () => {
    const db = await getDb();
    await migrator.migrate(db, { migrationsFolder: './migrations' });
};
