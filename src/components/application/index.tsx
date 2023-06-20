import React, { useEffect, useState } from 'react';
import { AppIcons } from '@/utils/AppIcons';
import { IconButton, Input } from '@material-tailwind/react';
import Icon from '../Icon';
import PageHead from '../PageHead';
import SideModal from '../SideModal';
import Table from '../Table';
import ApplicationForm from './ApplicationForm';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hook';
import Swal from 'sweetalert2';
import applicationActionThunk from '@/store/app/application/application-action-thunk';
import Application from '@/types/Application;';

const ApplicationPage: React.FC = () => {
    const [openForm, setOpenForm] = useState(false);
    const { applications } = useAppSelector((state) => state.application);
    const [application, setApplication] = useState<Application | null>(null);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(applicationActionThunk.fetch());
    }, []);
    const handleDelete = async (id: number) => {
        Swal.fire({
            title: 'Do you whant to delete this Application ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await dispatch(applicationActionThunk.delete(id));
                Swal.fire('Deleted!', 'Your Application has been deleted.', 'success');
            }
        });
    };
    const handleUpdate = (app: Application) => {
        setApplication(app);
        setOpenForm(!openForm);
    };
    const handleClose = () => {
        setApplication(null);
        setOpenForm(false);
    };
    return (
        <div className="flex w-full flex-col">
            <PageHead
                title="Services List"
                buttonTitle="New Service"
                clickButtonEvt={() => {
                    setOpenForm(true);
                }}
                iconTitle={AppIcons.service}
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
                                Version
                            </th>

                            <th scope="col" className="py-2 px-1">
                                Access Log Path
                            </th>
                            <th scope="col" className="py-2 px-1">
                                Error Log Path
                            </th>
                            <th scope="col" className="py-2 px-1">
                                Status
                            </th>
                            <th scope="col" className="py-2 px-1">
                                Actions
                            </th>
                        </tr>
                    }
                    content={applications.map((item, idx) => (
                        <tr className="bg-white border-b hover:bg-gray-300 text-gray-800">
                            <td scope="row" className="py-1 px-1 font-medium">
                                {item.id}
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                {item.name}
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                {item.version}
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                {item.log_access_path}
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                {item.log_error_path}
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                running
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium flex gap-2 text-sm">
                                <IconButton
                                    onClick={() => handleUpdate(item)}
                                    size="sm"
                                    variant="outlined"
                                    color="blue"
                                >
                                    <Icon name={AppIcons.edit} size={20} />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDelete(item.id ?? 0)}
                                    size="sm"
                                    variant="outlined"
                                    color="red"
                                >
                                    <Icon name={AppIcons.delete} size={20} />
                                </IconButton>
                                <IconButton size="sm" variant="outlined" color="green">
                                    <Icon name={AppIcons.reload} size={20} />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                />
            </div>
            <SideModal open={openForm} title="New Application" handleClose={() => handleClose()}>
                <ApplicationForm app={application} />
            </SideModal>
        </div>
    );
};
export default ApplicationPage;
