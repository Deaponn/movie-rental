import styled from "styled-components";
import Image from "next/image";
import glassesEmoji from "../../public/gfx/3d-glasses-emoji.png";
import { ParallaxLayer } from "@react-spring/parallax";

const StyledParallaxLayer = styled(ParallaxLayer)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
    left: 140px;
    top: 100px;
`;

export default function FourthParallaxLayer({}) {
    return (
        <>
            <StyledParallaxLayer offset={1.15} speed={0.7}>
                share on social media
            </StyledParallaxLayer>
            <StyledParallaxLayer offset={1.4} speed={0.8}>
                tell your friends
            </StyledParallaxLayer>
            <StyledParallaxLayer offset={1.7} speed={0.9}>
                enjoy!
            </StyledParallaxLayer>
            <StyledParallaxLayer offset={1.7} speed={1.1}>
                <ImageWrapper>
                    <Image width={343} height={317} src={glassesEmoji} alt="swag-glasses-emoji" placeholder="blur" />
                </ImageWrapper>
            </StyledParallaxLayer>
        </>
    );
}
