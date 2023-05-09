import React from 'react';
import { Input, Select, Option, Button } from '@material-tailwind/react';
import Icon from '../Icon';
import { AppIcons } from '@/utils/AppIcons';

const ServiceForm: React.FC = () => {
    return (
        <div className="w-full flex flex-col justify-center">
            <form className="flex flex-col gap-6 p-8">
                <Input label="Name" />
                <Input label="Version" />
                <Input label="Log Path" />
                <Input label="Log Pattern" />

                <Button size="sm" className="flex justify-center items-center gap-2 bg-slate-300">
                    <Icon name={AppIcons.add} />
                    <span>Create</span>
                </Button>
            </form>
        </div>
    );
};
export default ServiceForm;
