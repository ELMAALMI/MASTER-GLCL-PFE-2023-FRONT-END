import React from 'react';
import { Button, Input } from '@material-tailwind/react';
import Icon from '@/components/Icon';

const LoginView: React.FC = () => {
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <div className="mx-auto h-12 w-auto flex justify-center">
                        <Icon name={'carbon:logo-xing'} />
                        LOGGER
                    </div>
                </div>

                <form className="mt-8 space-y-6">
                    <Input variant="outlined" label="email" size="lg" />
                    <Input
                        variant="outlined"
                        label="password"
                        size="lg"
                        type={'password'}
                        icon={<Icon name={'ic:baseline-remove-red-eye'} />}
                    />
                    <div className="flex w-full flex-col">
                        <div className="text-sm self-end">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                forget the password ?
                            </a>
                        </div>
                    </div>
                    <div>
                        <Button fullWidth className="flex justify-center items-center gap-3">
                            <Icon name={'ri:login-box-line'} />
                            Sign In
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default LoginView;
