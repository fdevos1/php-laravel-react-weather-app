import { useContext, useState } from "react";

import Layout from "@/Layouts/Layout";

import Form from "@/Components/Form";
import Weather from "@/Components/Weather";
import Modal from "@/Components/Modal";
import QueriesHistory from "@/Components/QueriesHistory";

import { ModalContext } from "@/Context/ModalContext";
import { WeatherContext } from "@/Context/WeatherContext";

export default function Welcome() {
    const [loading, setLoading] = useState(false);

    const { openHistoryModal } = useContext(ModalContext);
    const { weatherInfo, setWeatherInfo } = useContext(WeatherContext);

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
                                {loading !== false ? (
                                    <>
                                        <div className="h-10 w-10 border border-sky-500 roundd-full animate-spin"></div>
                                    </>
                                ) : (
                                    <>
                                        {weatherInfo !== undefined ? (
                                            <div className="flex flex-col w-full h-full gap-2">
                                                <Weather
                                                    weatherInfo={weatherInfo}
                                                />

                                                <div className="flex flex-col w-full items-center gap-2 px-8">
                                                    <button className="w-40">
                                                        Salvar consulta
                                                    </button>

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

                                                        <button>
                                                            Comparar clima
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <Form setLoading={setLoading} />
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        </section>
                    </main>
                </>
            </Layout>

            <Modal isOpen={openHistoryModal}>
                <QueriesHistory />
            </Modal>
        </>
    );
}
