import React from 'react';
import { AppIcons } from '@/utils/AppIcons';
import Icon from './Icon';

const SideModal: React.FC<Props> = ({ children, handleClose, open, title }) => {
    return open ? (
        <div className="fixed z-50 inset-0 overflow-y-auto transition duration-100">
            <div className="fixed inset-0 bg-gray-500  bg-opacity-20 transition-opacity"></div>
            <div className="inline-block bg-white w-full max-w-xl transform absolute right-0 shadow-sm">
                <div className="flex justify-between p-3 bg-slate-300 text-white">
                    <span className="font-bold uppercase"> {title} </span>
                    <button onClick={() => handleClose()}>
                        <Icon name={AppIcons.close} />
                    </button>
                </div>
                <div className="w-full h-screen">{children}</div>
            </div>
        </div>
    ) : (
        <></>
    );
};
export default SideModal;
interface Props {
    handleClose: () => void;
    open: boolean;
    title: string;
    children: JSX.Element;
}
