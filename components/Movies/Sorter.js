import styled from "styled-components";
import { device } from "../../constants/breakpoints";
import { useState } from "react";
import ActionButton from "../ActionButton";

const popularAsc = (first, second) => first.popularity - second.popularity;
const popularDesc = (first, second) => second.popularity - first.popularity;
const ratingAsc = (first, second) => first.vote_average - second.vote_average;
const ratingDesc = (first, second) => second.vote_average - first.vote_average;

const Wrapper = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.secondary};

    & > div {
        margin-left: 38px;
    }

    @media ${device.tablet} {
        height: 60px;
        justify-content: space-evenly;
        align-items: end;

        & > div {
            margin-left: 0;
        }
    }
`;

export default function Sorter({ movies, setMovies }) {
    const [currentOrder, setCurrentOrder] = useState("popularDesc");

    return (
        <Wrapper>
            <ActionButton
                action={() => {
                    const moviesCopy = JSON.parse(JSON.stringify(movies));
                    currentOrder === "popularDesc" ? moviesCopy.sort(popularAsc) : moviesCopy.sort(popularDesc)
                    setMovies(moviesCopy);
                    setCurrentOrder(current => current === "popularDesc" ? "popularAsc" : "popularDesc")
                }}
                title={currentOrder === "popularDesc" ? "Popularity ∧" : "Popularity ∨"}
                wide
            />
            <ActionButton
                action={() => {
                    const moviesCopy = JSON.parse(JSON.stringify(movies));
                    currentOrder === "ratingDesc" ? moviesCopy.sort(ratingAsc) : moviesCopy.sort(ratingDesc)
                    setMovies(moviesCopy);
                    setCurrentOrder(current => current === "ratingDesc" ? "ratingAsc" : "ratingDesc")
                }}
                title={currentOrder === "ratingDesc" ? "Rating ∧" : "Rating ∨"}
            />
        </Wrapper>
    );
}
