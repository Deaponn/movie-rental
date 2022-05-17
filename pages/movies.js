import styled from "styled-components";
import Head from "next/head";
import ContentWrapper from "../components/ContentWrapper";

const UnloggedInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export default function Movies({}) {
    return (
        <ContentWrapper>
            <Head>
                <title>Movies</title>
            </Head>
            <UnloggedInfo>llllllllllllllllll</UnloggedInfo>
        </ContentWrapper>
    );
}
