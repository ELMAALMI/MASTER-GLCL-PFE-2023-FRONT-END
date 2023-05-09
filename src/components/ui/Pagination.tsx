import { AppIcons } from '@/utils/AppIcons';
import React from 'react';
import Icon from '../Icon';

const Pagination: React.FC = () => {
    return (
        <nav className="flex justify-center">
            <ul className="flex">
                <li>
                    <a
                        className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                        href="#"
                        aria-label="Previous"
                    >
                        <Icon name={AppIcons.arrowLeft} />
                    </a>
                </li>
                <li>
                    <a
                        className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr bg-slate-400  p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out"
                        href="#"
                    >
                        1
                    </a>
                </li>
                <li>
                    <a
                        className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                        href="#"
                    >
                        2
                    </a>
                </li>
                <li>
                    <a
                        className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                        href="#"
                    >
                        3
                    </a>
                </li>
                <li>
                    <a
                        className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                        href="#"
                        aria-label="Next"
                    >
                        <Icon name={AppIcons.arrowRight} />
                    </a>
                </li>
            </ul>
        </nav>
    );
};
export default Pagination;
