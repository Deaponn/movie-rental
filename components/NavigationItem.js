import Link from "next/link";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

const A = styled.a`
    text-decoration: none;
`;

const OuterWrapper = styled.div`
    width: ${({ wide }) => (wide ? "160px" : "120px")};
    height: 40px;
    text-align: center;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    overflow: hidden;
    text-decoration: none;
    cursor: ${({ inactive }) => (inactive ? "not-allowed" : "pointer")};
`;

const Background = styled(animated.div)`
    grid-column: 1;
    grid-row: 1;
    background-image: linear-gradient(45deg, ${({ theme }) => theme.accent.third}, ${({ theme }) => theme.accent.first}, ${({ theme }) => theme.accent.third});
    width: 200%;
    height: 100%;
`;

const InnerWrapper = styled.div`
    grid-column: 1;
    grid-row: 1;
    width: ${({ wide }) => (wide ? "152px" : "112px")};
    height: 34px;
    background-color: ${({ theme }) => theme.primary};
    margin: auto;
    z-index: ${({ header }) => (header ? 1 : 0)};
`;

const StyledLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.font.primary};
    font-family: Lato, Sanf-Serif;
    font-size: 26px;
    background: -webkit-linear-gradient(${({ theme }) => theme.font.primary}, ${({ theme }) => theme.font.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: 100%;
    height: 100%;
`;

export function Content({ title, isOpen, order, onNavigate, inactive, wide }) {
    const [isHovered, setIsHovered] = useState(false);
    const { translateX } = useSpring({
        translateX: isHovered ? "-50%" : isOpen ? "-50%" : "0",
        delay: order ? order * 100 + 0.2 : 0,
    });

    return (
        <OuterWrapper
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
            onClick={onNavigate ? onNavigate : null}
            inactive={inactive}
            wide={wide}
        >
            <Background order={order} style={{ translateX }} />
            <InnerWrapper wide={wide}>
                <StyledLink>{title}</StyledLink>
            </InnerWrapper>
        </OuterWrapper>
    );
}

export default function NavigationItem({ title, route, isOpen, order, type, onNavigate, header }) {
    if (type === "auth0")
        return (
            <A href={route}>
                <Content title={title} isOpen={isOpen} order={order} onNavigate={onNavigate} header={header} />
            </A>
        );

    return (
        <Link href={route} passHref>
            <A>
                <Content title={title} isOpen={isOpen} order={order} onNavigate={onNavigate} header={header} />
            </A>
        </Link>
    );
}
