import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";

const Info = styled.div`
    height: calc(100vh - 409px - 84px);
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function About({}) {
    return (
        <ContentWrapper>
            <Info>This site is under development</Info>
        </ContentWrapper>
    );
}
