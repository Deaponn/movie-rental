import styled from "styled-components";
import Link from "next/link";
import FooterLink from "./FooterLink";
import { device } from "../constants/breakpoints";
import { useUser } from "@auth0/nextjs-auth0";

const Wrapper = styled.div`
    display: flex;
    padding-top: 84px;
    width: 100vw;
    height: ${({ mainSite }) => (mainSite ? window.innerHeight : 500)}px;
    background-color: ${({ theme }) => theme.primary};

    @media ${device.tablet} {
        padding-top: 56px;
        height: calc(100vh - 56px);
        flex-direction: column;
    }
`;

const Navigation = styled.div`
    height: 100%;
    width: 33%;
    padding: 10px;

    @media ${device.tablet} {
        // height: 33vh;
        width: 80%;
        margin: 0 auto;
    }
`;

const Title = styled.h2`
    font-family: Lato, sans-serif;
    margin: 0;
    width: 90%;
    color: ${({ theme }) => theme.font.primary};
    border-bottom: 5px solid ${({ theme }) => theme.font.primary};
`;

export default function Footer({ mainSite }) {
    const { user, error, isLoading } = useUser();
    const userNotLogged = isLoading || !user;

    if (error) return <div>an error occured while retrieving login information: {error}</div>;

    return (
        <Wrapper mainSite={mainSite}>
            <Navigation>
                <Title>Menu</Title>
                <FooterLink title="Home" href="/" />
                <FooterLink title="Watch" href="/movies" />
                <FooterLink title="About" href="/about" />
                {userNotLogged && <>
                    <FooterLink title="Login" href="/api/auth/login" auth />
                </>}
                {!userNotLogged && <>
                    <FooterLink title="Account" href="/account" />
                    <FooterLink title="Logout" href="/api/auth/logout" auth />
                </>}
            </Navigation>
            <Navigation>
                <Title>Menu</Title>
                <FooterLink title="Home" href="/" />
                <FooterLink title="Watch" href="/movies" />
                <FooterLink title="About" href="/about" />
            </Navigation>
            <Navigation>
                <Title>Menu</Title>
                <FooterLink title="Home" href="/" />
                <FooterLink title="Watch" href="/movies" />
                <FooterLink title="About" href="/about" />
            </Navigation>
        </Wrapper>
    );
}
