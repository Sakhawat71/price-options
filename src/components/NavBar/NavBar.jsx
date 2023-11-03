import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill , RiCloseFill} from 'react-icons/ri';

const NavBar = () => {
    const [open,setOpen] = useState(false);

    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/contact', name: 'Contact', id: 3 },
        { path: '/products', name: 'Product', id: 4 },
        { path: '/profile', name: 'UserProfile', id: 5 },
    ];

    return (
        <nav className="flex bg-gray-200 py-4 ">
            <div onClick={()=> setOpen(!open)}>
                {
                    open === true ? <RiCloseFill className="text-3xl md:hidden"></RiCloseFill> : <RiMenu2Fill className="text-3xl md:hidden"></RiMenu2Fill>
                }
            </div>
            
            <ul className={`md:flex md:mx-auto md:p-2 duration-1000
            ${open ? 'top-14' : '-top-52'}
            bg-gray-200 p-4 ml-4 absolute  md:static`}>
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