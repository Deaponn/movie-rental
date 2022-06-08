import ContentWrapper from "../components/ContentWrapper";
import Head from "next/head";
import Showcase from "../components/Movies/Showcase";
import { BASE_URL } from "../constants/apiConnection";
import { useState } from "react";
import Sorter from "../components/Movies/Sorter";

export async function getStaticProps() {
    const QUERY_URL = `${BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}`;
    const query = await fetch(QUERY_URL);
    const movies = await query.json();

    return {
        props: {
            initialMovies: movies.results,
        },
        revalidate: 60 * 60 * 24, // fetch new movies every 24 hours
    };
}

export default function Movies({ initialMovies }) {
    const [movies, setMovies] = useState(initialMovies)

    return (
        <ContentWrapper>
            <Head>
                <title>Movies</title>
            </Head>
            <Sorter movies={movies} setMovies={(array) => setMovies(array)} />
            <Showcase movies={movies} />
        </ContentWrapper>
    );
}
