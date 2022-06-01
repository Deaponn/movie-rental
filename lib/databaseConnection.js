import mysql from "serverless-mysql";

const connection = mysql({
    config: {
        host: process.env.DATABASE_HOST,
        port: 3306,
        database: process.env.DATABASE_USERNAME,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
    },
});

export default async function executeQuery({query, argument}){
    try {
        const result = await connection.query(query, argument)
        await connection.end()
        return result
    } catch (error){
        return {error}
    }
}