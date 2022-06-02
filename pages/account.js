import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";
import { useUser } from "@auth0/nextjs-auth0";
import useSWR from "swr";

const fetcher = (url, method, argument) => fetch(url, { method, body: argument }).then((res) => res.json());

const Profile = styled.div`
    height: calc(100vh - 150px);
    background-color: ${({ theme }) => theme.secondary};
`;

export default function Account({}) {
    const { user: {name, sub} = {}, error: userError, isLoading } = useUser();
    const { data, error: fetchError } = useSWR(sub ? `/api/rent?user_id=${sub}` : null, fetcher);

    if (isLoading) return <ContentWrapper>skeleton loader</ContentWrapper>;
    if (userError) return <ContentWrapper>{JSON.stringify(userError)}</ContentWrapper>;
    if (!sub) return <ContentWrapper>access denied</ContentWrapper>;

    return (
        <ContentWrapper>
            <Profile>
                Your account information: {name}, {sub}
            </Profile>
            <Profile>Filmy: {data ? JSON.stringify(data.result) : null}</Profile>
        </ContentWrapper>
    );
}
