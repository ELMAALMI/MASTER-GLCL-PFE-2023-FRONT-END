import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hook';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { Alert, AlertType } from '@/types/Alert';
import { Button, Input, Option, Select, Spinner } from '@material-tailwind/react';
import ErrorField from '../ErrorField';
import Icon from '../Icon';
import { AppIcons } from '@/utils/AppIcons';
import serverActionThunk from '@/store/app/server/server-action-thunk';
import alertActionThunk from '@/store/app/alert/alert-action-thunk';

const AlertForm: React.FC<Props> = ({ alert, handleClose }) => {
    const dispatch = useAppDispatch();
    const { servers } = useAppSelector((state) => state.server);
    const validationSchema = Yup.object().shape({
        name: Yup.string().required(),
        type: Yup.string().required(),
        serverId: Yup.string().required()
    });
    const formik = useFormik<Alert & { serverId: string }>({
        initialValues: {
            name: alert?.name ?? '',
            type: alert?.type ?? AlertType.INFO,
            serverId: alert?.server?.id ?? ''
        },
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            if (alert) {
                values.id = alert.id;
                values.server = {
                    id: values.serverId
                };
                const res = await dispatch(alertActionThunk.update(values));
                resetForm();
                handleClose();
            } else {
                values.server = {
                    id: values.serverId
                };
                const res = await dispatch(alertActionThunk.create(values));
                if (res) {
                    resetForm();
                }
            }
        },
        validationSchema
    });
    const { values, isSubmitting, getFieldProps, errors, touched, setFieldValue } = formik;
    useEffect(() => {
        dispatch(serverActionThunk.fetch());
    }, []);
    return (
        <div>
            {JSON.stringify(alert)}
            <FormikProvider value={formik}>
                <Form className="flex flex-col gap-4 p-8">
                    <div>
                        <Input
                            error={Boolean(errors.name && touched.name)}
                            {...getFieldProps('name')}
                            label="Name"
                        />
                        <ErrorField message={errors.name} />
                    </div>

                    <div>
                        <Select
                            error={Boolean(errors.type && touched.type)}
                            // success={!Boolean(errors.password && touched.password)}
                            {...getFieldProps('type')}
                            label="Type"
                        >
                            <Option value={AlertType.INFO}> {AlertType.INFO} </Option>
                            <Option value={AlertType.INFO}> {AlertType.ERROR} </Option>
                        </Select>
                        <ErrorField message={errors.type} />
                    </div>

                    <div>
                        <Select
                            error={Boolean(errors.serverId && touched.serverId)}
                            // success={!Boolean(errors.password && touched.password)}
                            {...getFieldProps('serverId')}
                            onChange={(e) => {
                                setFieldValue('serverId', e);
                            }}
                            label="Server"
                        >
                            {React.Children.toArray(
                                servers.map((item) => (
                                    <Option value={item.id}> {item.name} </Option>
                                ))
                            )}
                        </Select>
                        <ErrorField message={errors.type} />
                    </div>

                    <Button
                        size="sm"
                        type="submit"
                        disabled={isSubmitting}
                        className="flex justify-center items-center gap-2 bg-slate-300"
                    >
                        {isSubmitting ? (
                            <Spinner className="h-5 w-5" />
                        ) : (
                            <>
                                <Icon name={AppIcons.add} />
                                <span> {alert ? 'Update' : 'Create'} </span>
                            </>
                        )}
                    </Button>
                </Form>
            </FormikProvider>
        </div>
    );
};
export default AlertForm;
interface Props {
    alert?: Alert | null;
    handleClose: () => void;
}
