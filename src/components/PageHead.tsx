import React from 'react';
import { Button } from '@material-tailwind/react';
import Icon from './Icon';
import { AppIcons } from '@/utils/AppIcons';

const PageHead: React.FC<Props> = ({ buttonTitle, clickButtonEvt, title, iconTitle = '' }) => {
    return (
        <div className="flex justify-between w-full">
            <span className="flex justify-between items-center gap-2">
                <Icon name={iconTitle} />
                <span className="text-lg">{title}</span>
            </span>
            <Button
                onClick={() => clickButtonEvt()}
                className="flex bg-slate-300 justify-center items-center gap-2"
                variant="filled"
                size="sm"
            >
                <Icon name={AppIcons.add} />
                <span className="text-sm"> {buttonTitle} </span>
            </Button>
        </div>
    );
};
export default PageHead;

interface Props {
    title: string;
    buttonTitle: string;
    iconTitle?: string;
    clickButtonEvt: () => void;
}
