import { BASE_URL } from "../../constants/apiConnection"

export default async function handler(req, res) {
    const QUERY_URL = `${BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}`
    const query = await fetch(QUERY_URL)
    const movies = await query.json()
    res.status(200).json(movies.results);
}
