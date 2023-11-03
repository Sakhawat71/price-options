import Link from "../Link/Link";

const NavBar = () => {

    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/contact', name: 'Contact', id: 3 },
        { path: '/products', name: 'Product', id: 4 },
        { path: '/profile', name: 'UserProfile', id: 5 },
    ];

    return (
        <nav className="flex bg-gray-200 py-4">
            <ul className="md:flex mx-auto">
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;