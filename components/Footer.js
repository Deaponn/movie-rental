import styled from "styled-components";
import FooterLink from "./Footer/FooterLink";
import Image from "next/image";
import { device } from "../constants/breakpoints";
import { useUser } from "@auth0/nextjs-auth0";
import fbIcon from "../public/gfx/facebook-icon.png";
import instagramIcon from "../public/gfx/instagram-icon.png";
import githubIcon from "../public/gfx/github-icon.png";
import linkedinIcon from "../public/gfx/linkedin-icon.png";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 56px;
    border-top: 3px solid ${({theme}) => theme.accent.first};
    width: calc(100vw - (100vw - 100%));
    height: ${({ mainSite }) => (mainSite ? window.innerHeight : 500)}px;
    background-color: ${({ theme }) => theme.primary};

    @media ${device.tablet} {
        padding-top: 0px;
        height: calc(100vh - 56px);
        flex-direction: column;
    }

    @media ${device.smartphoneBig} {
        height: 100vh;
    }
`;

const FooterGroup = styled.div`
    padding: 10px;
    height: 380px;
    width: 25vw;

    @media ${device.laptop} {
        width: 30vw;
    }

    @media ${device.tablet} {
        width: 80%;
        margin: 0 auto;
    }
`;

const Links = styled(FooterGroup)`
    @media ${device.tablet} {
        height: 210px;
    }
`;

const SocialMedia = styled(FooterGroup)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media ${device.tablet} {
        height: 270px;
    }

    & > a {
        margin-top: 10px;
    }

    & > a > div {
        margin-left: 10px;
    }
`;

const Info = styled(FooterGroup)`
    @media ${device.tablet} {
        height: 100px;
    }
`;

const Title = styled.h2`
    font-family: Lato, sans-serif;
    margin: 0;
    width: 90%;
    color: ${({ theme }) => theme.font.primary};
    border-bottom: 5px solid ${({ theme }) => theme.font.primary};
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

export default function Footer({ mainSite }) {
    const { user, error, isLoading } = useUser();
    const userNotLogged = isLoading || !user;

    if (error) return <div>an error occured while retrieving login information: {error}</div>;

    return (
        <Wrapper mainSite={mainSite}>
            <Links>
                <Title>Menu</Title>
                <FooterLink title="Home" href="/" />
                <FooterLink title="Watch" href="/movies" />
                <FooterLink title="About" href="/about" />
                {userNotLogged && (
                    <>
                        <FooterLink title="Login" href="/api/auth/login" external />
                    </>
                )}
                {!userNotLogged && (
                    <>
                        <FooterLink title="Account" href="/account" />
                        <FooterLink title="Logout" href="/api/auth/logout" external />
                    </>
                )}
            </Links>
            <SocialMedia>
                <Title>Social media</Title>
                <FooterLink href="https://www.facebook.com/" external>
                    <Image src={fbIcon} alt="fb" height={50} width={50} />
                    <div>Facebook</div>
                </FooterLink>
                <FooterLink href="https://www.instagram.com/" external>
                    <Image src={instagramIcon} alt="instagram" height={50} width={50} />
                    <div>Instagram</div>
                </FooterLink>
                <FooterLink href="https://github.com/Deaponn/" external>
                    <Image src={githubIcon} alt="github" height={50} width={50} />
                    <div>Github</div>
                </FooterLink>
                <FooterLink href="https://www.linkedin.com/in/bartosz-sajecki-161a961b8/" external>
                    <Image src={linkedinIcon} alt="linkedin" height={50} width={50} />
                    <div>Linkedin</div>
                </FooterLink>
            </SocialMedia>
            <Info>
                <Title>Info</Title>
                <Text>Author: Bartosz Sajecki</Text>
                <Text>© 2022</Text>
            </Info>
        </Wrapper>
    );
}
