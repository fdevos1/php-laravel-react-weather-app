import { useContext } from "react";
import { useFormik } from "formik";

import { handleCityQuery } from "@/Helpers/cityQuery";
import { formValidation } from "@/Helpers/schemaValidation";
import { addToHistory } from "@/Helpers/localStorageHistory";
import { WeatherContext } from "@/Context/WeatherContext";

import Input from "./Input";
import InputMask from "./InputMask";
import Button from "./Button";
import FormError from "./FormError";

export default function Form({ isModal, component }) {
    console.log(isModal);

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
                const date = new Date();
                addToHistory(cep, cidade, location, current, date);

                if (component === "comparision-query") {
                    setComparisionWeatherInfo({ location, current });
                }

                if (component === "query-small") {
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

    const inputLists = [
        {
            component: (
                <InputMask
                    placeholder="Insira o CEP desejado"
                    name="cep"
                    value={formikProps.values.cep}
                    onChange={formikProps.handleChange}
                    onBlur={handleBlurOnCEP}
                    isModal={isModal}
                />
            ),
            error: formikProps.errors.cep,
        },
        {
            component: (
                <Input
                    placeholder="Ou cidade desejada"
                    name="cidade"
                    value={formikProps.values.cidade}
                    onChange={formikProps.handleChange}
                    isModal={isModal}
                />
            ),
            error: formikProps.errors.cidade,
        },
    ];

    return (
        <>
            <div className="flex  justify-between items-center p-4">
                <form onSubmit={formikProps.handleSubmit}>
                    <div className="h-48 w-full flex flex-col justify-between">
                        <div
                            className={` flex flex-col
                            w-full
                            gap-2 ${isModal ? "items-start" : "items-center"}`}
                        >
                            {inputLists.map(({ component, error }, i) => (
                                <div
                                    className="flex flex-col min-h-16 justify-between"
                                    key={i}
                                >
                                    {component}
                                    {error && <FormError error={error} />}
                                </div>
                            ))}
                        </div>
                        <Button text="buscar" color="blue" />
                    </div>
                </form>
            </div>
        </>
    );
}
