import styled from "styled-components";
import Image from "next/image";
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

export default function ThirdParallaxLayer({}) {
    return (
        <>
            <StyledParallaxLayer offset={1} speed={1.9}>
                <Image src="/gfx/movies-library.png" width={600} height={300} alt="movies" />
                now go to the library
            </StyledParallaxLayer>
            <StyledParallaxLayer offset={1.4} speed={1.6}>
                choose a movie
            </StyledParallaxLayer>
            <StyledParallaxLayer offset={1.5} speed={1.3}>
                make yourself at home!
            </StyledParallaxLayer>
        </>
    );
}
