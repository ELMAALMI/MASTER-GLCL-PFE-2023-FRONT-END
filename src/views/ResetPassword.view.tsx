import React, { useEffect, useState } from 'react';
import { Button, Input } from '@material-tailwind/react';
import Icon from '@/components/Icon';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hook';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { Creds } from '@/types/Creds';
import ErrorField from '@/components/ErrorField';
import { AppIcons } from '@/utils/AppIcons';
import authActionThunk from '@/store/app/auth/auth-action-thunk';

const ResetPasswordView: React.FC = () => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    const [passwordField, setPasswordField] = useState(true);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated]);
    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required()
    });

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: async (data, { setFieldError }) => {
            const res = await dispatch(authActionThunk.login(data));
            if (res) {
                navigate('/');
            } else {
            }
        },
        validationSchema
    });

    const { errors, touched, values, getFieldProps, isSubmitting } = formik;
    const handlePasswordIconClick = () => {
        setPasswordField(!passwordField);
    };

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <div className="mx-auto h-12 w-auto flex justify-center">
                        <Icon name={'carbon:logo-xing'} />
                        LOGGER
                    </div>
                </div>
                <FormikProvider value={formik}>
                    <Form className="mt-8 space-y-6">
                        <Input
                            {...getFieldProps('email')}
                            error={Boolean(errors.email && touched.email)}
                            variant="outlined"
                            label="email"
                            size="lg"
                        />
                        <ErrorField message={errors.email} />

                        <div className="flex w-full flex-col">
                            <div className="text-sm self-end">
                                <a
                                    href="#"
                                    onClick={() => navigate('/login')}
                                    className="font-medium text-blue-600 hover:text-blue-500"
                                >
                                    back to Login page
                                </a>
                            </div>
                        </div>
                        {/* <ErrorField message={"email or password don't macth"} /> */}

                        <div>
                            <Button
                                type="submit"
                                fullWidth
                                className="flex justify-center items-center gap-3"
                            >
                                <Icon
                                    name={
                                        isSubmitting ? 'line-md:loading-loop' : 'fluent-mdl2:reset'
                                    }
                                />
                                Reset
                            </Button>
                        </div>
                    </Form>
                </FormikProvider>
            </div>
        </div>
    );
};
export default ResetPasswordView;
