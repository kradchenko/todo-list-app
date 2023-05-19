import { ReactNode } from 'react';

import { Navigation } from './Navigation';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="h-screen w-full flex relative">
            <div className="w-72 bg-gradient-to-b from-indigo-300 to-purple-400 flex flex-col py-10 px-5">
                <div className="text-2xl sm:text-3xl text-center text-white flex-shrink-0">
                    ToDo List App
                </div>
                <span className="bg-white h-[1px] flex-shrink-0 my-5"></span>
                <Navigation />
            </div>
            <div className="flex-1 flex flex-col">
                <div className="flex-1">{children}</div>
                <footer className="flex flex-col w-full text-sm mt-5">
                    <span className="bg-gray-400 h-[1px] mx-10"></span>
                    <span className="self-center py-2 text-gray-400">
                        Made with ❤️ by Kirill Radchenko
                    </span>
                </footer>
            </div>
        </div>
    );
};
