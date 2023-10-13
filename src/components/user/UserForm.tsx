import User from '@/types/User';
import { AppIcons } from '@/utils/AppIcons';
import {
    Button,
    IconButton,
    Input,
    Option,
    Popover,
    Select,
    Spinner,
    Switch,
    Tooltip
} from '@material-tailwind/react';
import { Form, FormikProvider, useFormik } from 'formik';
import React from 'react';
import ErrorField from '../ErrorField';
import Icon from '../Icon';
import * as Yup from 'yup';
import { useAppDispatch } from '@/hooks/redux-hook';
import userActionThunk from '@/store/app/user/user-action-thunk';
import { Role } from '@/types/Role';

const UserForm: React.FC<Props> = ({ user, closePopUp }) => {
    const dispatch = useAppDispatch();
    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        username: Yup.string().required(),
        role: Yup.string().required()
    });
    const formik = useFormik<User>({
        initialValues: {
            email: user?.email ?? '',
            role: user?.role ?? Role.VIEWER,
            active: user?.active ?? false,
            username: user?.username ?? ''
        },
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            if (user) {
                values.id = user.id;
                const res = await dispatch(userActionThunk.update(values));
                closePopUp();
            } else {
                const res = await dispatch(userActionThunk.create(values));
                if (res) {
                    resetForm();
                }
            }
        },
        validationSchema
    });
    const { values, isSubmitting, getFieldProps, errors, touched, setFieldValue } = formik;
    const generatePassword = () => {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const passwordLength = 12;
        let password = '';
        for (let i = 0; i <= passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        setFieldValue('password', password);
    };
    return (
        <div>
            <FormikProvider value={formik}>
                <Form className="flex flex-col gap-4 p-8">
                    <div>
                        <Input
                            error={Boolean(errors.email && touched.email)}
                            {...getFieldProps('email')}
                            label="Email"
                        />
                        <ErrorField message={errors.email} />
                    </div>
                    <div>
                        <Input
                            error={Boolean(errors.username && touched.username)}
                            // success={!Boolean(errors.host && touched.host)}
                            {...getFieldProps('username')}
                            label="Username"
                        />
                        <ErrorField message={errors.username} />
                    </div>

                    <div>
                        <Select
                            error={Boolean(errors.role && touched.role)}
                            // success={!Boolean(errors.password && touched.password)}
                            {...getFieldProps('role')}
                            label="Role"
                        >
                            <Option value={Role.ADMIN}> {Role.ADMIN} </Option>
                            <Option value={Role.EDITOR}> {Role.EDITOR} </Option>
                            <Option value={Role.VIEWER}> {Role.VIEWER} </Option>
                        </Select>

                        <ErrorField message={errors.role} />
                    </div>
                    <Switch
                        onChange={() => setFieldValue('active', !values.active)}
                        id="user-status"
                        label="Active"
                        ripple={values.active}
                    />
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
                                <span> {user ? 'Update' : 'Create'} </span>
                            </>
                        )}
                    </Button>
                </Form>
            </FormikProvider>
        </div>
    );
};
export default UserForm;

interface Props {
    user?: User | null;
    closePopUp: () => void;
}
