import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";
import { UserProvider } from "@auth0/nextjs-auth0";
import { light, dark } from "../constants/themes";
import Footer from "../components/Footer";

const GlobalStyle = createGlobalStyle`
    * {
        transition: var(--theme-color-transition);
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: hidden;
        --theme-color-transition: background-color 0.5s, color 0.5s;
    }
`;

const Wrapper = styled.div`
    ${({ noStyle }) => (noStyle ? "" : "height:100vh; overflow: auto;")}
`;

export default function App({ Component, pageProps }) {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const { pathname } = useRouter();

    return (
        <>
            <GlobalStyle />
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/vjf5mqk.css"></link>
            </Head>
            <UserProvider>
                <ThemeProvider theme={isDarkMode ? dark : light}>
                    <Wrapper noStyle={pathname === "/"}>
                        <Header
                            toggleDarkMode={() => {
                                setIsDarkMode(!isDarkMode);
                            }}
                            isDarkMode={isDarkMode}
                        />
                        <Component {...pageProps} />
                        {pathname !== "/" && <Footer />}
                    </Wrapper>
                </ThemeProvider>
            </UserProvider>
        </>
    );
}
