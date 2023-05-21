import { Link } from 'react-router-dom';

import { useTodoListSelector } from 'utils/hooks/useToDoListSelector';

import { NavItem } from './ui/NavItem';

const ToDoListsHeader = () => (
    <div className="mb-2 flex justify-between items-center">
        <span className="text-lg text-white">ToDo Lists</span>
        <Link
            to="all-todo-lists"
            className="text-sm text-purple-400 hover:text-purple-500 transition-colors duration-200 ease-in-out"
        >
            Show All
        </Link>
    </div>
);

export const ToDoListsContainer = () => {
    const { isLoading, todoLists: todosLists } = useTodoListSelector();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <ToDoListsHeader />
            <ul className="flex flex-col overflow-y-auto">
                {todosLists.length > 0 ? (
                    todosLists.map((el) => {
                        return (
                            <NavItem key={`todo-list-${el.code}`} to={el.code} title={el.title} />
                        );
                    })
                ) : (
                    <div className="mt-24 self-center text-gray-100">
                        No <span className="text-purple-400">ToDo List</span> to select 🙅🏻‍♂️
                    </div>
                )}
            </ul>
        </>
    );
};
