import React from 'react';
import { Icon as AppIcon } from '@iconify/react';

interface Props {
    name: string;
    size?: number;
    color?: string;
}

const Icon: React.FC<Props> = ({ name, color, size = 25 }) => {
    return <AppIcon icon={name} color={color} fontSize={size} />;
};
export default Icon;
