import { useContext, useEffect } from "react";

import Layout from "@/Layouts/Layout";

import Form from "@/Components/Form";
import Weather from "@/Components/Weather";
import Modal from "@/Components/Modal";
import QueriesHistory from "@/Components/QueriesHistory";
import CompareData from "@/Components/CompareData";

import { ModalContext } from "@/Context/ModalContext";
import { WeatherContext } from "@/Context/WeatherContext";

import { useForm } from "@inertiajs/react";
import SavedQueries from "@/Components/SavedQueries";

export default function Homepage({ queries }) {
    const { openModal, setOpenModal, setActiveModal, activeModal } =
        useContext(ModalContext);
    const {
        weatherInfo,
        setWeatherInfo,
        setSelectedWeatherInfo,
        setComparisionWeatherInfo,
        loading,
    } = useContext(WeatherContext);

    const { setData, post } = useForm();

    const HAS_WEATHER_INFO = weatherInfo !== undefined;
    const IS_LOADING = loading !== false;
    const HISTORY_MODAL_OPEN = activeModal === 0;
    const SAVED_QUERIES_MODAL_OPEN = activeModal === 1;
    const COMPARE_QUERIES_MODAL_OPEN = activeModal === 2;

    console.log(activeModal);

    useEffect(() => {
        if (weatherInfo !== undefined) {
            const { current, location, cep, cidade } = weatherInfo;

            setData({
                cep,
                cidade,
                location,
                current,
            });
        }
    }, [weatherInfo]);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("store"));
    };

    return (
        <>
            <Layout>
                <>
                    <main>
                        <div className="w-full flex flex-col items-center gap-1">
                            <h1 className="text-2xl font-bold">
                                Clima e Tempo
                            </h1>
                            <span className="text-sm">
                                Consulte e compare informações meteorológicas
                            </span>
                        </div>

                        <section>
                            <div className="flex w-full h-full items-center justify-center">
                                {IS_LOADING ? (
                                    <>
                                        <div className="h-10 w-10 border border-sky-500 rounded-full animate-spin"></div>
                                    </>
                                ) : (
                                    <>
                                        {HAS_WEATHER_INFO ? (
                                            <form
                                                className="flex flex-col w-full h-full gap-2"
                                                onSubmit={handleSubmit}
                                            >
                                                <Weather
                                                    weatherInfo={weatherInfo}
                                                />

                                                <div className="flex flex-col w-full items-center gap-2 px-8">
                                                    <div>
                                                        <button type="submit">
                                                            Salvar
                                                        </button>
                                                    </div>

                                                    <div className="flex justify-between w-full">
                                                        <button
                                                            onClick={() =>
                                                                setWeatherInfo(
                                                                    undefined
                                                                )
                                                            }
                                                        >
                                                            Nova consulta
                                                        </button>

                                                        <button
                                                            onClick={() => {
                                                                setOpenModal(
                                                                    true
                                                                );
                                                                setActiveModal(
                                                                    2
                                                                );
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
                                            </form>
                                        ) : (
                                            <>
                                                <Form type="query" />
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        </section>
                    </main>
                </>
            </Layout>

            <Modal isOpen={openModal}>
                {HISTORY_MODAL_OPEN ? (
                    <QueriesHistory />
                ) : SAVED_QUERIES_MODAL_OPEN ? (
                    <SavedQueries queries={queries} />
                ) : COMPARE_QUERIES_MODAL_OPEN ? (
                    <CompareData />
                ) : (
                    <></>
                )}
            </Modal>
        </>
    );
}
