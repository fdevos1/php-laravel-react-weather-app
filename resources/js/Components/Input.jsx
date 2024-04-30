export default function Input({ isModal, ...props }) {
    return (
        <input
            className={`  rounded-sm focus:ring-sky-500 ${
                isModal ? "max-w-40 placeholder:text-xs" : ""
            } `}
            {...props}
        />
    );
}
