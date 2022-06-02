import { Content } from "./NavigationItem";

export default function ActionButton({action, title}) {
    return <Content title={title} onNavigate={() => action()} />;
}
