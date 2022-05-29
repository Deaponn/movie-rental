import styled from "styled-components";
import ContentWrapper from "../../components/ContentWrapper";
import Image from "next/image";
import { IMAGES_URL } from "../../constants/apiConnection";
import { device } from "../../constants/breakpoints";

export async function getStaticProps({ params }) {
    const { id } = params;
    const data = await fetch(`/api/movie/${id}`);
    const movie = await data.json();
    return {
        props: { movie },
    };
}

export async function getStaticPaths() {
    const data = await fetch("/api/popular");
    const movies = await data.json();
    const paths = movies.map(({ id }) => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: "blocking",
    };
}

const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.panels.first};
    height: min(100vh, auto);
    padding: 30px 0;

    @media ${device.tablet}{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    width: min(80%, 426px);
`;

const Text = styled.div`
    font-family: Lato, sans-serif;
    font-size: 32px;
    color: ${({ theme }) => theme.font.primary};
`;

const Description = styled(Text)`
    font-size: 18px;
    text-align: center;
    padding: 10px;
`

const Genres = styled(Description)`
    font-size: 26px;
    color: ${({theme}) => theme.font.secondary}
`

const SmallerText = styled(Text)`
    font-size: 22px;
`;

export default function Movie({ movie }) {
    const {title, release_date, vote_average, vote_count, poster_path, overview, genres} = movie
    const posterSrc = `${IMAGES_URL}${poster_path}`;

    console.log(movie)

    return (
        <ContentWrapper>
            <Container>
                <ImageWrapper>
                    <Image src={posterSrc} width={426} height={639} alt="poster" />
                </ImageWrapper>
                <Text>{title}</Text>
                <Description>{overview}</Description>
                <Genres>{genres.map(({name}, index) => index + 1 === genres.length ? name : `${name}, `)}</Genres>
                <SmallerText>Release: {release_date}</SmallerText>
                <SmallerText>Rating: {vote_average} / {vote_count} votes</SmallerText>
            </Container>
        </ContentWrapper>
    );
}
