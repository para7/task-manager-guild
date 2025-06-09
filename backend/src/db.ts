import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';

export interface CloudflareBindings {
  DB: D1Database;
}

export function createDb(database: D1Database) {
  return drizzle(database, { schema });
} 