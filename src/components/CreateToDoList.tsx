import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { DateTimePicker } from './ui/DateTimePicker';
import { TextArea } from './ui/TextArea';
import { TextInput } from './ui/TextInput';

const ToDoObject = z.object({
    title: z.string().min(3).max(30),
    description: z.string().max(280).optional(),
    deadline: z.date().optional(),
});

type ToDoForm = z.infer<typeof ToDoObject>;

export const CreateToDoForm = () => {
    const methods = useForm<ToDoForm>({ resolver: zodResolver(ToDoObject) });

    return (
        <FormProvider {...methods}>
            <form>
                <TextInput name="title" label="Title" placeholder="Enter ToDo title" />
                <TextArea
                    name="description"
                    label="Description"
                    placeholder="Enter description of ToDo if you want"
                />
                <DateTimePicker name="deadline" label="Deadline" />
            </form>
        </FormProvider>
    );
};
