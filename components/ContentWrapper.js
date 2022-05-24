import styled from "styled-components";
import { device } from "../constants/breakpoints";

const Wrapper = styled.div`
    width: 100vw;
    padding-top: 84px;
    overflow: auto;

    @media ${device.tablet} {
        padding-top: 56px;
    }
`;

export default function ContentWrapper({ children }){
    return <Wrapper>{children}</Wrapper>
}