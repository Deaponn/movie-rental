import styled from "styled-components";
import NavigationItem from "../NavigationItem";
import Switch from "./Switch";
import { useSpring, animated } from "@react-spring/web";

const Menu = styled(animated.div)`
    position: absolute;
    width: 100vw;
    top: 100%;
    background-color: ${({ theme }) => theme.primary};
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    border-bottom: 3px solid ${({ theme }) => theme.accent.second};
`;

const Background = styled(animated.div)`
    position: absolute;
    top: 100%;
    width: 100vw;
`;

const SwitchWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    bottom: 8px;
    right: 8px;
`;

export default function MenuSmartphones({ isOpen, items, isDarkMode, toggleDarkMode, onNavigate }) {
    const { height, backgroundHeight, backgroundColor } = useSpring({
        height: isOpen ? items.length * 50 + "px" : "0px",
        backgroundHeight: isOpen ? "100vh" : "0vh",
        backgroundColor: isOpen ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0)",
    });

    return (
        <>
            <Menu style={{ height }}>
                {items.map(({ title, route, type }, index) => {
                    return (
                        <NavigationItem key={index} title={title} route={route} isOpen={isOpen} order={index + 1} type={type} onNavigate={onNavigate} header />
                    );
                })}
                <SwitchWrapper>
                    <Switch isOn={isDarkMode} toggleDarkMode={toggleDarkMode} />
                </SwitchWrapper>
            </Menu>
            <Background style={{ height: backgroundHeight, backgroundColor }} onGotPointerCapture={onNavigate} />
        </>
    );
}
