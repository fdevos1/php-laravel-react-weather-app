import Icon from "../icons/icon";
import WeatherBox from "./WeatherBox";
import WeatherWindBox from "./WeatherWindBox";
import Thermometer from "./Thermometer";
import WeatherMainInfos from "./WeatherMainInfos";

export default function Weather({ weatherInfo, isModal }) {
    const { current, location } = weatherInfo;

    const weatherBox = [
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
            <div className="flex flex-col w-full h-auto min-h-80 gap-4 rounded-t-lg">
                <div className="flex items-center justify-center gap-4">
                    <img src={current.weather_icons[0]} alt="weather_icon" />

                    <span>{current.weather_descriptions}</span>
                </div>

                <div className="grid grid-cols-2 auto-rows-auto px-2 gap-x-4 gap-y-2 place-items-center">
                    <WeatherMainInfos
                        country={location.country}
                        name={location.name}
                        region={location.region}
                        temp={current.temperature}
                    />

                    {weatherBox.map(
                        ({ title, icon, content, component }, i) => (
                            <WeatherBox
                                key={i}
                                title={title}
                                icon={icon}
                                content={content}
                                component={component}
                                isModal
                            />
                        )
                    )}

                    <WeatherWindBox
                        wind_degree={current.wind_degree}
                        wind_dir={current.wind_dir}
                        wind_speed={current.wind_speed}
                        isModal
                    />
                </div>
            </div>
        </>
    );
}
