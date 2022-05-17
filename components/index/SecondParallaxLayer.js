import styled from "styled-components";
import NavigationItem from "../Header/NavigationItem";
import { ParallaxLayer } from "@react-spring/parallax";

const StyledParallaxLayer = styled(ParallaxLayer)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.font.primary};
    font-family: Lato, Sans-Serif;
    z-index: 1;
    font-size: 48px;
`;

export default function SecondParallaxLayer({}) {
    return (
        <>
            <StyledParallaxLayer offset={0.6} speed={0.5}>
                <NavigationItem title="Login" route="/api/auth/login" type="auth0" />
            </StyledParallaxLayer>
            <StyledParallaxLayer offset={0.9} speed={0.7}>
                it takes only so
            </StyledParallaxLayer>
            <StyledParallaxLayer offset={0.97} speed={0.7}>
                little work to begin
            </StyledParallaxLayer>
        </>
    );
}
