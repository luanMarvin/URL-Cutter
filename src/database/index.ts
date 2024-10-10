import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

export default async function OpenDB(){
    const dbPath = path.resolve(__dirname, 'links.db')
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    })

    return db;
}

