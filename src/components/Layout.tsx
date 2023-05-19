import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen w-full">
            <nav className="">Nav</nav>
            {children}
        </div>
    );
};
