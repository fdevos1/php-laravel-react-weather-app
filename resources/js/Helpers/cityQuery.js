import axios from "axios";

const handleCityQuery = async ({ cidade }) => {
    const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${
            import.meta.env.VITE_SECRETKEY
        }&query=${cidade}`
    );

    return response.data;
};

export default handleCityQuery;
