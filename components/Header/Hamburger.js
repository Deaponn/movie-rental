import styled, { useTheme } from "styled-components";
import { useSpring, animated } from "@react-spring/web"

const HamburgerDiv = styled.div`
    right: 9px;
    top: 9px;
    position: absolute;
    width: 48px;
    height: 38px;
    z-index: 2;
`;

const Bar = styled(animated.div)`
    position: absolute;
    width: 100%;
    height: 10%;
    background-color: ${({ isOpen, theme }) => (isOpen ? theme.accent.third : theme.accent.second)};
`;

export default function Hamburger({ isOpen, toggle }) {
    const theme = useTheme()

    const { translateY, scaleX, rearRotate, middleRotate } = useSpring({
        scaleX: isOpen ? -0.9 : 0.8,
        rearRotate: isOpen ? 45 : 0,
        middleRotate: isOpen ? "-135deg" : "0deg",
        translateY: isOpen ? 0 : 15, // second value is the gap between bars
    })

    const { backgroundColor } = useSpring({
        backgroundColor: isOpen ? theme.accent.third : theme.accent.second,
        config: { tension: 800, mass: 0.5, friction: 15 }
    })

    return (
        <HamburgerDiv
            onClick={() => {
                toggle();
            }}
        >
            <Bar style={{ backgroundColor, translateY: translateY.to(x => 17 - x + "px"), rotateZ: rearRotate.to(x => x + "deg"), scaleX }} />
            <Bar style={{ backgroundColor, translateY: "17px", rotateZ: middleRotate, scaleX }} />
            <Bar style={{ backgroundColor, translateY: translateY.to(x => 17 + x + "px"), rotateZ: rearRotate.to(x => -x + "deg"), scaleX }} />
        </HamburgerDiv>
    );
}
