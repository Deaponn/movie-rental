import { useUser } from "@auth0/nextjs-auth0";
import NavigationBar from "./NavigationBar";

const leftNavigation = [
    {
        title: "Home",
        route: "/",
        type: "navigation",
    },
    {
        title: "Movies",
        route: "/movies",
        type: "navigation",
    },
    {
        title: "About",
        route: "/about",
        type: "navigation",
    },
];

const rightNavigation = {
    logged: [
        {
            title: "Account",
            route: "/account",
            type: "navigation",
        },
        {
            title: "Logout",
            route: "/api/auth/logout",
            type: "auth0",
        },
    ],
    unlogged: [
        {
            title: "Login",
            route: "/api/auth/login",
            type: "auth0",
        },
    ],
};

export default function Header({ toggleDarkMode, isDarkMode }) {
    const { user, error, isLoading } = useUser();
    const rightNavigationItems = isLoading || !user ? rightNavigation.unlogged : rightNavigation.logged;

    if (error) return <div>an error occured while retrieving login information: {error}</div>;

    return (
        <NavigationBar
            leftNavigationItems={leftNavigation}
            rightNavigationItems={rightNavigationItems}
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
        />
    );
}
