import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router';

import { useTodoListSelector } from 'utils/hooks/useToDoListSelector';

import { ToDoListTitleContainer } from './ToDoListTitleContainer';

export const ToDoList = () => {
    const { todoLists, isLoading } = useTodoListSelector();

    const { id: todoCode } = useParams<{ id: string }>();

    const todoList = useMemo(() => {
        const res = todoLists.find((el) => el.code === todoCode);
        return res;
    }, [todoCode, todoLists]);

    if (isLoading) {
        return <div className="p-10">Loading...</div>;
    }

    if (!isLoading && todoLists.length === 0) {
        return <Navigate to={'/'} />;
    }

    return (
        <div className="p-10">
            {todoList ? (
                <ToDoListTitleContainer
                    key={`todolist-title-input-${todoList.code}`}
                    title={todoList.title}
                    toDoListId={todoList.id}
                />
            ) : (
                <div>Problem occured while fetching ToDo List</div>
            )}
        </div>
    );
};
