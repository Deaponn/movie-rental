import NavigationItem from "../NavigationItem";
import styled from "styled-components";
import { ParallaxLayer } from "@react-spring/parallax";
import { useUser } from "@auth0/nextjs-auth0";

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
    const { user, isLoading } = useUser();
    const isLogged = !isLoading && user;

    return (
        <>
            <StyledParallaxLayer offset={0.6} speed={0.5} style={{ zIndex: 2 }}>
                <NavigationItem
                    title={isLogged ? "Watch" : "Login"}
                    route={isLogged ? "/movies" : "/api/auth/login"}
                    type={isLogged ? "navigation" : "auth0"}
                />
            </StyledParallaxLayer>
            <StyledParallaxLayer offset={0.95} speed={0.9}>
                {isLogged ? "head to the library!" : "just login!"}
            </StyledParallaxLayer>
            <StyledParallaxLayer offset={0.999} speed={0.6}>
                it takes only so little work to begin
            </StyledParallaxLayer>
        </>
    );
}
