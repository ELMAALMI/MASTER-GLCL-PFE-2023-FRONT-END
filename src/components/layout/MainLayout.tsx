import React from 'react';
import Header from '../Header';
import Sidebar from '../SideNav';

const MainLayout: React.FC<Props> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header />
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-gray-100">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};
export default MainLayout;

interface Props {
    children?: JSX.Element;
}
