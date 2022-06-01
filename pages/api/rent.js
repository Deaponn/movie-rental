import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import executeQuery from "../../lib/databaseConnection";

export default withApiAuthRequired(async function shows(req, res) {
    try {
        switch (req.method) {
            case "GET": {
                const result = await executeQuery({
                    query: "SELECT * FROM movies"
                })
                res.status(200).json({ success: true, result });
                return;
            }
            case "POST": {
                const {movie_id, user_id, title} = JSON.parse(req.body)
                const result = await executeQuery({
                    query: "INSERT INTO movies(`movie_id`, `user_id`, `title`, `date`) VALUES(?, ?, ?, ?)",
                    argument: [movie_id, user_id, title, "dzisiaj"]
                })
                res.status(200).json({ success: true, result });
                return;
            }
            case "DELETE": {
                res.status(200).json({ success: true, method: req.method, body: req.body });
                return;
            }
            default: {
                res.status(200).json({ success: false, method: req.method, message: "unsupported HTTP method" });
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
