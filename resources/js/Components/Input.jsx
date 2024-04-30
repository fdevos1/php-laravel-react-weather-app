export default function Input({ ...props }) {
    return (
        <input
            className={`placeholder:text-sm bg-sky-50 rounded-sm focus:ring-sky-500 `}
            {...props}
        />
    );
}
