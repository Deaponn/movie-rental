import styled from "styled-components"
import { device } from "../../constants/breakpoints"

const Wrapper = styled.div`
    height: 200px;
    background-color: aquamarine;

    @media ${device.tablet} {
        width: 90%;
        margin: 20px auto 0;
    }
`

export default function Tile({title, poster_path, release_date, vote_average}){
    return <Wrapper>movie tile</Wrapper>
}