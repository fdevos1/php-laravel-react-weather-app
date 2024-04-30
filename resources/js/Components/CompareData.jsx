import { useContext, useEffect, useState } from "react";

import { retrieveHistory } from "@/Helpers/localStorageHistory";

import Icon from "./icons/icon";
import Weather from "./Weather";
import Form from "./Form";
import { ModalContext } from "@/Context/ModalContext";
import { WeatherContext } from "@/Context/WeatherContext";

export default function CompareData({ savedQueries }) {
    const [historyQueries, setHistoryQueries] = useState([]);

    const { setOpenModal } = useContext(ModalContext);
    const {
        selectedWeatherInfo,
        setSelectedWeatherInfo,
        comparisionWeatherInfo,
        setComparisionWeatherInfo,
        setWeatherInfo,
    } = useContext(WeatherContext);

    const retrievedQueries = retrieveHistory();
    const { data } = savedQueries;

    const IS_EQUAL =
        JSON.stringify(selectedWeatherInfo) ===
        JSON.stringify(comparisionWeatherInfo);

    useEffect(() => {
        setHistoryQueries(retrievedQueries);

        if (IS_EQUAL) {
            setSelectedWeatherInfo(undefined);
            setComparisionWeatherInfo(undefined);
        }
    }, [IS_EQUAL]);

    const queriesLists = [
        {
            title: "Histórico de consultas",
            content: historyQueries,
        },
        {
            title: "Consultas salvas",
            content: data,
        },
    ];

    console.log(comparisionWeatherInfo, selectedWeatherInfo);

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
                    <button
                        className="text-sm bg-sky-600 rounded px-2 text-white font-bold"
                        onClick={() => {
                            setWeatherInfo(undefined);
                            setSelectedWeatherInfo(undefined);
                            setComparisionWeatherInfo(undefined);
                        }}
                    >
                        Nova comparação
                    </button>
                </div>

                <div className="flex w-full h-full overflow-auto">
                    <div className="w-2/5 h-full flex flex-col gap-2 border-r max-w-52 min-w-36 px-[1px]">
                        {queriesLists &&
                            queriesLists.map(({ title, content }) => {
                                return (
                                    <ul className="h-1/2 overflow-auto ">
                                        <div className="text-xs bg-white sticky top-0 py-1">
                                            <p>{title}</p>
                                        </div>

                                        {content &&
                                            content.map((item) => (
                                                <li>
                                                    <div className="flex flex-col gap-2 border-y hover:bg-sky-300 hover:text-white cursor-pointer hover:font-semibold py-1">
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
                                                            {selectedWeatherInfo !==
                                                            undefined ? (
                                                                <button
                                                                    className="text-sm bg-sky-600 rounded px-2 text-white font-bold"
                                                                    onClick={() =>
                                                                        setComparisionWeatherInfo(
                                                                            {
                                                                                location:
                                                                                    item.location,
                                                                                current:
                                                                                    item.current,
                                                                            }
                                                                        )
                                                                    }
                                                                >
                                                                    Comparar
                                                                </button>
                                                            ) : (
                                                                <button
                                                                    className="text-sm bg-sky-500 rounded px-2 text-white"
                                                                    onClick={() =>
                                                                        setSelectedWeatherInfo(
                                                                            {
                                                                                location:
                                                                                    item.location,
                                                                                current:
                                                                                    item.current,
                                                                            }
                                                                        )
                                                                    }
                                                                >
                                                                    Selecionar
                                                                </button>
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
                        {selectedWeatherInfo !== undefined &&
                        comparisionWeatherInfo === undefined ? (
                            <div className="flex flex-col gap-2 ">
                                <Weather
                                    weatherInfo={selectedWeatherInfo}
                                    size="base"
                                />

                                <span className="text-sm text-center text-neutral-500">
                                    Selecione outra consulta ou consulte abaixo
                                </span>

                                <Form type="comparision-query" />
                            </div>
                        ) : selectedWeatherInfo !== undefined &&
                          comparisionWeatherInfo !== undefined &&
                          !IS_EQUAL ? (
                            <div className="flex flex-col gap-4  items-center">
                                <div className="h-full">
                                    <Weather
                                        weatherInfo={selectedWeatherInfo}
                                        size="base"
                                    />
                                </div>
                                <div className="w-4/5 border border-neutral-400" />
                                <div className="h-full">
                                    <Weather
                                        weatherInfo={comparisionWeatherInfo}
                                        size="base"
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <Form type="query-small" />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
