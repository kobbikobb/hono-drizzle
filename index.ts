import { Hono } from 'hono';
import { users } from './schema';
import { getDb } from './db';

const app = new Hono();
const db = await getDb();

app.get('/users', async c => {
    const data = await db.select().from(users);
    return c.json(data, 200);
});

app.post('/users', async (c) => {
  const input = await c.req.json();
  
  const inserted = 
        await db.insert(users). 
        values(input).returning();

  return c.json(inserted, 201);
});

export default app;



