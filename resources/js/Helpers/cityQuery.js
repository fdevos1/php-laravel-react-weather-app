import axios from "axios";

const handleCityQuery = async ({ city }) => {
    const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${
            import.meta.env.VITE_SECRETKEY
        }&query=${city}`
    );

    return response.data;
};

export default handleCityQuery;
