import { AppIcons } from '@/utils/AppIcons';
import { IconButton, Navbar } from '@material-tailwind/react';
import React from 'react';
import Icon from './Icon';
import ProfileMenu from './ProfileMenu';

const Header: React.FC = () => {
    return (
        <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-1 px-4 lg:px-8 lg:py-2">
            <div className="flex items-center justify-between text-blue-gray-900">
                <div className="flex">
                    <IconButton
                        variant="text"
                        className="text-slate-500 hover:text-slate-600 lg:hidden"
                        onClick={(e) => {
                            // e.stopPropagation();
                            // setSidebarOpen(!sidebarOpen);
                        }}
                    >
                        <Icon name={AppIcons.menu} />
                    </IconButton>
                </div>
                <ProfileMenu />
            </div>
        </Navbar>
    );
};
export default Header;
