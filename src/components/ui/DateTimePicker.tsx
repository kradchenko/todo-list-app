import { useFormContext } from 'react-hook-form';

interface DateTimePickerProps {
    name: string;
    label: string;
}

export const DateTimePicker = ({ name, label }: DateTimePickerProps) => {
    const { register } = useFormContext();

    return (
        <div className="form-control w-full max-w-xs">
            <label htmlFor={name}>
                <span className="label-text">{label}</span>
            </label>
            <input
                {...register(name)}
                name={name}
                type="datetime-local"
                className="input input-bordered w-full max-w-xs"
            />
        </div>
    );
};
