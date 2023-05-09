import { AppIcons } from '@/utils/AppIcons';
import { IconButton, Input } from '@material-tailwind/react';
import React, { useState } from 'react';
import Icon from '../Icon';
import PageHead from '../PageHead';
import SideModal from '../SideModal';
import Table from '../Table';
import Pagination from '../ui/Pagination';
import ServerForm from './ServerForm';

const ServerPage: React.FC = () => {
    const [openForm, setOpenForm] = useState(false);
    return (
        <div className="flex w-full flex-col">
            <PageHead
                title="Servers List"
                buttonTitle="New Server"
                clickButtonEvt={() => {
                    setOpenForm(true);
                }}
                iconTitle={AppIcons.server}
            />
            <div className="flex w-full mt-5 flex-col">
                <div className="w-[300px] mb-5">
                    <Input label="Search" className="mb-5" />
                </div>
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
                                @IP
                            </th>
                            <th scope="col" className="py-2 px-1">
                                Password
                            </th>
                            <th scope="col" className="py-2 px-1">
                                OS
                            </th>
                            <th scope="col" className="py-2 px-1">
                                Status
                            </th>
                            <th scope="col" className="py-2 px-1">
                                Services
                            </th>
                            <th scope="col" className="py-2 px-1">
                                Actions
                            </th>
                        </tr>
                    }
                    content={[...Array(10)].map((item, idx) => (
                        <tr className="bg-white border-b hover:bg-gray-300 text-gray-800">
                            <td scope="row" className="py-1 px-1 font-medium">
                                {idx}
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                apache2 server
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                192.168.1.155
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                test@apppp
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                Ubuntu 20.04
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                Running
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                Apache2 / Ngnix / Tomcate
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium flex gap-2 text-sm">
                                <IconButton size="sm" variant="outlined" color="blue">
                                    <Icon name={AppIcons.edit} size={20} />
                                </IconButton>
                                <IconButton size="sm" variant="outlined" color="red">
                                    <Icon name={AppIcons.delete} size={20} />
                                </IconButton>
                                <IconButton size="sm" variant="outlined" color="green">
                                    <Icon name={AppIcons.reload} size={20} />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                />
                <div className="mt-3">
                    <Pagination />
                </div>
            </div>
            <SideModal open={openForm} title="new server" handleClose={() => setOpenForm(false)}>
                <ServerForm />
            </SideModal>
        </div>
    );
};
export default ServerPage;
