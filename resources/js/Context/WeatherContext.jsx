import { createContext, useState } from "react";

export const WeatherContext = createContext(null);

const WeatherProvider = ({ children }) => {
    const [weatherInfo, setWeatherInfo] = useState(undefined);

    return (
        <WeatherContext.Provider value={{ weatherInfo, setWeatherInfo }}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
