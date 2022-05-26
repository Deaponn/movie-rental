import styled from "styled-components";
import Head from "next/head";
import ContentWrapper from "../components/ContentWrapper";
import { useUser } from "@auth0/nextjs-auth0"
import { NEXT_API_URL } from "../constants/apiConnection";
import Showcase from "../components/Movies/Showcase";

const UnloggedInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: space-evenly;
    width: 100%;
    height: 100px;
    background-color: red;
`;

export async function getStaticProps(){
    const data = await fetch(`${NEXT_API_URL}/api/hello`)
    const movies = await data.json()

    return {
        props: {
            movies
        },
        revalidate: 60 * 60 * 24 // fetch new movies every 24 hours
    }
}

export default function Movies({ movies }) {
    const { user, error, isLoading } = useUser();
    const isNotLogged = isLoading || !user

    if (error) return <div>an error occured while retrieving login information: {error}</div>;

    return (
        <ContentWrapper>
            <Head>
                <title>Movies</title>
            </Head>
            {isNotLogged && <UnloggedInfo>llllllllllllllllll</UnloggedInfo>}
            {!isNotLogged && <Showcase movies={movies} />}
        </ContentWrapper>
    );
}
