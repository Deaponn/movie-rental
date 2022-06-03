import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";
import { device } from "../constants/breakpoints";

const Segment = styled.div`
    background-color: ${({ theme }) => theme.panels.first};
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Background = styled.div`
    height: 60vh;
    width: calc(100vw - (100vw - 100%));
    background-size: cover;
    background-position: 50% 30%;
    background-attachment: fixed;
    background-image: url(${({ src }) => src});
`;

const Text = styled.div`
    font-family: Lato, sans-serif;
    text-align: center;
    font-size: 60px;
    color: ${({ theme }) => theme.font.secondary};

    @media ${device.tablet}{
        font-size: 40px;
    }
`;

export default function About({}) {
    return (
        <ContentWrapper>
            <Background src="/gfx/cinema.jpg" />
            <Segment>
                <Text>
                    Usage:
                    <ol>
                        <li>Login</li>
                        <li>Choose a movie</li>
                        <li>Rent it!</li>
                    </ol>
                </Text>
            </Segment>
            <Background src="/gfx/projector.jpg" />
            <Segment>
                <Text>Movies change on a daily basis</Text>
                <Text>They are fetched from TMDB API</Text>
                <Text>Only the most popular movies make it to the list!</Text>
            </Segment>
            <Background src="/gfx/popcorn.jpg" />
        </ContentWrapper>
    );
}
