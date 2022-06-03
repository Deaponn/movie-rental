import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";
import { useUser } from "@auth0/nextjs-auth0";
import useSWR from "swr";
import Image from "next/image";
import profilePic from "../public/gfx/profile-pic.png";
import { device } from "../constants/breakpoints";
import ActionButton from "../components/ActionButton";
import TwoPaneLayout from "../components/TwoPaneLayout";

const fetcher = (url, method, argument) => fetch(url, { method, body: argument }).then((res) => res.json());

const Text = styled.div`
    font-family: Lato, sans-serif;
    font-size: 28px;
    text-align: center;
    width: 90%;
    color: ${({ theme }) => theme.font.primary};
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 120px);
`;

const MovieText = styled(Text)`
    font-size: 26px;
    text-align: unset;
`;

const Movie = styled.div`
    display: flex;
    align-items: center;
    border-top: 3px solid ${({ theme }) => theme.accent.third};
    margin-bottom: 15px;
    width: 90%;

    @media ${device.tablet} {
        width: min(90%, 475px);
    }
`;

export default function Account({}) {
    const { user: { name, sub } = {}, error: userError, isLoading } = useUser();
    const { data, error: fetchError, mutate } = useSWR(sub ? `/api/rent?user_id=${sub}` : null, fetcher);
    const returnMovie = async (movieId) => {
        fetch("/api/rent", { method: "DELETE", body: JSON.stringify({ movieId }) });
        const newList = data.result.filter((movie) => movie.id !== movieId);
        console.log(newList);
        mutate({ ...data, result: newList });
    };

    if (userError) return <ContentWrapper>{JSON.stringify(userError)}</ContentWrapper>;
    if (fetchError) return <ContentWrapper>{JSON.stringify(fetchError)}</ContentWrapper>;
    if (!sub) return <ContentWrapper>access denied</ContentWrapper>;

    return (
        <ContentWrapper>
            <TwoPaneLayout
                left={
                    <>
                        <Image src={profilePic} placeholder="blur" alt="profile picture" />
                        <Text>Logged in as:</Text>
                        <Text>{isLoading ? "loading..." : name}</Text>
                    </>
                }
                right={
                    <>
                        <Text style={{ marginBottom: "15px" }}>Movies you have rented:</Text>
                        {!data ? (
                            <Text>Loading movie list...</Text>
                        ) : (
                            data.result.map(({ id, title, date, movie_id }) => (
                                <Movie key={id}>
                                    <Details>
                                        <MovieText>{title}</MovieText>
                                        <MovieText>At: {date}</MovieText>
                                    </Details>
                                    <ActionButton
                                        action={() => {
                                            returnMovie(movie_id);
                                        }}
                                        title={"Return"}
                                    />
                                </Movie>
                            ))
                        )}
                    </>
                }
            />
        </ContentWrapper>
    );
}
