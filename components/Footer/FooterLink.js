import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
    font-family: Lato, sans-serif;
    margin: 0;
    width: 90%;
    font-size: 26px;
    color: ${({ theme }) => theme.font.primary};
    cursor: pointer;
`;

const A = styled.a`
    display: flex;
    align-items: center;
    font-family: Lato, sans-serif;
    margin: 0;
    width: 90%;
    font-size: 26px;
    text-decoration: none;
    color: ${({ theme }) => theme.font.primary};
`;

export default function FooterLink({ href, title, external, children }) {
    if (external) return <A href={href}>{title ? title : children}</A>

    return (
        <Link href={href} passHref>
            <Wrapper>{title}</Wrapper>
        </Link>
    );
}
