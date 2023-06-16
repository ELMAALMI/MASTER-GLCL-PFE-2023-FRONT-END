import React from 'react';
import { Input, Button } from '@material-tailwind/react';
import * as Yup from 'yup';
import Icon from '../Icon';
import { AppIcons } from '@/utils/AppIcons';
import { Form, FormikProvider, useFormik } from 'formik';
import { useAppDispatch } from '@/hooks/redux-hook';
import serverActionThunk from '@/store/app/server/server-action-thunk';
import Application from '@/types/Application;';
import applicationActionThunk from '@/store/app/application/application-action-thunk';

const ApplicationForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('name is required'),
        version: Yup.string().required('name is required'),
        log_access_path: Yup.string().required('name is required'),
        log_error_path: Yup.string().required('name is required'),
        regex: Yup.string().required('name is required'),
        idx_ip: Yup.number().max(8).min(0).required('name is required'),
        idx_agent: Yup.number().max(8).min(0).required('name is required'),
        idx_date: Yup.number().max(8).min(0).required('name is required'),
        idx_method: Yup.number().max(8).min(0).required('name is required'),
        idx_path: Yup.number().max(8).min(0).required('name is required'),
        idx_ref_url: Yup.number().max(8).min(0).required('name is required'),
        idx_req_size: Yup.number().max(8).min(0).required('name is required'),
        idx_status: Yup.number().max(8).min(0).required('name is required')
    });
    const formik = useFormik<Application>({
        initialValues: {
            name: '',
            version: '',
            log_access_path: '',
            log_error_path: '',
            regex: '',
            idx_ip: -1,
            idx_agent: -1,
            idx_date: -1,
            idx_method: -1,
            idx_path: -1,
            idx_ref_url: -1,
            idx_req_size: -1,
            idx_status: -1
        },
        validationSchema,
        onSubmit: (data) => {
            console.log(data);
            dispatch(applicationActionThunk.create(data));
        }
    });
    const { errors, getFieldProps, touched } = formik;
    return (
        <div className="w-full flex flex-col justify-center">
            <FormikProvider value={formik}>
                <Form className="flex flex-col gap-6 p-8">
                    <Input
                        {...getFieldProps('name')}
                        error={Boolean(errors.name && touched.name)}
                        label="Name"
                    />
                    <Input
                        {...getFieldProps('version')}
                        error={Boolean(errors.version && touched.version)}
                        label="Version"
                    />
                    <Input
                        {...getFieldProps('log_access_path')}
                        error={Boolean(errors.log_access_path && touched.log_access_path)}
                        label="Access Log Path"
                    />
                    <Input
                        {...getFieldProps('log_error_path')}
                        error={Boolean(errors.log_error_path && touched.log_error_path)}
                        label="Error Log Path"
                    />
                    <Input
                        {...getFieldProps('regex')}
                        error={Boolean(errors.regex && touched.regex)}
                        label="Access Log Pattern"
                    />
                    <div className="flex gap-3">
                        <Input
                            {...getFieldProps('idx_ip')}
                            error={Boolean(errors.idx_ip && touched.idx_ip)}
                            type={'number'}
                            max={8}
                            min={1}
                            label="Idx Ip"
                        />
                        <Input
                            {...getFieldProps('idx_path')}
                            error={Boolean(errors.idx_path && touched.idx_path)}
                            type={'number'}
                            max={8}
                            min={1}
                            label="Idx Path"
                        />
                    </div>
                    <div className="flex gap-3">
                        <Input
                            {...getFieldProps('idx_method')}
                            error={Boolean(errors.idx_method && touched.idx_method)}
                            type={'number'}
                            max={8}
                            min={1}
                            label="Idx Method"
                        />
                        <Input
                            {...getFieldProps('idx_req_size')}
                            error={Boolean(errors.idx_req_size && touched.idx_req_size)}
                            type={'number'}
                            max={8}
                            min={1}
                            label="Idx Req Size"
                        />
                    </div>
                    <div className="flex gap-3">
                        <Input
                            {...getFieldProps('idx_date')}
                            error={Boolean(errors.idx_date && touched.idx_date)}
                            type={'number'}
                            max={8}
                            min={1}
                            label="Idx Date"
                        />
                        <Input
                            {...getFieldProps('idx_status')}
                            error={Boolean(errors.idx_status && touched.idx_status)}
                            type={'number'}
                            max={8}
                            min={1}
                            label="Idx Status"
                        />
                    </div>
                    <div className="flex gap-3">
                        <Input
                            {...getFieldProps('idx_agent')}
                            error={Boolean(errors.idx_agent && touched.idx_agent)}
                            type={'number'}
                            max={8}
                            min={1}
                            label="Idx Web Agent"
                        />
                        <Input
                            {...getFieldProps('idx_ref_url')}
                            error={Boolean(errors.idx_ref_url && touched.idx_ref_url)}
                            type={'number'}
                            max={8}
                            min={1}
                            label="Idx Referrer URL"
                        />
                    </div>

                    <Button
                        type="submit"
                        size="sm"
                        className="flex justify-center items-center gap-2 bg-slate-300"
                    >
                        <Icon name={AppIcons.add} />
                        <span>Create</span>
                    </Button>
                </Form>
            </FormikProvider>
        </div>
    );
};
export default ApplicationForm;
