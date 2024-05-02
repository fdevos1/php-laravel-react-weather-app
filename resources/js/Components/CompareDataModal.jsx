import { useContext, useEffect, useState } from "react";
import { format } from "date-fns";

import { ModalContext } from "@/Context/ModalContext";
import { WeatherContext } from "@/Context/WeatherContext";

import Icon from "./icons/icon";
import Weather from "./WeatherInfos";
import Form from "./Form";
import Button from "./Button";
import Searchbar from "./Searchbar";

export default function CompareDataModal({ retrievedQueries, savedQueries }) {
    const [searchTerm, setSearchTerm] = useState("");
    const { setOpenModal } = useContext(ModalContext);

    const {
        selectedWeatherInfo,
        setSelectedWeatherInfo,
        comparisionWeatherInfo,
        setComparisionWeatherInfo,
        setWeatherInfo,
        loading,
    } = useContext(WeatherContext);

    const IS_EQUAL =
        JSON.stringify(selectedWeatherInfo) ===
        JSON.stringify(comparisionWeatherInfo);

    const WEATHER_IS_SELECTED = selectedWeatherInfo !== undefined;
    const WEATHER_IS_NOT_SELECTED = selectedWeatherInfo === undefined;
    const COMPARE_WEATHER_IS_SELECETD = comparisionWeatherInfo !== undefined;
    const COMPARE_WEATHER_IS_NOT_SELECTED =
        comparisionWeatherInfo === undefined;

    const IS_LOADING = loading === true;

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

    const handleSearchTerm = (e) => {
        const query = e.target.value;

        setSearchTerm(query);
    };

    return (
        <>
            <div className="flex flex-col h-full w-full max-h-[700px] px-2 bg-white rounded gap-2 overflow-hidden lg:max-w-[1100px] xl:max-w-[1400px]">
                <div className="flex w-full justify-between items-center pt-4">
                    <h3>Comparar climas</h3>
                    <button onClick={() => setOpenModal(false)}>
                        <Icon name="close" />
                    </button>
                </div>

                <Searchbar
                    searchTerm={searchTerm}
                    setSearchTerm={handleSearchTerm}
                />

                <div className="self-end">
                    <Button
                        disabled={
                            WEATHER_IS_NOT_SELECTED &&
                            COMPARE_WEATHER_IS_NOT_SELECTED
                        }
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
                            queriesLists.map(({ title, content }, i) => {
                                return (
                                    <ul className="h-1/2 overflow-auto" key={i}>
                                        <div className="text-xs bg-white font-semibold sticky top-0 py-2">
                                            <p>{title}</p>
                                        </div>

                                        {content &&
                                            content
                                                .filter((item) =>
                                                    searchTerm === ""
                                                        ? item
                                                        : item.cidade
                                                              .toLowerCase()
                                                              .includes(
                                                                  searchTerm.toLowerCase()
                                                              ) ||
                                                          (item.cep &&
                                                              item.cep.includes(
                                                                  searchTerm.toLowerCase()
                                                              ))
                                                )
                                                .map((item, i) => (
                                                    <li key={i}>
                                                        <div className="flex flex-col gap-2 border-y hover:bg-neutral-100  cursor-pointer  py-1 transition-colors">
                                                            <div className="flex gap-1 items-center">
                                                                <span className="text-xs lg:text-sm">
                                                                    CEP:
                                                                </span>

                                                                <span className="text-sm lg:text-sm">
                                                                    {item.cep &&
                                                                        item.cep}
                                                                </span>
                                                            </div>
                                                            <div className="flex gap-1 items-center">
                                                                <span className="text-xs lg:text-sm">
                                                                    Cidade:
                                                                </span>

                                                                <span className="text-sm lg:text-sm truncate ">
                                                                    {
                                                                        item.cidade
                                                                    }
                                                                </span>
                                                            </div>

                                                            <div className="flex gap-1 items-center">
                                                                <span className="text-xs lg:text-sm">
                                                                    Data:
                                                                </span>

                                                                <span className="text-xs lg:text-sm truncate">
                                                                    {format(
                                                                        item.date
                                                                            ? item.date
                                                                            : item.created_at,
                                                                        "H:m - dd/MM/yyyy"
                                                                    )}
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

                    {WEATHER_IS_SELECTED && COMPARE_WEATHER_IS_NOT_SELECTED ? (
                        <div className="flex flex-col w-full gap-2 items-center lg:flex-row ">
                            <Weather
                                weatherInfo={selectedWeatherInfo}
                                isModal={true}
                            />

                            <span className="text-sm text-center text-neutral-500">
                                Selecione outra consulta ou consulte abaixo
                            </span>

                            <Form
                                isModal={true}
                                setState={"comparision-query"}
                            />
                        </div>
                    ) : WEATHER_IS_SELECTED &&
                      COMPARE_WEATHER_IS_SELECETD &&
                      !IS_EQUAL ? (
                        <div className="flex flex-col gap-4 items-center lg:flex-row xl:w-full xl:justify-center">
                            <div className="h-full">
                                <Weather
                                    weatherInfo={selectedWeatherInfo}
                                    isModal={true}
                                />
                            </div>
                            <div className="w-4/5 lg:h-4/5 lg:w-0 border border-neutral-400" />
                            <div className="h-full">
                                <Weather
                                    weatherInfo={comparisionWeatherInfo}
                                    isModal={true}
                                />
                            </div>
                        </div>
                    ) : IS_LOADING ? (
                        <div className="flex w-full justify-center items-center">
                            <div className="h-10 w-10 border border-sky-500 rounded-full animate-spin" />
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-center w-full">
                                <Form isModal={true} setState={"modal-query"} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
