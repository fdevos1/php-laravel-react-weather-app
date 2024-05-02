import Icon from "../icons/icon";

export default function WeatherWindBox({
    wind_speed,
    wind_degree,
    wind_dir,
    isModal,
    isDay,
}) {
    return (
        <div
            className={`col-span-2 flex flex-col justify-between h-auto px-2 py-1 rounded-lg ${
                isDay === "yes" ? "bg-blue-400" : "bg-blue-800"
            } shadow w-full md:max-w-[450px] md:gap-2`}
        >
            <div className="flex gap-2 h-5 items-center">
                <Icon name="wind" />
                <p className="uppercase text-xs lg:text-base text-white">
                    Vento
                </p>
            </div>

            <div className="flex flex-col md:gap-2">
                <div className="flex justify-between items-center">
                    <p className="uppercase text-xs lg:text-sm text-white">
                        Velocidade do vento
                    </p>
                    <span
                        className={`${
                            isModal
                                ? "text-sm lg:text-xl text-nowrap "
                                : "text-3xl"
                        }text-lg text-center text-neutral-100 drop-shadow`}
                    >
                        {wind_speed}Km/h
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="uppercase text-xs lg:text-sm text-white">
                        Direção do vento
                    </p>
                    <span
                        className={`${
                            isModal ? "text-sm lg:text-xl " : "text-3xl"
                        }text-lg text-center text-neutral-100 drop-shadow`}
                    >
                        {wind_degree}&deg; - {wind_dir}
                    </span>
                </div>
            </div>
        </div>
    );
}
