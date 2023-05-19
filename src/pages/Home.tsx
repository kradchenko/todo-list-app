import { Route, Routes } from 'react-router';

import { Layout } from '../components/Layout';
import { NoToDoList } from '../components/NoToDoList';
import { TodoList } from '../components/TodoList';

export const Home = () => {
    return (
        <Layout>
            <Routes>
                <Route index element={<NoToDoList />} />
                <Route path=":id" element={<TodoList />} />
            </Routes>
        </Layout>
    );
};
