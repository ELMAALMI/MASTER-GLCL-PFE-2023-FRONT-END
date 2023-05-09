import React from 'react';
import {
    MenuHandler,
    Menu,
    Button,
    Avatar,
    MenuList,
    MenuItem,
    Typography
} from '@material-tailwind/react';
import Icon from './Icon';
import { AppIcons } from '@/utils/AppIcons';

const profileMenuItems = [
    {
        label: 'Profile',
        icon: AppIcons.profile
    },
    {
        label: 'Settings',
        icon: AppIcons.setting
    },
    {
        label: 'Sign Out',
        icon: AppIcons.logout
    }
];
const ProfileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="candice wu"
                        className="border border-blue-500 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <Icon name={AppIcons.arrowDown} />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${
                                isLastItem
                                    ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                                    : ''
                            }`}
                        >
                            <Icon name={icon} />
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? 'red' : 'inherit'}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
};

export default ProfileMenu;
