import Icon from "../icons/icon";

export default function WeatherWindBox({
    wind_speed,
    wind_degree,
    wind_dir,
    isModal,
}) {
    return (
        <div className="col-span-2 flex flex-col justify-between h-auto px-2 py-1 rounded-lg bg-[rgba(0,0,0,0.2)] shadow w-full">
            <div className="flex gap-2 h-5 items-center">
                <Icon name="wind" />
                <p className="uppercase text-xs">Vento</p>
            </div>

            <div>
                <div className="flex justify-between items-center">
                    <p className="uppercase text-xs">Velocidade do vento</p>
                    <span
                        className={`${
                            isModal ? "text-sm text-nowrap" : "text-3xl"
                        }text-lg text-center text-neutral-100 drop-shadow`}
                    >
                        {wind_speed}Km/h
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="uppercase text-xs">Direção do vento</p>
                    <span
                        className={`${
                            isModal ? "text-sm  " : "text-3xl"
                        }text-lg text-center text-neutral-100 drop-shadow`}
                    >
                        {wind_degree}&deg; - {wind_dir}
                    </span>
                </div>
            </div>
        </div>
    );
}
