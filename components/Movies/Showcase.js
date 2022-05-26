import styled from "styled-components"
import Tile from "./Tile"
import { device } from "../../constants/breakpoints"

const Wrapper = styled.div`
    display: flex;

    @media ${device.tablet}{
        flex-direction: column;
    }
`

export default function Showcase({ movies }) {
    console.log(movies)

    return <Wrapper>
        {movies.results.map(movie => <Tile key={movie.id} movie={movie} />)}
    </Wrapper>
}