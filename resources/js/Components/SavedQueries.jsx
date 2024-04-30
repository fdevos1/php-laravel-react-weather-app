import { useContext, useEffect, useState } from "react";

import { ModalContext } from "@/Context/ModalContext";
import Icon from "./icons/icon";
import Weather from "./Weather";

export default function SavedQueries({ queries }) {
    const [selectedQuery, setSelectedQuery] = useState(undefined);

    const { data } = queries;

    const { setOpenModal } = useContext(ModalContext);

    const QUERY_IS_SELECTED = selectedQuery !== undefined;

    console.log(data);

    return (
        <>
            <div className="flex flex-col h-[600px] w-full px-4 bg-white rounded gap-2">
                <div className="flex w-full justify-between items-center pt-4">
                    <h3>Histórico de consultas salvas</h3>
                    <button onClick={() => setOpenModal(false)}>
                        <Icon name="close" />
                    </button>
                </div>

                <div className="flex w-full h-full">
                    <div className="w-2/5 border-r h-full pr-2">
                        <ul className="overflow-auto">
                            <p>Consulta salvas</p>
                            {data &&
                                data.map((item) => (
                                    <li
                                        onClick={() =>
                                            setSelectedQuery({
                                                current: item.current,
                                                location: item.location,
                                            })
                                        }
                                    >
                                        <div className="flex flex-col gap-2 border-y hover:bg-sky-300 hover:text-white cursor-pointer hover:font-semibold ">
                                            <div className="flex gap-1 items-center">
                                                <span className="text-xs">
                                                    CEP:
                                                </span>

                                                <span className="text-xs">
                                                    {item.cep !== ""
                                                        ? item.cep
                                                        : "N/A"}
                                                </span>
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                <span className="text-xs">
                                                    Cidade:
                                                </span>

                                                <span className="text-xs truncate">
                                                    {item.cidade}
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    <div className="w-3/5 h-full">
                        {QUERY_IS_SELECTED ? (
                            <Weather weatherInfo={selectedQuery} size="base" />
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
