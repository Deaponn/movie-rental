import { Content } from "./NavigationItem";

export default function ActionButton({action, title, inactive}) {
    return <Content title={title} onNavigate={action ? () => action() : null} inactive={inactive} />;
}
