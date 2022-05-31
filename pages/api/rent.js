import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function shows(req, res) {
    try {
        switch(req.method){
            case "GET": {
                res.status(200).json({ success: true, method: req.method });
                return
            }
            case "POST": {
                res.status(200).json({ success: true, method: req.method, body: req.body });
                return
            }
            case "DELETE": {
                res.status(200).json({ success: true, method: req.method, body: req.body });
                return
            }
            default: {
                res.status(200).json({ success: false, method: req.method, message: "unsupported HTTP method" });
                return
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