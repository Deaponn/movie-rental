import FirstParallaxLayer from "../components/Index/FirstParallaxLayer";
import Footer from "../components/Footer";
import FourthParallaxLayer from "../components/Index/FourthParallaxLayer";
import Head from "next/head";
import SecondParallaxLayer from "../components/Index/SecondParallaxLayer";
import ThirdParallaxLayer from "../components/Index/ThirdParallaxLayer";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { device } from "../constants/breakpoints";

const StyledParallax = styled(Parallax)`
    position: absolute;
    top: 0;
    left: 0;
`;

const Background = styled.div`
    background-color: ${({ theme, which }) => theme.panels[which]};
    height: ${() => window.innerHeight}px;
`;

const DesktopInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    height: calc(100vh - 500px);
    font-family: Lato, sans-serif;
    color: ${({ theme }) => theme.font.primary};
    background-color: ${({ theme }) => theme.panels.fourth};
    font-size: 48px;

    @media ${device.tablet}{
        display: none;
    }
`

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
                    <DesktopInfo>Do not hesitate, explore the website!</DesktopInfo>
                    <Footer />
                </ParallaxLayer>
                <FirstParallaxLayer />
                <SecondParallaxLayer />
                <ThirdParallaxLayer />
                <FourthParallaxLayer />
            </StyledParallax>
        </>
    );
}
