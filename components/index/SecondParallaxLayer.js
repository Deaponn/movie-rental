import styled from "styled-components";
import { ParallaxLayer } from "@react-spring/parallax";
import { useSpring, useTransition, useSpringRef, useChain, animated } from "@react-spring/web";

const BackgroundParallax = styled(ParallaxLayer)`
    background-color: ${({ theme }) => theme.panels.second};
`;

const StyledParallaxLayer = styled(ParallaxLayer)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.font.primary};
    font-family: Lato, Sans-Serif;
    text-align: center;
`;

export default function SecondParallaxLayer({}) {
    return (
        <>
            <BackgroundParallax offset={0.9999} speed={0.3} />
            {/* <StyledParallaxLayer offset={1} speed={1} /> */}
        </>
    );
}
