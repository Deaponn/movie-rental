import styled from "styled-components";
import { device } from "../constants/breakpoints";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;

    
`;

export default function ContentWrapper({ children }){
    return <Wrapper>{children}</Wrapper>
}