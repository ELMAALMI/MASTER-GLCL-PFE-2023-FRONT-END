import { useAppDispatch, useAppSelector } from '@/hooks/redux-hook';
import operatingSystemActionThunk from '@/store/app/operatingSystem/OperatingSystemActionThunk';
import { AppIcons } from '@/utils/AppIcons';
import { Card, IconButton } from '@material-tailwind/react';
import React, { useEffect } from 'react';
import Icon from '../Icon';
import Table from '../Table';
import OperatingSystemForm from './operatingSystemForm';

const OperatingSystemPage: React.FC = () => {
    const { operatingSystems } = useAppSelector((state) => state.operatingSystem);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(operatingSystemActionThunk.fetch());
    }, []);
    return (
        <div className="flex justify-between gap-10">
            <div className="w-[50%]">
                <Table
                    head={
                        <tr className="px-4">
                            <th scope="col" className="py-2 px-1">
                                ID
                            </th>
                            <th scope="col" className="py-2 px-1">
                                Name
                            </th>
                            <th scope="col" className="py-2 px-1">
                                Version
                            </th>
                            <th scope="col" className="py-2 px-1">
                                Action
                            </th>
                        </tr>
                    }
                    content={operatingSystems.map((item) => (
                        <tr
                            key={item.id}
                            className="bg-white border-b hover:bg-gray-300 text-gray-800"
                        >
                            <td scope="row" className="py-1 px-1 font-medium">
                                {item.id}
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                {item.name}
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                {item.version}
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium flex gap-2 text-sm">
                                <IconButton size="sm" variant="outlined" color="blue">
                                    <Icon name={AppIcons.edit} size={20} />
                                </IconButton>
                                <IconButton size="sm" variant="outlined" color="red">
                                    <Icon name={AppIcons.delete} size={20} />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                />
            </div>
            <Card className="w-[50%] h-full flex flex-col p-2">
                <span className="w-full text-center font-bold mb-5 text-blue-gray-900">
                    New Operating System
                </span>
                <OperatingSystemForm handleOpen={() => {}} />
            </Card>
        </div>
    );
};
export default OperatingSystemPage;
