import {neon} from '@neondatabase/serverless';
import {drizzle} from 'drizzle-orm/neon-http';
import dotenv from 'dotenv';
import {config} from 'dotenv';

dotenv.config();

//Load env vars

config({path: 'env'});

if(!process.env.DATABASE_URL){
    throw new Error ('DATABASE_URL is undefined');
}

//Init Neon client
const sql = neon(process.env.DATABASE_URL);

//Init Drizzle
export const db =  drizzle(sql);


