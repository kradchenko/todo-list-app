import { useTodoListSelector } from 'context/useToDoListSelector';

import { CreateToDoListButton } from '../ui/CreateToDoListButton';

import { ToDoListsContainer } from './ToDoListsContainer';

export const ToDoListsNavigation = () => {
    const { handleToDoListCreate } = useTodoListSelector();

    return (
        <nav className="flex flex-col flex-1 overflow-hidden">
            <div className="flex flex-col flex-1 overflow-hidden">
                <CreateToDoListButton onClick={handleToDoListCreate} />
                <ToDoListsContainer />
            </div>
        </nav>
    );
};
