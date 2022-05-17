import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Head from "next/head";
import FirstParallaxLayer from "../components/index/FirstParallaxLayer";
import SecondParallaxLayer from "../components/index/SecondParallaxLayer";

const StyledParallax = styled(Parallax)`
    position: absolute;
    top: 0;
    left: 0;
`;

const StyledParallaxLayer = styled(ParallaxLayer)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Home() {
    return (
        <>
            <Head>
                <title>Movie shop</title>
            </Head>
            <StyledParallax pages={4}>
                <FirstParallaxLayer />
                <SecondParallaxLayer />
                {/* <StyledParallaxLayer offset={3} speed={0.1} style={{ backgroundColor: "#ff6d6d" }} />

                <StyledParallaxLayer offset={3} speed={0.1}>
                    <p>Scroll up</p>
                </StyledParallaxLayer> */}
            </StyledParallax>
        </>
    );
}
