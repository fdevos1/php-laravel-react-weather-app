import axios from "axios";

export const handleCityQuery = async ({ cidade }) => {
    const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${
            import.meta.env.VITE_SECRETKEY
        }&query=${cidade}`
    );

    return response.data;
};
