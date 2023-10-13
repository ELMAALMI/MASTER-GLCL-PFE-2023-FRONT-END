import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hook';
import alertActionThunk from '@/store/app/alert/alert-action-thunk';
import { Alert } from '@/types/Alert';
import { ComfireDelete } from '@/utils/alerts';
import { AppIcons } from '@/utils/AppIcons';
import { Card, IconButton, Input, Tooltip } from '@material-tailwind/react';
import Icon from '../Icon';
import PageHead from '../PageHead';
import Table from '../Table';
import Pagination from '../ui/Pagination';
import AlertForm from './AlertForm';

const AlertPage: React.FC = () => {
    const [openForm, setOpenForm] = useState(false);
    const { alerts } = useAppSelector((state) => state.alert);
    const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
    const dispatch = useAppDispatch();
    const handleClose = () => {
        setOpenForm(!openForm);
        setSelectedAlert(null);
    };
    const handleUpdate = (item: Alert) => {
        setSelectedAlert(item);
        setOpenForm(!openForm);
    };
    const handleDelete = (item: Alert) => {
        ComfireDelete('Do you whant to delete this User ?').then(async (res) => {
            if (res.isConfirmed) {
                await dispatch(alertActionThunk.delete(item.id ?? 0));
            }
        });
    };
    useEffect(() => {
        dispatch(alertActionThunk.fetch());
    }, []);
    return (
        <div className="flex w-full flex-col">
            <PageHead
                title="Alerts List"
                buttonTitle="New Alert"
                clickButtonEvt={() => {
                    setOpenForm(true);
                }}
                iconTitle={AppIcons.server}
            />
            <div className="flex gap-1 justify-between">
                <div className="flex w-[50%] mt-5 flex-col">
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
                                    Type
                                </th>
                                <th scope="col" className="py-2 px-1">
                                    Server
                                </th>
                                <th scope="col" className="py-2 px-1">
                                    Actions
                                </th>
                            </tr>
                        }
                        content={alerts.map((item, idx) => (
                            <tr className="bg-white border-b hover:bg-gray-300 text-gray-800">
                                <td scope="row" className="py-1 px-1 font-medium">
                                    {item.id}
                                </td>
                                <td scope="row" className="py-1 px-1 font-medium">
                                    {item.name}
                                </td>
                                <td scope="row" className="py-1 px-1 font-medium">
                                    {item.type}
                                </td>
                                <td scope="row" className="py-1 px-1 font-medium">
                                    {item.server?.name}
                                </td>

                                <td
                                    scope="row"
                                    className="py-1 px-1 font-medium flex gap-2 text-sm"
                                >
                                    <Tooltip content="update" placement="bottom">
                                        <IconButton
                                            onClick={() => handleUpdate(item)}
                                            size="sm"
                                            variant="outlined"
                                            color="blue"
                                        >
                                            <Icon name={AppIcons.edit} size={20} />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip content="delete" placement="bottom">
                                        <IconButton
                                            onClick={() => handleDelete(item)}
                                            size="sm"
                                            variant="outlined"
                                            color="red"
                                        >
                                            <Icon name={AppIcons.delete} size={20} />
                                        </IconButton>
                                    </Tooltip>
                                </td>
                            </tr>
                        ))}
                    />
                    <div className="mt-3">
                        <Pagination totalePage={0} onPageChange={() => {}} />
                    </div>
                </div>
                <Card className="w-[45%] h-full flex flex-col p-2 mt-5">
                    <span className="w-full text-center font-bold mb-5 text-blue-gray-900">
                        {selectedAlert ? 'New Alert' : 'Update Alert'}
                    </span>
                    <AlertForm alert={selectedAlert} handleClose={handleClose} />
                </Card>
            </div>
        </div>
    );
};
export default AlertPage;
