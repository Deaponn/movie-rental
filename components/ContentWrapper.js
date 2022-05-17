import styled from "styled-components";
import { device } from "../constants/breakpoints";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 84px;
    overflow: auto;

    @media ${device.tablet} {
        top: 56px;
    }
`;

export default function ContentWrapper({ children }){
    return <Wrapper>{children}</Wrapper>
}