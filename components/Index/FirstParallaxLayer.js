import styled from "styled-components";
import { ParallaxLayer } from "@react-spring/parallax";
import { useSpring, useTransition, useSpringRef, useChain, animated } from "@react-spring/web";

const StyledParallaxLayer = styled(ParallaxLayer)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.font.primary};
    font-family: Lato, Sans-Serif;
    text-align: center;
`;

const EmoteParallaxLayer = styled(StyledParallaxLayer)`
    z-index: 1;
`;

const WelcomeMessage = styled(animated.p)`
    position: relative;
    font-size: 58px;
`;

const DetailedMessage = styled(animated.p)`
    font-size: 38px;
`;

const EmoteWrapper = styled(animated.div)``;

const Emote = styled(animated.div)`
    font-size: 128px;
`;

export default function FirstParallaxLayer() {
    const shakeRef = useSpringRef();
    const shake = useSpring({
        from: {
            translateX: "-80px",
            translateY: "190px",
            rotateZ: "-5deg",
        },
        to: {
            translateX: "-120px",
            translateY: "140px",
            rotateZ: "-25deg",
        },
        loop: { reverse: true },
        ref: shakeRef,
    });

    const welcomeMessageIn = useTransition(true, {
        from: {
            translateY: "-200px",
            scale: 0.7,
            opacity: 0,
        },
        enter: {
            translateY: "-150px",
            scale: 1,
            opacity: 1,
        },
        leave: {},
        delay: 300,
    });

    const detailedMessageIn = useTransition(true, {
        from: {
            translateY: "100px",
            scale: 0.7,
            opacity: 0,
        },
        enter: {
            translateY: "0px",
            scale: 1,
            opacity: 1,
        },
        leave: {},
        delay: 1000,
    });

    const emoteAnimationRef = useSpringRef();
    const emoteIn = useTransition(true, {
        from: {
            translateX: "-700px",
            rotateZ: "-65deg",
            scale: 0.7,
            opacity: 0,
        },
        enter: {
            translateX: "0px",
            rotateZ: "-5deg",
            scale: 1,
            opacity: 1,
        },
        leave: {},
        delay: 2000,
        ref: emoteAnimationRef,
    });

    useChain([emoteAnimationRef, shakeRef]);

    return (
        <>
            <StyledParallaxLayer offset={0} speed={1}>
                {welcomeMessageIn((styles) => (
                    <WelcomeMessage style={styles}>Wish to watch some movies?</WelcomeMessage>
                ))}
            </StyledParallaxLayer>
            <StyledParallaxLayer offset={0} speed={1.5}>
                {detailedMessageIn((styles) => (
                    <>
                        <DetailedMessage style={styles}>Follow these simple steps</DetailedMessage>
                    </>
                ))}
            </StyledParallaxLayer>
            <EmoteParallaxLayer sticky={{ start: 0, end: 3 }}>
                {emoteIn((styles) => (
                    <EmoteWrapper style={styles}>
                        <Emote style={shake}>👇</Emote>
                    </EmoteWrapper>
                ))}
            </EmoteParallaxLayer>
        </>
    );
}
