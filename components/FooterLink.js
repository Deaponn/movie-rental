import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
    font-family: Lato, sans-serif;
    margin: 0;
    width: 90%;
    font-size: 32px;
    color: ${({ theme }) => theme.font.primary};
    cursor: pointer;
`;

const A = styled.a`
    font-family: Lato, sans-serif;
    margin: 0;
    width: 90%;
    font-size: 32px;
    text-decoration: none;
    color: ${({ theme }) => theme.font.primary};
`;

export default function FooterLink({ href, title, auth }) {
    if (auth) return <A href={href}>{title}</A>

    return (
        <Link href={href} passHref>
            <Wrapper>{title}</Wrapper>
        </Link>
    );
}
