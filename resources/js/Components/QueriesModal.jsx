import { useContext, useState } from "react";

import { ModalContext } from "@/Context/ModalContext";

import Icon from "./icons/icon";
import Weather from "./WeatherInfos";
import { format } from "date-fns";
import Searchbar from "./Searchbar";

export default function QueriesModal({ title, listTitle, content }) {
    const [selectedQuery, setSelectedQuery] = useState(undefined);
    const [searchTerm, setSearchTerm] = useState("");

    const { setOpenModal } = useContext(ModalContext);

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    };

    const QUERY_IS_SELECTED = selectedQuery !== undefined;

    return (
        <div className="flex flex-col h-[600px] w-full px-4 bg-white rounded gap-2 lg:max-w-[900px]   ">
            <div className="flex w-full justify-between items-center pt-4">
                <h3 className="lg:text-xl">{title}</h3>
                <button onClick={() => setOpenModal(false)}>
                    <Icon name="close" />
                </button>
            </div>

            <Searchbar
                searchTerm={searchTerm}
                setSearchTerm={handleSearchTerm}
            />

            <div className="flex w-full h-full overflow-hidden">
                <div className="w-full border-r h-full pr-2 max-w-40 md:max-w-52 lg:max-w-60 overflow-auto">
                    <ul>
                        <p className="text-sm lg:text-base font-semibold">
                            {listTitle}
                        </p>
                        {content &&
                            content
                                .filter((item) =>
                                    searchTerm === ""
                                        ? item
                                        : item.cidade
                                              .toLowerCase()
                                              .includes(searchTerm) ||
                                          (item.cep &&
                                              item.cep.includes(searchTerm))
                                )
                                .map((item, i) => (
                                    <li
                                        key={i}
                                        onClick={() =>
                                            setSelectedQuery({
                                                location: item.location,
                                                current: item.current,
                                            })
                                        }
                                    >
                                        <div className="flex flex-col gap-2 border-y hover:bg-neutral-100  cursor-pointer">
                                            <div className="flex gap-1 items-center">
                                                <span className="text-xs lg:text-base">
                                                    CEP:
                                                </span>

                                                <span className="text-xs lg:text-base">
                                                    {item.cep !== ""
                                                        ? item.cep
                                                        : "N/A"}
                                                </span>
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                <span className="text-xs lg:text-base">
                                                    Cidade:
                                                </span>

                                                <span className="text-xs lg:text-base truncate">
                                                    {item.cidade}
                                                </span>
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                <span className="text-xs lg:text-base">
                                                    Horário:
                                                </span>

                                                <span className="text-xs lg:text-base truncate">
                                                    {format(
                                                        item.date
                                                            ? item.date
                                                            : item.created_at,
                                                        "H:m - dd/MM/yyyy"
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                    </ul>
                </div>

                <div className="flex justify-center w-full h-full">
                    {QUERY_IS_SELECTED ? (
                        <Weather
                            weatherInfo={selectedQuery}
                            size="base"
                            isModal
                        />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
}
