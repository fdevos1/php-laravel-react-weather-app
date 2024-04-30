import { useContext, useEffect } from "react";

import { ModalContext } from "@/Context/ModalContext";
import { WeatherContext } from "@/Context/WeatherContext";

import Icon from "./icons/icon";
import Weather from "./WeatherInfos";
import Form from "./Form";
import Button from "./Button";

export default function CompareDataModal({ retrievedQueries, savedQueries }) {
    const { setOpenModal } = useContext(ModalContext);
    const {
        selectedWeatherInfo,
        setSelectedWeatherInfo,
        comparisionWeatherInfo,
        setComparisionWeatherInfo,
        setWeatherInfo,
    } = useContext(WeatherContext);

    const IS_EQUAL =
        JSON.stringify(selectedWeatherInfo) ===
        JSON.stringify(comparisionWeatherInfo);

    const WEATHER_IS_SELECTED = selectedWeatherInfo !== undefined;
    const COMPARE_WEATHER_IS_SELECETD = comparisionWeatherInfo !== undefined;
    const COMPARE_WEATHER_IS_NOT_SELECTED =
        comparisionWeatherInfo === undefined;

    useEffect(() => {
        if (IS_EQUAL) {
            setSelectedWeatherInfo(undefined);
            setComparisionWeatherInfo(undefined);
        }
    }, [IS_EQUAL]);

    const queriesLists = [
        {
            title: "Histórico de consultas",
            content: retrievedQueries,
        },
        {
            title: "Consultas salvas",
            content: savedQueries,
        },
    ];

    return (
        <>
            <div className="flex flex-col h-full w-full max-h-[700px] px-2 bg-white rounded gap-2 overflow-hidden">
                <div className="flex w-full justify-between items-center pt-4">
                    <h3>Comparar climas</h3>
                    <button onClick={() => setOpenModal(false)}>
                        <Icon name="close" />
                    </button>
                </div>

                <div>
                    <Button
                        text="Nova comparação"
                        color="blue"
                        action={() => {
                            setWeatherInfo(undefined);
                            setSelectedWeatherInfo(undefined);
                            setComparisionWeatherInfo(undefined);
                        }}
                    />
                </div>

                <div className="flex w-full h-full overflow-auto">
                    <div className="w-2/5 h-full flex flex-col gap-2 border-r max-w-52 min-w-36 px-[1px]">
                        {queriesLists &&
                            queriesLists.map(({ title, content }) => {
                                return (
                                    <ul className="h-1/2 overflow-auto ">
                                        <div className="text-xs bg-white font-semibold sticky top-0 py-1">
                                            <p>{title}</p>
                                        </div>

                                        {content &&
                                            content.map((item) => (
                                                <li>
                                                    <div className="flex flex-col gap-2 border-y hover:bg-sky-100  cursor-pointer  py-1 transition-colors">
                                                        <div className="flex gap-1 items-center">
                                                            <span className="text-xs">
                                                                CEP:
                                                            </span>

                                                            <span className="text-sm">
                                                                {item.cep !== ""
                                                                    ? item.cep
                                                                    : "N/A"}
                                                            </span>
                                                        </div>
                                                        <div className="flex gap-1 items-center">
                                                            <span className="text-xs">
                                                                Cidade:
                                                            </span>

                                                            <span className="text-sm truncate ">
                                                                {item.cidade}
                                                            </span>
                                                        </div>

                                                        <div className="flex justify-center ">
                                                            {WEATHER_IS_SELECTED ? (
                                                                <Button
                                                                    text="Comparar"
                                                                    color="sky"
                                                                    action={() =>
                                                                        setComparisionWeatherInfo(
                                                                            {
                                                                                location:
                                                                                    item.location,
                                                                                current:
                                                                                    item.current,
                                                                            }
                                                                        )
                                                                    }
                                                                />
                                                            ) : (
                                                                <Button
                                                                    text="Selecionar"
                                                                    color="blue"
                                                                    action={() =>
                                                                        setSelectedWeatherInfo(
                                                                            {
                                                                                location:
                                                                                    item.location,
                                                                                current:
                                                                                    item.current,
                                                                            }
                                                                        )
                                                                    }
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                    </ul>
                                );
                            })}
                    </div>

                    <div className="w-full h-full overflow-auto pb-2 ">
                        {WEATHER_IS_SELECTED &&
                        COMPARE_WEATHER_IS_NOT_SELECTED ? (
                            <div className="flex flex-col gap-2 items-center ">
                                <Weather
                                    weatherInfo={selectedWeatherInfo}
                                    isModal
                                />

                                <span className="text-sm text-center text-neutral-500">
                                    Selecione outra consulta ou consulte abaixo
                                </span>

                                <Form isModal={true} />
                            </div>
                        ) : WEATHER_IS_SELECTED &&
                          COMPARE_WEATHER_IS_SELECETD &&
                          !IS_EQUAL ? (
                            <div className="flex flex-col gap-4  items-center">
                                <div className="h-full">
                                    <Weather
                                        weatherInfo={selectedWeatherInfo}
                                        isModal
                                    />
                                </div>
                                <div className="w-4/5 border border-neutral-400" />
                                <div className="h-full">
                                    <Weather
                                        weatherInfo={comparisionWeatherInfo}
                                        isModal
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-center">
                                    <Form isModal={true} />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
