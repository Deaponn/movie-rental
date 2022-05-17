import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Head from "next/head";
import FirstParallaxLayer from "../components/Index/FirstParallaxLayer";
import SecondParallaxLayer from "../components/Index/SecondParallaxLayer";
import ThirdParallaxLayer from "../components/Index/ThirdParallaxLayer";

const StyledParallax = styled(Parallax)`
    position: absolute;
    top: 0;
    left: 0;
`;

const Background = styled.div`
    background-color: ${({ theme, which }) => theme.panels[which]};
    height: 33%;
`;

export default function Home() {
    return (
        <>
            <Head>
                <title>Movie shop</title>
            </Head>
            <StyledParallax pages={3}>
                <ParallaxLayer speed={1} factor={3}>
                    <Background which="first" />
                    <Background which="second" />
                    <Background which="third" />
                </ParallaxLayer>
                <FirstParallaxLayer />
                <SecondParallaxLayer />
                <ThirdParallaxLayer />
            </StyledParallax>
        </>
    );
}
