import Icon from "./icons/icon";
import Thermometer from "./Thermometer";

const Weather = ({ weatherInfo }) => {
    const { current, location } = weatherInfo;

    const isDay =
        current.is_day === "yes" ? "title-text-day" : "title-text-night";

    const weatherItems = [
        {
            title: "Sensação térmica",
            icon: <Icon name="thermometer" />,
            content: `${current.feelslike}\u00B0`,
            component: <Thermometer type="temp" value={current.feelslike} />,
        },
        {
            title: "Índice UV",
            icon: <Icon name="uv" />,
            content: current.uv_index,
            component: <Thermometer type="uv" value={current.uv_index} />,
        },
        {
            title: "Umidade",
            icon: <Icon name="humidity" />,
            content: `${current.humidity}%`,
        },
        {
            title: "Nebulosidade",
            icon: <Icon name="cloud" />,
            content: `${current.cloudcover}%`,
        },
    ];

    return (
        <>
            <div className="flex flex-col w-full h-[400px] gap-4 rounded-t-lg">
                <div className="flex items-center justify-center gap-4">
                    <img src={current.weather_icons[0]} alt="weather_icon" />

                    <span>{current.weather_descriptions}</span>
                </div>

                <div className="grid grid-cols-2 auto-rows-auto px-2 gap-x-4 gap-y-2">
                    <div className="flex flex-col gap-2 col-span-2 text-center">
                        <p>
                            {location.name}, {location.region},{" "}
                            {location.country}
                        </p>

                        <p className="text-3xl font-bold">
                            {current.temperature}&deg;
                        </p>
                    </div>

                    {weatherItems.map((item) => (
                        <div className="flex flex-col justify-between h-20 px-2 py-1 rounded-lg bg-[rgba(0,0,0,0.2)] shadow">
                            <div className="flex gap-2">
                                {item.icon}
                                <p className={`uppercase text-xs ${isDay}`}>
                                    {item.title}
                                </p>
                            </div>

                            <span className="text-3xl text-center text-neutral-100 drop-shadow">
                                {item.content}
                            </span>
                            {item.component && item.component}
                        </div>
                    ))}

                    <div className="col-span-2 flex flex-col justify-between h-auto px-2 py-1 rounded-lg bg-[rgba(0,0,0,0.2)] shadow">
                        <div className="flex gap-2 h-5 items-center">
                            <Icon name="wind" />
                            <p className={`uppercase text-xs ${isDay}`}>
                                Vento
                            </p>
                        </div>

                        <div>
                            <div className="flex justify-between items-center">
                                <p className={`uppercase text-xs ${isDay}`}>
                                    Velocidade do vento
                                </p>
                                <span className="text-lg text-center text-neutral-100 drop-shadow">
                                    {current.wind_speed}Km/h
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className={`uppercase text-xs ${isDay}`}>
                                    Direção do vento
                                </p>
                                <span className="text-lg text-center text-neutral-100 drop-shadow">
                                    {current.wind_degree}&deg; -{" "}
                                    {current.wind_dir}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Weather;
