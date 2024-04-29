import { useContext, useEffect, useState } from "react";

import { retrieveHistory } from "@/Helpers/localStorageHistory";

import Icon from "./icons/icon";
import Weather from "./Weather";
import { ModalContext } from "@/Context/ModalContext";

export default function QueriesHistory() {
    const [queries, setQueries] = useState([]);
    const [selectedQuery, setSelectedQuery] = useState(undefined);

    const { setOpenModal } = useContext(ModalContext);

    const retrievedQueries = retrieveHistory();

    useEffect(() => {
        setQueries(retrievedQueries);
    }, []);

    return (
        <>
            <div className="flex flex-col h-[600px] w-full px-4 bg-white rounded gap-2">
                <div className="flex w-full justify-between items-center pt-4">
                    <h3>Histórico de consultas</h3>
                    <button onClick={() => setOpenModal(false)}>
                        <Icon name="close" />
                    </button>
                </div>

                <div className="flex w-full h-full">
                    <div className="w-2/5 border-r h-full pr-2">
                        <ul>
                            <p>Consulta</p>
                            {queries.map((item) => (
                                <li
                                    onClick={() =>
                                        setSelectedQuery(item.response)
                                    }
                                >
                                    <div className="flex flex-col gap-2 border-y hover:bg-sky-300 hover:text-white cursor-pointer hover:font-semibold ">
                                        <div className="flex gap-1 items-center">
                                            <span className="text-xs">
                                                CEP:
                                            </span>

                                            <span className="text-sm">
                                                {item.query.cep !== ""
                                                    ? item.query.cep
                                                    : "N/A"}
                                            </span>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <span className="text-xs">
                                                Cidade:
                                            </span>

                                            <span className="text-sm truncate ">
                                                {item.query.city}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-3/5 h-full">
                        {selectedQuery !== undefined ? (
                            <Weather weatherInfo={selectedQuery} />
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
