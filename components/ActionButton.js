import { Content } from "./NavigationItem";

export default function ActionButton({ action, title, inactive, wide }) {
    return <Content title={title} onNavigate={action ? () => action() : null} inactive={inactive} wide={wide} />;
}
