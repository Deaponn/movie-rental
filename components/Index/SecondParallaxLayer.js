import styled from "styled-components";
import NavigationItem from "../NavigationItem";
import { ParallaxLayer } from "@react-spring/parallax";

const StyledParallaxLayer = styled(ParallaxLayer)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.font.primary};
    text-align: center;
    font-family: Lato, Sans-Serif;
    z-index: 1;
    font-size: 48px;
`;

export default function SecondParallaxLayer() {
    return (
        <>
            <StyledParallaxLayer offset={0.6} speed={0.5} style={{zIndex: 2}}>
                <NavigationItem title="Login" route="/api/auth/login" type="auth0" />
            </StyledParallaxLayer>
            <StyledParallaxLayer offset={0.95} speed={0.9}>
                just login!
            </StyledParallaxLayer>
            <StyledParallaxLayer offset={0.999} speed={0.6}>
                it takes only so
                little work to begin
            </StyledParallaxLayer>
        </>
    );
}
