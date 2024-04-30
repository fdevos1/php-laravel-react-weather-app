export default function Button({ text, action, ...props }) {
    return (
        <button
            className="
    bg-sky-600 text-white
    capitalize rounded
    p-1

    hover:ring-sky-400
    hover:ring-1
    "
            onClick={action}
        >
            {text}
        </button>
    );
}
