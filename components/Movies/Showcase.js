import styled from "styled-components"
import Tile from "./Tile"
import { device } from "../../constants/breakpoints"

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background-color: ${({theme}) => theme.secondary};
    padding-bottom: 30px;

    @media ${device.tablet}{
        flex-direction: column;
        padding: 20px 0 40px 0;
    }
`

export default function Showcase({ movies, logged }) {
    return <Wrapper>
        {movies.results.map(movie => <Tile key={movie.id} movie={movie} logged={logged} />)}
    </Wrapper>
}