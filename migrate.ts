import { getDb } from './db';

export const runMigrations = async () => {
    const db = await getDb();
    db.migrate();
}
