import { useContext } from "react";
import { useForm } from "@inertiajs/react";

import { WeatherContext } from "@/Context/WeatherContext";

export default function QueryForm({ cep, cidade, location, current }) {
    const {
        weatherInfo,
        setWeatherInfo,
        setSelectedWeatherInfo,
        setComparisionWeatherInfo,
        loading,
        setLoading,
    } = useContext(WeatherContext);

    const { data, setData, post, errors, reset } = useForm({
        cep,
        cidade,
        location: {},
        current: {},
    });

    const onSubmit = (e) => {
        setLoading(true);
        e.preventDefault();

        post(route("store"));
    };

    return (
        <>
            <form>
                <div className="flex w-full h-full items-center justify-center">
                    {!loading ? (
                        <>
                            <div className="h-10 w-10 border border-sky-500 rounded-full animate-spin"></div>
                        </>
                    ) : (
                        <>
                            {/* Se já foi relizada a consulta
                                        
                            retorna Weather component e opções para salvar
                            */}
                            {weatherInfo !== undefined ? (
                                <div className="flex flex-col w-full h-full gap-2">
                                    <Weather weatherInfo={weatherInfo} />

                                    <div>
                                        <button>Salvar</button>
                                    </div>

                                    <div className="flex justify-between w-full">
                                        <button
                                            onClick={() =>
                                                setWeatherInfo(undefined)
                                            }
                                        >
                                            Nova consulta
                                        </button>

                                        <button
                                            onClick={() => {
                                                setOpenModal(true);
                                                setActiveModal(2);
                                                setSelectedWeatherInfo(
                                                    weatherInfo
                                                );
                                                setComparisionWeatherInfo(
                                                    undefined
                                                );
                                            }}
                                        >
                                            Comparar clima
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {/* Se não mostrar apenas o formulário para realizar consulta */}
                                </>
                            )}
                        </>
                    )}
                </div>
                <button>Salvar</button>
            </form>
        </>
    );
}
