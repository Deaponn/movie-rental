import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web"

const Wrapper = styled.div`
    width: 60px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    background-color: ${({ theme }) => theme.accent.second};
    border-radius: 20px;
    cursor: pointer;
`;

const Node = styled(animated.div)`
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 50%;
    position: relative;
`;

export default function Switch({ isOn, toggleDarkMode }) {
    const {  translateX, scaleY } = useSpring({
        translateX: isOn ? "-15px" : "15px",
        scaleY: isOn ? 1 : 0,
        config: {
            friction: 25
        }
    })

    return (
        <Wrapper
            isOn={isOn}
            onClick={() => {
                toggleDarkMode();
            }}
        >
            <Node style={{ translateX, scaleY: scaleY.to(x => x * x - x + 1) }} />
        </Wrapper>
    );
}
