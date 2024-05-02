export default function WeatherBox({
    icon,
    title,
    content,
    component,
    isModal,
    isDay,
}) {
    return (
        <div
            className={`flex flex-col w-full justify-between h-20 px-2 py-1 rounded-lg ${
                isDay === "yes" ? "bg-blue-400" : "bg-blue-800"
            } shadow max-w-[200px]`}
        >
            <div className="flex gap-2">
                {icon}
                <p
                    className="uppercase text-xs lg:text-sm truncate text-white"
                    aria-label={title}
                >
                    {title}
                </p>
            </div>

            <span
                className={`${
                    isModal ? "text-xl  lg:text-3xl" : "text-3xl"
                } text-center text-neutral-100 drop-shadow`}
            >
                {content}
            </span>
            {component && component}
        </div>
    );
}
