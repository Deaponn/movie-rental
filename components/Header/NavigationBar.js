import styled from "styled-components";
import Image from "next/image";
import Hamburger from "./Hamburger";
import MenuSmartphones from "./MenuSmartphones";
import NavigationItem from "../NavigationItem";
import Switch from "./Switch";
import icon from "../../public/ui/icon.png";
import { device } from "../../constants/breakpoints";
import { useState } from "react";

const MobileContainer = styled.div`
    display: none;
    width: 100vw;
    height: 56px;
    background-color: ${({ theme }) => theme.primary};
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    z-index: 1;

    @media ${device.tablet} {
        display: flex;
        justify-content: flex-start;
    }
`;

const MobileImage = styled.div`
    width: min(100px, 20vw);
    margin-left: 10px;

    @media ${device.smartphoneSmall} {
        display: none;
    }
`;

const Text = styled.div`
    font-family: Helvetica, Sans-Serif;
    font-size: 32px;
    color: ${({ theme }) => theme.font.primary};
    margin-left: 10px;
`;

const DesktopContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 84px;
    background-color: ${({ theme }) => theme.primary};
    justify-content: center;
    align-items: center;
    position: fixed;
    border-bottom: 3px solid ${({ theme }) => theme.accent.second};
    z-index: 1;

    @media ${device.desktop} {
        justify-content: space-between;
    }

    @media ${device.tablet} {
        display: none;
    }
`;

const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 32px;
`;

const LeftNavBar = styled(NavBar)`
    margin-right: 32px;
    width: 424px;

    @media ${device.desktop} {
        margin-right: 0px;
    }

    @media ${device.laptop} {
        margin-left: 8px;
    }
`;

const RightNavBar = styled(NavBar)`
    margin-right: 112px;
    width: 272px;

    @media ${device.desktop} {
        margin-left: 0px;
    }

    @media ${device.laptop} {
        margin-right: 76px;
    }
`;

const SwitchContainer = styled.div`
    position: absolute;
    top: 24px;
    right: 24px;

    @media ${device.laptop} {
        right: 4px;
    }
`;

export default function NavigationBar({ leftNavigationItems, rightNavigationItems, toggleDarkMode, isDarkMode }) {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

    return (
        <>
            <MobileContainer>
                <MobileImage>
                    <Image src={icon} alt="Logo" width={100} height={70} placeholder="blur" />
                </MobileImage>
                <Text>Rent movies</Text>
                <Hamburger
                    isOpen={hamburgerIsOpen}
                    toggle={() => {
                        setHamburgerIsOpen((current) => !current);
                    }}
                />
                <MenuSmartphones
                    onNavigate={() => {
                        setHamburgerIsOpen(false);
                    }}
                    isOpen={hamburgerIsOpen}
                    items={[...leftNavigationItems, ...rightNavigationItems]}
                    isDarkMode={isDarkMode}
                    toggleDarkMode={toggleDarkMode}
                />
            </MobileContainer>
            <DesktopContainer>
                <LeftNavBar>
                    {leftNavigationItems.map(({ title, route, type }, index) => (
                        <NavigationItem key={index} title={title} route={route} type={type} />
                    ))}
                </LeftNavBar>
                <Image src={icon} alt="Logo" width={150} height={100} placeholder="blur" />
                <RightNavBar elements={rightNavigationItems.length}>
                    {rightNavigationItems.map(({ title, route, type }, index) => (
                        <NavigationItem key={index} title={title} route={route} type={type} header />
                    ))}
                </RightNavBar>
                <SwitchContainer>
                    <Switch isOn={isDarkMode} toggleDarkMode={toggleDarkMode} />
                </SwitchContainer>
            </DesktopContainer>
        </>
    );
}
