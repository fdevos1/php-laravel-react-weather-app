import { createContext, useState } from "react";

export const WeatherContext = createContext(null);

const WeatherProvider = ({ children }) => {
    const [weatherInfo, setWeatherInfo] = useState(undefined);
    const [selectedWeatherInfo, setSelectedWeatherInfo] = useState(undefined);
    const [comparisionWeatherInfo, setComparisionWeatherInfo] =
        useState(undefined);
    const [loading, setLoading] = useState(false);

    return (
        <WeatherContext.Provider
            value={{
                weatherInfo,
                setWeatherInfo,
                comparisionWeatherInfo,
                setComparisionWeatherInfo,
                loading,
                setLoading,
                selectedWeatherInfo,
                setSelectedWeatherInfo,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
