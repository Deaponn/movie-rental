import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Head from "next/head";
import FirstParallaxLayer from "../components/Index/FirstParallaxLayer";
import SecondParallaxLayer from "../components/Index/SecondParallaxLayer";

const StyledParallax = styled(Parallax)`
    position: absolute;
    top: 0;
    left: 0;
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
            </StyledParallax>
        </>
    );
}
