import {neon} from '@neondatabase/serverless'

const sql = neon(`${process.env.DATEBASE_URL}`);

export default sql;