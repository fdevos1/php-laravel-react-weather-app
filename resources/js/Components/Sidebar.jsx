import Icon from "./icons/icon";
import { useContext, useEffect, useRef } from "react";
import { handleClickOutside } from "@/Hooks/detectOutsideClick";
import { ModalContext } from "@/Context/ModalContext";
import { SidebarContext } from "@/Context/SidebarContext";

export default function Sidebar({ open }) {
    const ref = useRef();

    const { setOpenModal, setActiveModal } = useContext(ModalContext);
    const { setOpenSidebar } = useContext(SidebarContext);

    useEffect(() => {
        const handleClick = handleClickOutside(ref, setOpenSidebar);

        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [ref]);

    const items = [
        {
            icon: "history",
            title: "Histórico de consulta",
            active: 0,
        },
        {
            icon: "queries",
            title: "Consultas salvas",
            active: 1,
        },
        {
            icon: "compare",
            title: "Comparar climas",
            active: 2,
        },
    ];

    return (
        <aside
            ref={ref}
            className={`h-screen z-10 absolute shadow ${
                !open ? "-translate-x-60" : ""
            }
                transition-transform
                           `}
        >
            <div className="h-full flex flex-col bg-white border-r shadow-sm justify-between">
                <div className="flex p-4 pb-2 justify-between items-center border-b">
                    <Icon name="cloud" />
                    <span className="text-xl">Clima e Tempo</span>
                    <button
                        className="flex h-6 w-4 justify-center items-center"
                        onClick={() => setOpenSidebar(false)}
                    >
                        <Icon name="chevron-left" />
                    </button>
                </div>

                <ul className="flex-1 px-3 mt-4">
                    {items.map(({ icon, title, active }) => (
                        <li
                            className="flex items-center py-1 px-2 my-2 gap-4 font-medium rounded-md cursor-pointer   hover:bg-sky-300 hover:text-white"
                            onClick={() => {
                                setOpenModal(true);
                                setActiveModal(active);
                                setOpenSidebar(false);
                            }}
                        >
                            <Icon name={icon} />
                            <span>{title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
