import FooterLink from "./Footer/FooterLink";
import Image from "next/image";
import fbIcon from "../public/gfx/facebook-icon.png";
import githubIcon from "../public/gfx/github-icon.png";
import instagramIcon from "../public/gfx/instagram-icon.png";
import linkedinIcon from "../public/gfx/linkedin-icon.png";
import styled from "styled-components";
import { device } from "../constants/breakpoints";
import { useUser } from "@auth0/nextjs-auth0";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 56px;
    border-top: 3px solid ${({theme}) => theme.accent.first};
    width: calc(100vw - (100vw - 100%));
    height: 500px;
    background-color: ${({ theme }) => theme.primary};

    @media ${device.tablet} {
        padding-top: 0px;
        height: calc(100vh - 56px);
        flex-direction: column;
    }
`;

const FooterGroup = styled.div`
    padding: 10px;
    width: 25vw;

    @media ${device.laptop} {
        width: 30vw;
    }

    @media ${device.tablet} {
        width: 80%;
        margin: 0 auto;
    }

    @media ${device.smartphoneBig} {
        padding: 3px;
    }
`;

const SocialMedia = styled(FooterGroup)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media ${device.tablet} {
        height: 240px;
    }

    & > a {
        margin-top: 10px;
    }

    & > a > div {
        margin-left: 10px;
    }
`;

const Title = styled.h2`
    font-family: Lato, sans-serif;
    margin: 0;
    width: 90%;
    color: ${({ theme }) => theme.font.primary};
    border-bottom: 5px solid ${({ theme }) => theme.font.primary};
    font-size: 22px;
`;

const Text = styled.div`
    font-family: Lato, sans-serif;
    margin: 0;
    width: 90%;
    font-size: 24px;
    color: ${({ theme }) => theme.font.primary};

    @media ${device.laptop} {
        font-size: 20px;
    }
`;

export default function Footer() {
    const { user, error, isLoading } = useUser();
    const isNotLogged = isLoading || !user;

    if (error) return <div>an error occured while retrieving login information: {error}</div>;

    return (
        <Wrapper>
            <FooterGroup>
                <Title>Menu</Title>
                <FooterLink title="Home" href="/" />
                <FooterLink title="Watch" href="/movies" />
                <FooterLink title="About" href="/about" />
                {isNotLogged && (
                    <>
                        <FooterLink title="Login" href="/api/auth/login" external />
                    </>
                )}
                {!isNotLogged && (
                    <>
                        <FooterLink title="Account" href="/account" />
                        <FooterLink title="Logout" href="/api/auth/logout" external />
                    </>
                )}
            </FooterGroup>
            <SocialMedia>
                <Title>Social media</Title>
                <FooterLink href="https://www.facebook.com/" external>
                    <Image src={fbIcon} alt="fb" height={40} width={40} />
                    <div>Facebook</div>
                </FooterLink>
                <FooterLink href="https://www.instagram.com/" external>
                    <Image src={instagramIcon} alt="instagram" height={40} width={40} />
                    <div>Instagram</div>
                </FooterLink>
                <FooterLink href="https://github.com/Deaponn/" external>
                    <Image src={githubIcon} alt="github" height={40} width={40} />
                    <div>Github</div>
                </FooterLink>
                <FooterLink href="https://www.linkedin.com/in/bartosz-sajecki/" external>
                    <Image src={linkedinIcon} alt="linkedin" height={40} width={40} />
                    <div>Linkedin</div>
                </FooterLink>
            </SocialMedia>
            <FooterGroup>
                <Title>Info</Title>
                <Text>Author: Bartosz Sajecki</Text>
                <Text>© 2022</Text>
            </FooterGroup>
        </Wrapper>
    );
}
