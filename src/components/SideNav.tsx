import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { SIDE_BAR_URLS } from '@/constants/SideBarConstant';
import SideNavBarLink from './SideNavBarLink';

const Sidebar: React.FC<Props> = ({ setSidebarOpen, sidebarOpen }) => {
    return (
        <>
            <div
                className={`fixed inset-0 bg-slate bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
                    sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden="true"
            ></div>
            <aside
                className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0
                bg-slate p-4 transition-all duration-200 ease-in-out ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-64'
                }`}
                aria-label="Sidebar"
            >
                <div className="flex items-center justify-between">
                    {/* //logo */}
                    <NavLink end to="/" className="block text-sm font-medium text-white">
                        <Icon icon={'carbon:logo-xing'} fontSize={20} />
                        Project MNG.
                    </NavLink>
                    {/* //close button */}
                    <button
                        className="lg:hidden text-slate-500 hover:text-slate-400"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                    >
                        <Icon icon={'ep:close'} fontSize={25} color="white" />
                    </button>
                    {/* //end close button */}
                </div>
                {/* end logo */}
                <div className="space-y-8">
                    <ul className="space-y-2 mt-[50px] text-white">
                        {React.Children.toArray(
                            SIDE_BAR_URLS.map(({ icon, name, path }) => (
                                <SideNavBarLink icon={icon} name={name} path={path} />
                            ))
                        )}
                    </ul>
                </div>
            </aside>
        </>
    );
};
export default Sidebar;

interface Props {
    sidebarOpen: boolean;
    setSidebarOpen: any;
}
