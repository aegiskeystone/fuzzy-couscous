import dotenv from 'dotenv';
import Database from 'better-sqlite3';


dotenv.config();

const db = new Database(process.env.DB_PATH);

export default db;