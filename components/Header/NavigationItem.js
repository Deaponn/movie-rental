import styled from "styled-components";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

const A = styled.a`
    text-decoration: none;
`;

const OuterWrapper = styled.div`
    width: 120px;
    height: 40px;
    text-align: center;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    overflow: hidden;
    text-decoration: none;
    cursor: pointer;
`;

const Background = styled(animated.div)`
    grid-column: 1;
    grid-row: 1;
    background-image: linear-gradient(45deg, ${({ theme }) => theme.accent.third}, ${({ theme }) => theme.accent.first}, ${({ theme }) => theme.accent.third});
    width: 200%;
    height: 100%;
    z-index: -1;
`;

const InnerWrapper = styled.div`
    grid-column: 1;
    grid-row: 1;
    width: 112px;
    height: 34px;
    background-color: ${({ theme }) => theme.primary};
    margin: auto;
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

export default function NavigationItem({ title, route, isOpen, order, type, onNavigate }) {
    const [isHovered, setIsHovered] = useState(false);
    const { translateX } = useSpring({
        translateX: isHovered ? "-50%" : (isOpen ? "-50%" : "0"),
        delay: order ? order * 100 + 0.2 : 0
    });

    const contents = (
        <OuterWrapper
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
            onClick={onNavigate ? onNavigate : null}
        >
            <Background order={order} style={{ translateX }} />
            <InnerWrapper>
                <StyledLink>{title}</StyledLink>
            </InnerWrapper>
        </OuterWrapper>
    );

    if (type == "auth0") return <A href={route}>{contents}</A>;

    return (
        <Link href={route} passHref>
            {contents}
        </Link>
    );
}
