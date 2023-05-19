import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { ReactComponent as PlusIcon } from '../assets/plus.svg';
import { useTodoListSelector } from '../utils/hooks/useToDoListSelector';

export const Navigation = () => {
    const { todosLists } = useTodoListSelector();

    return (
        <nav className="flex flex-col flex-1 overflow-hidden">
            <button className="flex justify-center items-center h-11 mb-8 rounded border border-white text-white bg-white bg-opacity-30 hover:bg-opacity-20">
                <PlusIcon width={12} height={12} className="mr-2" />
                Create ToDo List
            </button>
            <div className="flex flex-col flex-1 overflow-hidden">
                <div className="mb-2 flex justify-between items-center">
                    <span className="text-lg text-white">ToDo Lists</span>
                    <Link
                        to="all-todo-lists"
                        className="text-sm text-purple-500 hover:text-purple-700"
                    >
                        Show All
                    </Link>
                </div>
                <ul className="flex flex-col overflow-y-auto">
                    {todosLists.length > 0 ? (
                        todosLists.map((el) => {
                            return (
                                <NavItem
                                    key={`todo-list-${el.code}`}
                                    to={el.code}
                                    title={el.title}
                                />
                            );
                        })
                    ) : (
                        <div className="mt-24 self-center text-gray-100">
                            No <span className="text-purple-700">ToDo List</span> to select 🙅🏻‍♂️
                        </div>
                    )}
                </ul>
            </div>
        </nav>
    );
};

interface NavItemProps {
    to: string;
    title: string;
}

export const NavItem = ({ to, title }: NavItemProps) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(
                    isActive ? '!text-purple-700 bg-white bg-opacity-70' : null,
                    'flex justify-center items-center flex-shrink-0 h-11 mb-2 rounded border border-white text-white',
                )
            }
        >
            {title}
        </NavLink>
    );
};
