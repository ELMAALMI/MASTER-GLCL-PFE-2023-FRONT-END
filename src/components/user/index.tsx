import { AppIcons } from '@/utils/AppIcons';
import { Input } from '@material-tailwind/react';
import React, { useState } from 'react';
import PageHead from '../PageHead';
import Table from '../Table';
import Pagination from '../ui/Pagination';

const UserPage: React.FC = () => {
    const [openForm, setOpenForm] = useState(false);

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
                    // content={servers.map((item, idx) => (
                    //     <tr className="bg-white border-b hover:bg-gray-300 text-gray-800">
                    //         <td scope="row" className="py-1 px-1 font-medium">
                    //             {item.id}
                    //         </td>
                    //         <td scope="row" className="py-1 px-1 font-medium">
                    //             {item.name}
                    //         </td>
                    //         <td scope="row" className="py-1 px-1 font-medium">
                    //             {item.host}
                    //         </td>
                    //         <td scope="row" className="py-1 px-1 font-medium">
                    //             {item.username}
                    //         </td>
                    //         <td scope="row" className="py-1 px-1 font-medium">
                    //             {item.password}
                    //         </td>
                    //         <td scope="row" className="py-1 px-1 font-medium">
                    //             {item.os?.name}
                    //         </td>
                    //         <td scope="row" className="py-1 px-1 font-medium">
                    //             {item.status}
                    //         </td>
                    //         <td scope="row" className="py-1 px-1 font-medium">
                    //             {item.applications?.map((item) => (
                    //                 <span key={item.host}> {item.name} </span>
                    //             ))}
                    //         </td>
                    //         <td scope="row" className="py-1 px-1 font-medium flex gap-2 text-sm">
                    //             <Tooltip content="update" placement="bottom">
                    //                 <IconButton
                    //                     onClick={() => handleUpdate(item)}
                    //                     size="sm"
                    //                     variant="outlined"
                    //                     color="blue"
                    //                 >
                    //                     <Icon name={AppIcons.edit} size={20} />
                    //                 </IconButton>
                    //             </Tooltip>
                    //             <Tooltip content="delete" placement="bottom">
                    //                 <IconButton size="sm" variant="outlined" color="red">
                    //                     <Icon name={AppIcons.delete} size={20} />
                    //                 </IconButton>
                    //             </Tooltip>
                    //             <Tooltip content="reload" placement="bottom">
                    //                 <IconButton size="sm" variant="outlined" color="green">
                    //                     <Icon name={AppIcons.reload} size={20} />
                    //                 </IconButton>
                    //             </Tooltip>
                    //         </td>
                    //     </tr>
                    // ))}
                    content={[]}
                />
                <div className="mt-3">
                    <Pagination totalePage={0} onPageChange={() => {}} />
                </div>
            </div>
        </div>
    );
};
export default UserPage;
