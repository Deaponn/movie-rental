import { BASE_URL } from "../../../constants/apiConnection";

export default async function handler(req, res) {
    const { id } = req.query;
    const QUERY_URL = `${BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`;
    const query = await fetch(QUERY_URL);
    const movie = await query.json();
    res.status(200).json(movie);
}
