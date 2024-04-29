import { useContext, useState } from "react";

import { WeatherContext } from "@/Context/WeatherContext";
import Layout from "@/Layouts/Layout";
import Form from "@/Components/Form";

export default function Welcome() {
    const [loading, setLoading] = useState(false);

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
                                        <div className="h-10 w-10 border rounded-full animate-spin"></div>
                                    </>
                                ) : (
                                    <>
                                        <Form
                                            setCurrentWeather={setWeatherInfo}
                                            setLoading={setLoading}
                                        />
                                        {weatherInfo !== undefined ? (
                                            <div className="flex flex-col w-full h-full gap-2"></div>
                                        ) : (
                                            <></>
                                        )}
                                    </>
                                )}
                            </div>
                        </section>
                    </main>
                </>
            </Layout>
        </>
    );
}
