import { Content } from "./NavigationItem";

export default function ActionButton({action}) {
    return <Content title="action" onNavigate={() => action()} />;
}
