import { useContext } from 'react';

import { ToDoListSelectorContext } from 'context/ToDoListSelectorContext';

export const useTodoListSelector = () => useContext(ToDoListSelectorContext);
