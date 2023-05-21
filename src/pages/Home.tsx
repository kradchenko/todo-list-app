import { Route, Routes } from 'react-router';

import { Layout } from 'components/Layout';
import { NoToDoList } from 'components/NoToDoList';
import { ToDoList } from 'components/ToDoList';
import { ToDoListSelectorProvider } from 'context/ToDoListSelectorContext';

export const Home = () => {
    return (
        <ToDoListSelectorProvider>
            <Layout>
                <Routes>
                    <Route index element={<NoToDoList />} />
                    <Route path=":id" element={<ToDoList />} />
                </Routes>
            </Layout>
        </ToDoListSelectorProvider>
    );
};
