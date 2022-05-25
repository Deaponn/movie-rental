import styled from "styled-components";
import Head from "next/head";
import ContentWrapper from "../components/ContentWrapper";

const UnloggedInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: space-evenly;
    width: 100%;
    height: 100px;
    background-color: red;
`;

export default function Movies({}) {
    return (
        <ContentWrapper>
            <Head>
                <title>Movies</title>
            </Head>
            <UnloggedInfo>llllllllllllllllll</UnloggedInfo>
            <UnloggedInfo>llllllllllllllllll</UnloggedInfo>
            <UnloggedInfo>llllllllllllllllll</UnloggedInfo>
            <UnloggedInfo>llllllllllllllllll</UnloggedInfo>
            <UnloggedInfo>llllllllllllllllll</UnloggedInfo>
            <UnloggedInfo>llllllllllllllllll</UnloggedInfo>
            <UnloggedInfo>llllllllllllllllll</UnloggedInfo>
            <UnloggedInfo>llllllllllllllllll</UnloggedInfo>
            <UnloggedInfo>llllllllllllllllll</UnloggedInfo>
            <UnloggedInfo>llllllllllllllllll</UnloggedInfo>
        </ContentWrapper>
    );
}
