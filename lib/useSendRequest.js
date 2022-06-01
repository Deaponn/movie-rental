import { useState } from "react";
import useSWR from "swr";

const fetcher = (url, method, argument) => fetch(url, { method, body: argument }).then((res) => res.json());

export default function useSendRequest(url, method, argument) {
    const [send, setSend] = useState(false);
    const { data, error } = useSWR(send ? [url, method, argument] : null, fetcher);
    if (data) setSend(false);
    if (error) console.log(error);
    return () => setSend(true);
}
