import { useFormContext } from 'react-hook-form';

interface TextAreProps {
    name: string;
    label: string;
    placeholder: string;
}

export const TextArea = ({ name, label, placeholder }: TextAreProps) => {
    const { register } = useFormContext();

    return (
        <div className="flex flex-col">
            <label htmlFor={name}>{label}</label>
            <textarea {...register(name)} name={name} placeholder={placeholder} />;
        </div>
    );
};
