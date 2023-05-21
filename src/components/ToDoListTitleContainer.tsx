import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReactComponent as RemoveIcon } from 'assets/bin.svg';
import { ReactComponent as EditIcon } from 'assets/edit.svg';
import { z } from 'zod';

import { useTodoListSelector } from 'utils/hooks/useToDoListSelector';

import { ConfirmationDialog } from './ui/ConfirmationDialog';

interface ToDoListTitleContainerProps {
    toDoListId: number;
    title: string;
}

const TitleInputSchema = z.object({
    title: z.string().min(3).max(30),
});

export type TitleInputForm = z.infer<typeof TitleInputSchema>;

export const ToDoListTitleContainer = ({ toDoListId, title }: ToDoListTitleContainerProps) => {
    const { handleRenameToDoList, handleTodoListRemove } = useTodoListSelector();

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isDelModalOpen, setIsDelModalOpen] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { isValid },
    } = useForm<TitleInputForm>({
        defaultValues: {
            title: title,
        },
        resolver: zodResolver(TitleInputSchema),
    });

    if (!isEditing) {
        return (
            <div className="flex items-center h-12">
                <span className="text-3xl w-full max-w-lg">{title}</span>
                <EditIcon
                    width={28}
                    height={28}
                    onClick={() => setIsEditing(true)}
                    className="hover:text-purple-400 cursor-pointer"
                />
                <RemoveIcon
                    width={28}
                    height={28}
                    className="hover:text-red-500 cursor-pointer ml-5"
                    onClick={() => setIsDelModalOpen(true)}
                />
                <ConfirmationDialog
                    title={`Do you really want to delete ${title}?`}
                    description=" Are you sure you want to delete this ToDo List? All of your data from this ToDo List
                    will be permanently removed. This action cannot be undone."
                    isOpen={isDelModalOpen}
                    onClose={() => setIsDelModalOpen(false)}
                    onSuccess={() => handleTodoListRemove(toDoListId)}
                />
            </div>
        );
    }

    const handleCancel = () => {
        reset({ title: title });
        setIsEditing(false);
    };

    const onSubmit = async (data: TitleInputForm) => {
        try {
            await handleRenameToDoList(toDoListId, data);

            setIsEditing(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex">
            <input
                className="text-3xl border-b hover:border-purple-400 focus:border-purple-500 outline-none bg-transparent w-full max-w-lg text-gray-400 focus:text-white"
                {...register('title')}
            />
            <button type="button" className="btn btn-error ml-10" onClick={handleCancel}>
                Cancel
            </button>
            <button type="submit" className="btn btn-success ml-5" disabled={!isValid}>
                Submit
            </button>
        </form>
    );
};
