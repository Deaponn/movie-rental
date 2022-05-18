import styled from "styled-components";
import { device } from "../constants/breakpoints";

const Wrapper = styled.div`
    width: 100%;
    height: ${({ mainSite }) => (mainSite ? "100vh" : "500px")};
    background-color: ${({ theme }) => theme.primary};

    @media ${device.tablet} {
        padding-top: 56px;
        height: 100vh;
    }
`;

export default function Footer({ mainSite }) {
    return <Wrapper mainSite={mainSite}></Wrapper>;
}
