import zennv from 'zennv';
import {z} from 'zod';

export const env = zennv({
    dotenv: true,
    schema:z.object({
        HOST: z.string(),
        PORT: z.number().default(3000),
        DATABASE_CONNNECTION: z.string(),
    }),
})