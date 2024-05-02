export default function WeatherMainInfos({
    name,
    region,
    country,
    temp,
    icon,
    desc,
    isModal,
    isDay,
}) {
    return (
        <div
            className={`flex flex-col gap-2 col-span-2 text-center ${
                isDay === "yes" ? "bg-blue-400" : "bg-blue-800"
            } w-full rounded p-2`}
        >
            <div className="flex items-center justify-center gap-4">
                <img src={icon} alt="weather_icon" />

                <span className="lg:text-2xl text-white">{desc}</span>
            </div>

            <p className={`${isModal ? "text-xs" : ""} lg:text-xl text-white`}>
                {name}, {region}, {country}
            </p>

            <p className="text-3xl font-bold text-white">{temp}&deg;</p>
        </div>
    );
}
