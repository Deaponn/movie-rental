import Head from "next/head";
import ContentWrapper from "../components/ContentWrapper";
import { NEXT_API_URL } from "../constants/apiConnection";
import Showcase from "../components/Movies/Showcase";

export async function getStaticProps(){
    const data = await fetch(`${NEXT_API_URL}/popular`)
    const movies = await data.json()

    return {
        props: {
            movies
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
