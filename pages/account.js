import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";
import { useUser } from "@auth0/nextjs-auth0";

const Profile = styled.div`
    height: calc(100vh - 150px);
    background-color: ${({ theme }) => theme.secondary};
`;

export default function Account({}) {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <ContentWrapper>skeleton loader</ContentWrapper>;
    if (error) return <ContentWrapper>{JSON.stringify(error)}</ContentWrapper>;
    if (!user) return <ContentWrapper>access denied</ContentWrapper>;

    const { name, sub } = user;

    return (
        <ContentWrapper>
            <Profile>
                Your account information: {name}, {sub}
            </Profile>
        </ContentWrapper>
    );
}
