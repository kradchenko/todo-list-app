import { useFormContext } from 'react-hook-form';

interface TextInputProps {
    name: string;
    label: string;
    placeholder: string;
}

export const TextInput = ({ name, label, placeholder }: TextInputProps) => {
    const { register } = useFormContext();

    return (
        <div className="form-control w-full max-w-xs">
            <label htmlFor={name}>
                <span className="label-text">{label}</span>
            </label>
            <input
                {...register(name)}
                name={name}
                placeholder={placeholder}
                type="text"
                className="input input-bordered w-full max-w-xs"
            />
        </div>
    );
};
