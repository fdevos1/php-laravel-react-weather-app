import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "@inertiajs/react";

import Layout from "@/Layouts/Layout";

import Form from "@/Components/Form";
import Weather from "@/Components/WeatherInfos";
import Modal from "@/Components/Modal";
import Toastify from "@/Components/Toastify";
import QueriesModal from "@/Components/QueriesModal";
import CompareDataModal from "@/Components/CompareDataModal";
import Button from "@/Components/Button";

import { ModalContext } from "@/Context/ModalContext";
import { WeatherContext } from "@/Context/WeatherContext";

import { retrieveHistory } from "@/Helpers/localStorageHistory";

export default function Homepage({ queries }) {
    const [retrievedQueries, setRetrievedQueries] = useState([]);

    const { data } = queries;

    console.log(queries);

    const createdNotify = () => toast.success("Consulta salva com sucesso");
    const errorNotify = () => toast.error("Erro ao salvar consulta");

    const retrieveLocalQueries = retrieveHistory();

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

    useEffect(() => {
        setRetrievedQueries(retrieveLocalQueries);

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

        createdNotify();
    };

    return (
        <>
            <Layout>
                <>
                    <main>
                        <div className="w-full flex flex-col items-center gap-1">
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
                                                    className="flex flex-col w-full h-full gap-2 md:px-10"
                                                    onSubmit={handleSubmit}
                                                >
                                                    <Weather
                                                        weatherInfo={
                                                            weatherInfo
                                                        }
                                                    />

                                                    <div className="flex flex-col w-full items-center gap-2 px-8">
                                                        <div>
                                                            <Button
                                                                text="Salvar"
                                                                color="blue"
                                                                type="submit"
                                                            />
                                                        </div>

                                                        <div className="flex justify-between w-full">
                                                            <Button
                                                                text="Nova consulta"
                                                                color="sky"
                                                                action={() =>
                                                                    setWeatherInfo(
                                                                        undefined
                                                                    )
                                                                }
                                                            />

                                                            <Button
                                                                text="Comparar clima"
                                                                color="sky"
                                                                action={() => {
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
                                                            />
                                                        </div>
                                                    </div>
                                                </form>
                                            ) : (
                                                <div className="flex flex-col items-center ">
                                                    <h1 className="text-2xl font-bold">
                                                        Clima e Tempo
                                                    </h1>
                                                    <span className="text-sm">
                                                        Consulte e compare
                                                        informações
                                                        meteorológicas
                                                    </span>

                                                    <Form isModal={false} />
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </section>
                        </div>
                    </main>
                </>
            </Layout>

            <Modal isOpen={openModal}>
                {HISTORY_MODAL_OPEN ? (
                    <QueriesModal
                        content={retrievedQueries}
                        listTitle={"Consultas"}
                        title={"Histórico de consultas"}
                    />
                ) : SAVED_QUERIES_MODAL_OPEN ? (
                    <QueriesModal
                        content={data}
                        listTitle={"Consultas"}
                        title={"Consultas salvas"}
                    />
                ) : COMPARE_QUERIES_MODAL_OPEN ? (
                    <CompareDataModal
                        retrievedQueries={retrievedQueries}
                        savedQueries={data}
                    />
                ) : (
                    <></>
                )}
            </Modal>

            <Toastify />
        </>
    );
}
