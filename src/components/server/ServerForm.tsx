import React, { useEffect, useState } from 'react';
import { Input, Select, Option, Button } from '@material-tailwind/react';
import Icon from '../Icon';
import { AppIcons } from '@/utils/AppIcons';
import { Form, FormikProvider, useFormik } from 'formik';
import Server from '@/types/Server';
import * as Yup from 'yup';
import serverActionThunk from '@/store/app/server/server-action-thunk';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hook';
import OperatingSystemForm from '../operatingSystem/operatingSystemForm';
import operatingSystemActionThunk from '@/store/app/operatingSystem/OperatingSystemActionThunk';
import OperatingSystemDialog from '../operatingSystem/OperatingSystemDialog';

const ServerForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const [openOperatingSystemDialog, setOpenOperatingSystemDialog] = useState(false);
    const { operatingSystems } = useAppSelector((state) => state.operatingSystem);

    useEffect(() => {
        dispatch(operatingSystemActionThunk.fetch());
    }, []);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('name is required'),
        os: Yup.object().required('os is required'),
        host: Yup.string().required('host is required'),
        username: Yup.string().required('username is required'),
        password: Yup.string().required('password is required')
    });
    const formik = useFormik<Server>({
        initialValues: {
            name: '',
            os: {},
            password: '',
            username: '',
            host: '',
            services: []
        },
        onSubmit: async (data) => {
            await dispatch(serverActionThunk.create(data));
        },
        validationSchema: validationSchema
    });
    const { getFieldProps, values, errors, touched, isSubmitting, setFieldValue } = formik;
    return (
        <div className="w-full flex flex-col justify-center">
            <FormikProvider value={formik}>
                <Form className="flex flex-col gap-6 p-8">
                    <Input
                        error={Boolean(errors.name && touched.name)}
                        // success={!Boolean(errors.name && touched.name)}
                        {...getFieldProps('name')}
                        label="Name"
                    />
                    <Input
                        error={Boolean(errors.host && touched.host)}
                        // success={!Boolean(errors.host && touched.host)}
                        {...getFieldProps('host')}
                        label="Host"
                    />
                    <Input
                        error={Boolean(errors.username && touched.username)}
                        // success={!Boolean(errors.username && touched.username)}
                        {...getFieldProps('username')}
                        label="Username"
                    />
                    <Input
                        error={Boolean(errors.password && touched.password)}
                        // success={!Boolean(errors.password && touched.password)}
                        {...getFieldProps('password')}
                        label="Password"
                        type="password"
                    />
                    <Button
                        size="sm"
                        className="flex w-52 justify-center items-center gap-2 bg-green-700"
                    >
                        <Icon name={AppIcons.connection} />
                        <span>Test Connection</span>
                    </Button>
                    <div className="flex justify-between gap-3">
                        <Select
                            value={values.id}
                            error={Boolean(errors.os && touched.os)}
                            color="blue"
                            label="OS"
                            onChange={(e) => {
                                setFieldValue('os', { id: Number.parseInt(e ?? '0') });
                                console.log(e);
                            }}
                        >
                            {operatingSystems.map((item) => (
                                <Option key={item.id} value={item.id + '' ?? ''}>
                                    {item.name}
                                </Option>
                            ))}
                        </Select>
                        <Button
                            onClick={() => setOpenOperatingSystemDialog(!openOperatingSystemDialog)}
                            size="sm"
                            className="flex rounded-full justify-center items-center gap-2 bg-slate-300"
                        >
                            <Icon name={AppIcons.plus} />
                        </Button>
                    </div>
                    <Select color="blue" label="Services">
                        <Option>Apache2</Option>
                        <Option>Tomecat</Option>
                        <Option>Ngnix</Option>
                        <Option>Mysql</Option>
                        <Option>Mongodb</Option>
                    </Select>
                    <Button
                        size="sm"
                        type="submit"
                        disabled={isSubmitting}
                        className="flex justify-center items-center gap-2 bg-slate-300"
                    >
                        <Icon name={AppIcons.add} />
                        <span>Create</span>
                    </Button>
                </Form>
            </FormikProvider>
            <OperatingSystemDialog
                open={openOperatingSystemDialog}
                handleOpen={() => setOpenOperatingSystemDialog(!openOperatingSystemDialog)}
            />
        </div>
    );
};
export default ServerForm;
