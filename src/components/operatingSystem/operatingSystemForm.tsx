import React from 'react';
import { useAppDispatch } from '@/hooks/redux-hook';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { OperatingSystem } from '@/types/OperatingSystem';
import { Button, Input } from '@material-tailwind/react';
import Icon from '../Icon';
import { AppIcons } from '@/utils/AppIcons';
import operatingSystemActionThunk from '@/store/app/operatingSystem/OperatingSystemActionThunk';

interface Props {
    handleOpen: () => void;
}
const OperatingSystemForm: React.FC<Props> = ({ handleOpen }) => {
    const dispatch = useAppDispatch();
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('name is required'),
        version: Yup.string().required('version is required')
    });
    const formik = useFormik<OperatingSystem>({
        initialValues: {
            name: '',
            version: ''
        },
        onSubmit: async (data, { resetForm }) => {
            console.log(data);
            await dispatch(operatingSystemActionThunk.create(data));
            resetForm();
            handleOpen();
        },
        validationSchema: validationSchema
    });
    const { getFieldProps, errors, touched, isSubmitting } = formik;
    return (
        <FormikProvider value={formik}>
            <Form className="flex flex-col gap-6 ">
                <Input
                    error={Boolean(errors.name && touched.name)}
                    // success={!Boolean(errors.name && touched.name)}
                    {...getFieldProps('name')}
                    label="Name"
                />
                <Input
                    error={Boolean(errors.version && touched.version)}
                    // success={!Boolean(errors.name && touched.name)}
                    {...getFieldProps('version')}
                    label="Version"
                />

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
    );
};
export default OperatingSystemForm;
