import {neon, neonConfig} from '@neondatabase/serverless'
import {drizzle} from "drizzle-orm/neon-http"

neonConfig.fetchConnectionCache = true
 
if (!process.env.DATABASE_URl) {
    throw new Error("database url not found")
}

const sql = neon(process.env.DATABASE_URl)

export const db = drizzle(sql)
