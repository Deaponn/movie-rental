import styled from "styled-components";
import { device } from "../constants/breakpoints";

const PaneLayout = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.secondary};
    padding: 30px 0;

    @media ${device.tablet} {
        display: block;
    }

    @media ${device.desktop} {
        justify-content: space-evenly;
    }
`;

const FirstPane = styled.div`
    width: 400px;
    margin: 30px 30px 0 30px;

    @media ${device.desktop} {
        margin-right: 0;
    }

    @media ${device.tablet} {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        margin: 0 auto 30px;
        width: min(80%, 426px);
    }
`;
const SecondPane = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    @media ${device.desktop} {
        width: max(550px, 40%);
    }

    @media ${device.laptop} {
        width: 70%;
    }

    @media ${device.tablet} {
        margin: 0 auto;
    }
`;

export default function TwoPaneLayout({ left, right }) {
    return (
        <PaneLayout>
            <FirstPane>{left}</FirstPane>
            <SecondPane>{right}</SecondPane>
        </PaneLayout>
    );
}
