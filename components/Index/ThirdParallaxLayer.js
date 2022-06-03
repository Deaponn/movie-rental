import styled from "styled-components";
import Image from "next/image";
import moviesLibrary from "../../public/gfx/movies-library.png";
import popcorn from "../../public/gfx/popcorn.png"
import { ParallaxLayer } from "@react-spring/parallax";

const StyledParallaxLayer = styled(ParallaxLayer)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: ${({ theme }) => theme.font.primary};
    font-family: Lato, Sans-Serif;
    text-align: center;
    z-index: 1;
    font-size: 48px;
`;

const ImageWrapper = styled.div`
    width: 100px;
    position: relative;
    left: -180px;
    top: 100px;
`;

export default function ThirdParallaxLayer({}) {
    return (
        <>
            <StyledParallaxLayer offset={1} speed={1.3}>
                <Image src={moviesLibrary} width={600} height={300} alt="movies" placeholder="blur" />
                now go to the library
            </StyledParallaxLayer>
            <StyledParallaxLayer offset={1.45} speed={1}>
                choose a movie to watch
            </StyledParallaxLayer>
            <StyledParallaxLayer offset={1.65} speed={0.7}>
                make yourself at home!
            </StyledParallaxLayer>
            <StyledParallaxLayer offset={1.6} speed={1.5}>
                <ImageWrapper>
                    <Image width={556} height={677} src={popcorn} alt="popcorn" placeholder="blur" />
                </ImageWrapper>
            </StyledParallaxLayer>
        </>
    );
}
