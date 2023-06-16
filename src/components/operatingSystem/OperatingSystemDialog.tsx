import React from 'react';
import { Dialog, DialogBody, DialogHeader } from '@material-tailwind/react';
import Icon from '../Icon';
import { AppIcons } from '@/utils/AppIcons';
import OperatingSystemForm from './operatingSystemForm';

const OperatingSystemDialog: React.FC<Props> = ({ handleOpen, open }) => {
    return (
        <Dialog open={open} handler={handleOpen}>
            <div className="flex items-center justify-between px-3">
                <DialogHeader>New Operating System</DialogHeader>
                <span className="cursor-pointer">
                    <Icon name={AppIcons.close} />
                </span>
            </div>
            <DialogBody divider>
                <OperatingSystemForm handleOpen={handleOpen} />
            </DialogBody>
        </Dialog>
    );
};
export default OperatingSystemDialog;

interface Props {
    open: boolean;
    handleOpen: () => void;
}
