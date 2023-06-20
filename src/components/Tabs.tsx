import React from 'react';
import Icon from './Icon';

const Tabs: React.FC<Props> = ({ tabIdx, tabs, setIdx }) => {
    return (
        <div className="flex relative bg-blue-gray-400 bg-opacity-60 rounded-lg p-2 flex-row gap-4">
            {React.Children.toArray(
                tabs.map((item, idx) => (
                    <div
                        className={`cursor-pointer flex justify-center items-center gap-3 w-full ${
                            tabIdx == idx && 'bg-white'
                        } rounded-sm p-2`}
                        onClick={() => setIdx(idx)}
                    >
                        <Icon name={item.icon} color={tabIdx !== idx ? 'white' : ''} />
                        <label className={`font-bold text-sm ${tabIdx != idx && 'text-white'}`}>
                            {' '}
                            {item.label}{' '}
                        </label>
                    </div>
                ))
            )}
        </div>
    );
};

export default Tabs;
interface Props {
    tabIdx: number;
    tabs: {
        icon: string;
        label: string;
    }[];
    setIdx: (idx: number) => void;
}
