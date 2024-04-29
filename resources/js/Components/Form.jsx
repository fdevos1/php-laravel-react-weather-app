import { useContext } from "react";
import { useFormik } from "formik";

import InputMask from "./InputMask";

import handleCityQuery from "@/Helpers/cityQuery";
import { formValidation } from "@/Helpers/schemaValidation";
import { addToHistory } from "@/Helpers/localStorageHistory";
import { WeatherContext } from "@/Context/WeatherContext";

export default function Form({ setLoading }) {
    const { setWeatherInfo } = useContext(WeatherContext);

    let query = "";
    let response = {};

    const formikProps = useFormik({
        initialValues: {
            cep: "",
            city: "",
        },
        onSubmit: async (data) => {
            const { city } = data;

            setLoading(true);

            try {
                const cityQuery = await handleCityQuery({ city });
                query = data;
                response = cityQuery;

                addToHistory(query, response);

                const { location, current } = cityQuery;

                setWeatherInfo({ location, current });
                setTimeout(() => setLoading(false), 500);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        },
        validationSchema: formValidation,
    });

    const handleBlurOnCEP = async (e) => {
        let { value } = e.target;
        value = value.replace(/\D/g, "");

        try {
            await formValidation.validateAt("cep", { cep: value });

            const fetchCity = await fetch(
                `http://viacep.com.br/ws/${value}/json/`
            );

            const response = await fetchCity.json();

            const data = response;
            formikProps.setFieldValue("city", data.localidade);
        } catch (err) {
            console.error("CEP Inválido", err.message);
        }
    };

    return (
        <>
            <div className="flex flex-col rounded justify-between items-center p-4">
                <form onSubmit={formikProps.handleSubmit}>
                    <div className="h-48 flex flex-col items-center justify-between">
                        <div className="flex flex-col gap-2 items-center">
                            <InputMask
                                placeholder="Insira o CEP desejado"
                                name="cep"
                                value={formikProps.values.cep}
                                onChange={formikProps.handleChange}
                                onBlur={handleBlurOnCEP}
                            />
                            <p>Ou</p>
                            <input
                                placeholder="A cidade desejada"
                                name="city"
                                value={formikProps.values.city}
                                onChange={formikProps.handleChange}
                            />
                        </div>
                        <button
                            className="border border-sky-500 rounded px-4 "
                            type="submit"
                        >
                            Consultar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
