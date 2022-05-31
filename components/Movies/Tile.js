import styled from "styled-components";
import Image from "next/image";
import NavigationItem from "../NavigationItem";
import { device } from "../../constants/breakpoints";
import { IMAGES_URL } from "../../constants/apiConnection";

const Wrapper = styled.div`
    width: 426px;
    margin: 30px 30px 0;

    @media ${device.tablet} {
        width: min(80%, 426px);
        margin: 30px auto 0;
    }
`;

const ImageWrapper = styled.div`
    position: relative;

    & > div {
        position: absolute;
        transform: translate(6px, -48px);
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
`;

const Text = styled.div`
    font-family: Lato, sans-serif;
    font-size: 32px;
    color: ${({ theme }) => theme.font.primary};
`;

const SmallerText = styled(Text)`
    font-size: 24px;
`;

export default function Tile({ movie }) {
    const { id, title, poster_path, release_date, vote_average } = movie;
    const posterSrc = `${IMAGES_URL}${poster_path}`;
    const route = `/movie/${id}`
    
    return (
        <Wrapper>
            <ImageWrapper>
                <Image src={posterSrc} width={426} height={639} alt="poster" />
                <NavigationItem title="Details" route={route} />
            </ImageWrapper>
            <Info>
                <Text>{title}</Text>
                <SmallerText>Release: {release_date}</SmallerText>
                <SmallerText>Rating: {vote_average}</SmallerText>
            </Info>
        </Wrapper>
    );
}
