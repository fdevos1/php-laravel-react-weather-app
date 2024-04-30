export default function Button({ text, action, color, ...props }) {
    return (
        <button
            className={`
            bg-${color}-600 text-white capitalize rounded px-1 hover:ring-${color}-400hover:ring-1
            `}
            onClick={action}
            {...props}
        >
            {text}
        </button>
    );
}
