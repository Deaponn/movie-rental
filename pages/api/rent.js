import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import executeQuery from "../../lib/databaseConnection";

export default withApiAuthRequired(async function shows(req, res) {
    try {
        const {
            user: { sub: userId },
        } = getSession(req, res);
        switch (req.method) {
            case "GET": {
                const { check } = req.query;
                if(!check){
                    const result = await executeQuery({
                        query: `SELECT * FROM movies WHERE user_id='${userId}'`,
                    });
                    res.status(200).json({ success: true, result });
                    return;
                }
                const result = await executeQuery({
                    query: `SELECT * FROM movies WHERE user_id='${userId}' AND movie_id=?`,
                    argument: [check],
                });
                res.status(200).json({ success: true, isRented: result.length !== 0 });
                return;
            }
            case "POST": {
                const { movie_id, title } = JSON.parse(req.body);
                if (!movie_id || !title) return res.status(401).json({ success: false, message: "Invalid request" });
                await executeQuery({
                    query: "INSERT INTO movies(`movie_id`, `user_id`, `title`, `date`) VALUES(?, ?, ?, ?)",
                    argument: [movie_id, userId, title, new Date().toLocaleString()],
                });
                res.status(200).json({ success: true });
                return;
            }
            case "DELETE": {
                const { movie_id } = JSON.parse(req.body);
                if (!movie_id) return res.status(401).json({ success: false, message: "Invalid request" });
                await executeQuery({
                    query: `DELETE FROM movies WHERE movie_id=?`,
                    argument: [movie_id],
                });
                res.status(200).json({ success: true });
                return;
            }
            default: {
                res.status(200).json({ success: false, method: req.method, message: "Unsupported HTTP method" });
                return;
            }
        }
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({
            code: error.code,
            error: error.message,
        });
    }
});
