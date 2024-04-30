export default function WeatherBox({
    icon,
    title,
    content,
    component,
    isModal,
}) {
    return (
        <div className="flex flex-col w-full justify-between h-20 px-2 py-1 rounded-lg bg-[rgba(0,0,0,0.2)] shadow max-w-[200px]">
            <div className="flex gap-2">
                {icon}
                <p className="uppercase text-xs truncate" aria-label={title}>
                    {title}
                </p>
            </div>

            <span
                className={`${
                    isModal ? "text-xl  " : "text-3xl"
                } text-center text-neutral-100 drop-shadow`}
            >
                {content}
            </span>
            {component && component}
        </div>
    );
}
