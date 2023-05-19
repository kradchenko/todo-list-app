import { useContext } from 'react';

import { TodoListSelectorContext } from '../../context/TodoListSelectorContext';

export const useTodoListSelector = () => useContext(TodoListSelectorContext);
