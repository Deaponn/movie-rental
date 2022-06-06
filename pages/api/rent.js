import executeQuery from "../../lib/databaseConnection";
import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function shows(req, res) {
    try {
        const {
            user: { sub: userId },
        } = getSession(req, res);
        switch (req.method) {
            case "GET": {
                const { check } = req.query;
                if (!check) {
                    res.status(200).json({ success: false, message: "Missing mandatory query parameter 'check'" });
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
                const { movieId, title } = JSON.parse(req.body);
                if (!movieId || !title) return res.status(401).json({ success: false, message: "Invalid request" });
                await executeQuery({
                    query: "INSERT INTO movies(`movie_id`, `user_id`, `title`, `date`) VALUES(?, ?, ?, ?)",
                    argument: [movieId, userId, title, new Date().toLocaleString("pl")],
                });
                res.status(200).json({ success: true });
                return;
            }
            case "DELETE": {
                const { movieId } = JSON.parse(req.body);
                if (!movieId) return res.status(401).json({ success: false, message: "Invalid request" });
                await executeQuery({
                    query: `DELETE FROM movies WHERE movie_id=? AND user_id=?`,
                    argument: [movieId, userId],
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
