import { createContext } from 'react';

interface TodoListSelectorContextProps {
    todosLists: {
        code: string;
        title: string;
    }[];
}

export const TodoListSelectorContext = createContext<TodoListSelectorContextProps>({
    todosLists: [],
});
