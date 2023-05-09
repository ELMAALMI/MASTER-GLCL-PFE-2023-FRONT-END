import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

const SideNavBarLink: React.FC<Props> = ({ icon, name, path }) => {
    const location = useLocation();
    const { pathname } = location;
    const [activeLink, setActiveLink] = React.useState(false);
    React.useEffect(() => {
        setActiveLink(pathname === path || (pathname.includes(path) && path !== '/'));
    }, [location]);

    return (
        <li
            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                activeLink ? 'bg-slate-300' : 'hover:bg-slate-100 transition duration-100'
            }`}
        >
            <NavLink end to={path}>
                <div
                    className={`flex items-center justify-between ${
                        activeLink ? 'text-white' : 'text-gray-300 hover:text-white'
                    }`}
                >
                    <div className="flex items-center justify-between">
                        <Icon fontSize={20} icon={icon} className="flex items-center" />
                        <div className="flex items-center">
                            <span
                                className={`text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200`}
                            >
                                {name}
                            </span>
                        </div>
                    </div>
                    {/* Icon */}
                    <div className="flex shrink-0 ml-2">
                        <Icon icon={'akar-icons:arrow-up-right'} />
                    </div>
                </div>
            </NavLink>
        </li>
    );
};
export default SideNavBarLink;
interface Props {
    name: string;
    icon: string;
    path: string;
}
