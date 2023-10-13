import { useAppDispatch, useAppSelector } from '@/hooks/redux-hook';
import userActionThunk from '@/store/app/user/user-action-thunk';
import User from '@/types/User';
import { ComfireDelete } from '@/utils/alerts';
import { AppIcons } from '@/utils/AppIcons';
import { IconButton, Input, Tooltip } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Icon from '../Icon';
import PageHead from '../PageHead';
import SideModal from '../SideModal';
import Table from '../Table';
import Pagination from '../ui/Pagination';
import UserForm from './UserForm';

const UserPage: React.FC = () => {
    const [openForm, setOpenForm] = useState(false);
    const { users } = useAppSelector((state) => state.user);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const dispatch = useAppDispatch();
    const handleClose = () => {
        setOpenForm(!openForm);
        setSelectedUser(null);
    };
    const handleUpdate = (item: User) => {
        setSelectedUser(item);
        setOpenForm(!openForm);
    };
    const handleDelete = (item: User) => {
        ComfireDelete('Do you whant to delete this User ?').then(async (res) => {
            if (res.isConfirmed) {
                await dispatch(userActionThunk.delete(item.id ?? 0));
            }
        });
    };
    useEffect(() => {
        dispatch(userActionThunk.fetch());
    }, []);
    return (
        <div className="flex w-full flex-col">
            <PageHead
                title="Users List"
                buttonTitle="New User"
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
                                Email
                            </th>
                            <th scope="col" className="py-2 px-1">
                                Username
                            </th>
                            <th scope="col" className="py-2 px-1">
                                Role
                            </th>
                            <th scope="col" className="py-2 px-1">
                                Status
                            </th>
                            <th scope="col" className="py-2 px-1">
                                Actions
                            </th>
                        </tr>
                    }
                    content={users.map((item, idx) => (
                        <tr className="bg-white border-b hover:bg-gray-300 text-gray-800">
                            <td scope="row" className="py-1 px-1 font-medium">
                                {item.id}
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                {item.email}
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                {item.username}
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                {item.role}
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium">
                                {item.active ? 'Active' : '-'}
                            </td>
                            <td scope="row" className="py-1 px-1 font-medium flex gap-2 text-sm">
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
                                <Tooltip content="Reset password" placement="bottom">
                                    <IconButton size="sm" variant="outlined" color="green">
                                        <Icon name={AppIcons.reload} size={20} />
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
            <SideModal
                open={openForm}
                title={selectedUser ? 'New User' : 'Update User'}
                handleClose={handleClose}
            >
                <UserForm closePopUp={handleClose} user={selectedUser} />
            </SideModal>
        </div>
    );
};
export default UserPage;
