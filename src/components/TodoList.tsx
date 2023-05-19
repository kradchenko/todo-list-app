import { useParams } from 'react-router';

export const TodoList = () => {
    const { id: todoId } = useParams<{ id: string }>();

    console.log(todoId);

    return <div></div>;
};
