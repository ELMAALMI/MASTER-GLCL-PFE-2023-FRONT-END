import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ServerPage from '@/components/server';
import { AppIcons } from '@/utils/AppIcons';
import Tabs from '@/components/Tabs';
import OperatingSystemPage from '@/components/operatingSystem/operatingSystemPage';

const ServerView: React.FC = () => {
    const [idxTab, setIdxTab] = useState(0);
    return (
        <MainLayout>
            <div>
                <div className="mb-10">
                    <Tabs
                        setIdx={setIdxTab}
                        tabs={[
                            { icon: AppIcons.server, label: 'SERVER' },
                            { icon: AppIcons.os, label: 'OS' }
                        ]}
                        tabIdx={idxTab}
                    />
                </div>
                {idxTab == 0 && (
                    <div className="fadeOut 5s ease-in-out">
                        <ServerPage />
                    </div>
                )}
                {idxTab == 1 && (
                    <div className="fadeOut 5s ease-in-out">
                        <OperatingSystemPage />
                    </div>
                )}
            </div>
        </MainLayout>
    );
};
export default ServerView;
