import styled from "styled-components"
import Image from "next/image"
import { device } from "../../constants/breakpoints"
import { IMAGES_URL } from "../../constants/apiConnection"

const Wrapper = styled.div`
    @media ${device.tablet} {
        width: min(80%, 426px);
        margin: 30px auto 0;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
`

const Text = styled.div`
    font-family: Lato, sans-serif;
    font-size: 32px;
    color: ${({ theme }) => theme.font.primary};
`

const SmallerText = styled(Text)`
    font-size: 24px;
`

export default function Tile({ movie }){
    const {title, poster_path, release_date, vote_average} = movie
    const posterSrc = `${IMAGES_URL}${poster_path}`

    return <Wrapper>
        <Image src={posterSrc} width={426} height={639} alt="poster"></Image>
        <Info>
            <Text>{title}</Text>
            <SmallerText>Release: {release_date}</SmallerText>
            <SmallerText>Rating: {vote_average}</SmallerText>
        </Info>
    </Wrapper>
}