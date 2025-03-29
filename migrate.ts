import { migrate } from './db';

export const runMigrations = async () => {
    await migrate();
    console.log('Migration completed!');
}

await runMigrations();
