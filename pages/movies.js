import ContentWrapper from "../components/ContentWrapper";
import Head from "next/head";
import Showcase from "../components/Movies/Showcase";
import { BASE_URL } from "../constants/apiConnection";

export async function getStaticProps(){
    const QUERY_URL = `${BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}`
    const query = await fetch(QUERY_URL)
    const movies = await query.json()

    return {
        props: {
            movies: movies.results
        },
        revalidate: 60 * 60 * 24 // fetch new movies every 24 hours
    }
}

export default function Movies({ movies }) {
    return (
        <ContentWrapper>
            <Head>
                <title>Movies</title>
            </Head>
            <Showcase movies={movies} />
        </ContentWrapper>
    );
}
