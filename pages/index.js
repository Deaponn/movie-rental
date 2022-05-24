import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Head from "next/head";
import FirstParallaxLayer from "../components/Index/FirstParallaxLayer";
import SecondParallaxLayer from "../components/Index/SecondParallaxLayer";
import ThirdParallaxLayer from "../components/Index/ThirdParallaxLayer";
import Footer from "../components/Footer";
import FourthParallaxLayer from "../components/Index/FourthParallaxLayer";

const StyledParallax = styled(Parallax)`
    position: absolute;
    top: 0;
    left: 0;
`;

const Background = styled.div`
    background-color: ${({ theme, which }) => theme.panels[which]};
    height: ${() => window.innerHeight}px;
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
                    <Background which="fourth" />
                    <Footer mainSite />
                </ParallaxLayer>
                <FirstParallaxLayer />
                <SecondParallaxLayer />
                <ThirdParallaxLayer />
                <FourthParallaxLayer />
            </StyledParallax>
        </>
    );
}
