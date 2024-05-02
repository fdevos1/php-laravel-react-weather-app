import Icon from "../icons/icon";
import WeatherBox from "./WeatherBox";
import WeatherWindBox from "./WeatherWindBox";
import Thermometer from "./Thermometer";
import WeatherMainInfos from "./WeatherMainInfos";

export default function Weather({ weatherInfo, isModal }) {
    const { current, location } = weatherInfo;

    console.log(weatherInfo);

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
            <div className="flex flex-col w-fit h-auto gap-4 md:px-10 md:py-4 lg:max-w-[500px]">
                <div className="grid grid-cols-2 auto-rows-auto px-2 gap-x-4 gap-y-2 place-items-center">
                    <WeatherMainInfos
                        country={location.country}
                        name={location.name}
                        region={location.region}
                        temp={current.temperature}
                        desc={current.weather_descriptions}
                        icon={current.weather_icons}
                        isModal={isModal}
                        isDay={current.is_day}
                    />

                    {weatherBox.map(
                        ({ title, icon, content, component }, i) => (
                            <WeatherBox
                                key={i}
                                title={title}
                                icon={icon}
                                content={content}
                                component={component}
                                isModal={isModal}
                                isDay={current.is_day}
                            />
                        )
                    )}

                    <WeatherWindBox
                        wind_degree={current.wind_degree}
                        wind_dir={current.wind_dir}
                        wind_speed={current.wind_speed}
                        isModal={isModal}
                        isDay={current.is_day}
                    />
                </div>
            </div>
        </>
    );
}
