import { useContext } from "react";
import { useFormik } from "formik";

import InputMask from "./InputMask";

import handleCityQuery from "@/Helpers/cityQuery";
import { formValidation } from "@/Helpers/schemaValidation";
import { addToHistory } from "@/Helpers/localStorageHistory";
import { WeatherContext } from "@/Context/WeatherContext";

export default function Form({ type }) {
    const {
        setWeatherInfo,
        setComparisionWeatherInfo,
        setSelectedWeatherInfo,
        setLoading,
    } = useContext(WeatherContext);

    const formikProps = useFormik({
        initialValues: {
            cep: "",
            cidade: "",
        },
        onSubmit: async (data) => {
            const { cidade, cep } = data;

            setLoading(true);

            try {
                const cityQuery = await handleCityQuery({ cidade });

                const { location, current } = cityQuery;
                addToHistory(cep, cidade, location, current);

                if (type === "comparision-query") {
                    setComparisionWeatherInfo({ location, current });
                }

                if (type === "query-small") {
                    setSelectedWeatherInfo({ location, current });
                }

                setWeatherInfo({ location, current, cep, cidade });
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

            console.log(value);

            const fetchCity = await fetch(
                `http://viacep.com.br/ws/${value}/json/`
            );

            const response = await fetchCity.json();

            const data = response;
            formikProps.setFieldValue("cidade", data.localidade);
        } catch (err) {
            console.error("CEP Inválido", err.message);
        }
    };

    return (
        <>
            <div className="flex  justify-between items-center p-4">
                <form onSubmit={formikProps.handleSubmit}>
                    <div className="h-48 w-full flex flex-col justify-between">
                        <div
                            className={` flex flex-col
                            w-full
                           
                            gap-2 ${
                                type === "comparision-query" ||
                                type === "query-small"
                                    ? "items-start"
                                    : "items-center"
                            }`}
                        >
                            <InputMask
                                className={`${
                                    type === "comparision-query" ||
                                    type === "query-small"
                                        ? "max-w-44"
                                        : ""
                                }`}
                                placeholder="Insira o CEP desejado"
                                name="cep"
                                value={formikProps.values.cep}
                                onChange={formikProps.handleChange}
                                onBlur={handleBlurOnCEP}
                            />
                            <p className="self-center">Ou</p>
                            <input
                                className={`${
                                    type === "comparision-query" ||
                                    type === "query-small"
                                        ? "max-w-44"
                                        : ""
                                }`}
                                placeholder="A cidade desejada"
                                name="cidade"
                                value={formikProps.values.cidade}
                                onChange={formikProps.handleChange}
                            />
                        </div>
                        <button className="border border-sky-500 rounded px-4 ">
                            Consultar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
