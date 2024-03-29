import { AppIcons } from '@/utils/AppIcons';

export const SIDE_BAR_URLS = [
    {
        name: 'Home',
        icon: AppIcons.home,
        path: '/'
    },
    {
        name: 'Servers',
        icon: AppIcons.server,
        path: '/servers'
    },
    {
        name: 'Applications',
        icon: AppIcons.service,
        path: '/applications'
    },
    // {
    //     name: 'Settings',
    //     icon: AppIcons.settings,
    //     path: '/settings'
    // },
    {
        name: 'Alerts',
        icon: AppIcons.warning,
        path: '/alerts'
    },
    {
        name: 'Manage Team',
        icon: AppIcons.admin,
        path: '/manage-team'
    }
];
