import ContentWrapper from "../../components/ContentWrapper";
import styled from "styled-components";
import Image from "next/image";
import ActionButton from "../../components/ActionButton";
import useSWR from "swr";
import { BASE_URL, IMAGES_URL } from "../../constants/apiConnection";
import { device } from "../../constants/breakpoints";
import { useUser } from "@auth0/nextjs-auth0";
import TwoPaneLayout from "../../components/TwoPaneLayout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export async function getStaticProps({ params }) {
    const { id } = params;
    const QUERY_STRING = `${BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`;
    const query = await fetch(QUERY_STRING);
    const movie = await query.json();
    return {
        props: { movie },
    };
}

export async function getStaticPaths() {
    const QUERY_STRING = `${BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}`;
    const query = await fetch(QUERY_STRING);
    const movies = await query.json();
    const paths = movies.results.map(({ id }) => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: "blocking",
    };
}

const ImageWrapper = styled.div`
    width: 500px;

    @media ${device.desktop} {
        width: 400px;
    }

    @media ${device.tablet} {
        width: min(80%, 426px);
    }
`;

const Text = styled.div`
    font-family: Lato, sans-serif;
    font-size: 32px;
    text-align: center;
    color: ${({ theme }) => theme.font.primary};
    width: 800px;

    @media ${device.desktop} {
        width: unset;
    }
`;

const Description = styled(Text)`
    font-size: 18px;
    padding: 10px;
`;

const Genres = styled(Description)`
    font-size: 26px;
    color: ${({ theme }) => theme.font.secondary};
`;

const SmallerText = styled(Text)`
    font-size: 22px;
`;

export default function Movie({ movie }) {
    const { user, isLoading } = useUser();
    const { id, title, release_date, vote_average, vote_count, poster_path, overview, genres } = movie;
    const posterSrc = `${IMAGES_URL}${poster_path}`;
    const { data, mutate } = useSWR(`/api/rent?check=${id}`, fetcher, { refreshInterval: 250 });
    const rentMovie = async () => {
        fetch("/api/rent", { method: "POST", body: JSON.stringify({ movieId: id, title }) });
        mutate({ isRented: true });
    };
    const returnMovie = async () => {
        fetch("/api/rent", { method: "DELETE", body: JSON.stringify({ movieId: id }) });
        mutate({ isRented: false });
    };

    return (
        <ContentWrapper>
            <TwoPaneLayout
                left={
                    <>
                        <ImageWrapper>
                            <Image src={posterSrc} width={426} height={639} alt="poster" />
                        </ImageWrapper>
                    </>
                }
                right={
                    <>
                        <Text>{title}</Text>
                        <Description>{overview}</Description>
                        <Genres>{genres.map(({ name }, index) => (index + 1 === genres.length ? name : `${name}, `))}</Genres>
                        <SmallerText>Release: {release_date}</SmallerText>
                        <SmallerText style={{ marginBottom: "20px" }}>
                            Rating: {vote_average} / {vote_count} votes
                        </SmallerText>
                        {user && (
                            <ActionButton
                                action={data ? (data.isRented ? returnMovie : rentMovie) : () => {}}
                                title={data ? (data.isRented ? "Return" : "Rent") : "Loading"}
                            />
                        )}
                        {!user && !isLoading && <ActionButton action={() => {}} title={isLoading ? "Loading" : "Blocked"} />}
                    </>
                }
            />
        </ContentWrapper>
    );
}
