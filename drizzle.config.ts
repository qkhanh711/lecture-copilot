import type {Config} from 'drizzle-kit'
import * as dotenv from 'dotenv'
dotenv.config({path: '.env' });


export default {
    driver: 'pg',
    schema: './src/lib/db/schema.ts', 
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!,
    }, 
} satisfies Config;

// npx drizzle-kit push:pg


// import type { Config } from "drizzle-kit";
// import * as dotenv from "dotenv";
// dotenv.config();
 
// export default {
//   schema: "./src/schema/*",
//   out: "./drizzle",
//   driver: "mysql2",
//   dbCredentials: {
//     uri: process.env.DATABASE_URL,
//   }
//    tablesFilter: ["project1_*"],
// } satisfies Config;