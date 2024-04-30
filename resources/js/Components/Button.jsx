export default function Button({ text, action, color, ...props }) {
    const COLOR_BLUE = "bg-blue-600 hover:ring-blue-400";
    const COLOR_SKY = "bg-sky-600 hover:ring-sky-400";
    const COLOR_CYAN = "bg-cyan-600 hover:ring-cyan-400";

    return (
        <button
            className={`
            bg-${color}-600 text-white capitalize rounded px-2 hover:ring-${color}-400 hover:ring-1
            disabled:bg-neutral-200 disabled:hover:ring-neutral-300
            `}
            onClick={action}
            {...props}
        >
            {text}
        </button>
    );
}
