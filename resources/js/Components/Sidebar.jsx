import Icon from "./icons/icon";

export default function Sidebar({ open, sidebarOpen }) {
    return (
        <aside
            className={`h-screen z-10 absolute shadow ${
                !open ? "-translate-x-56" : ""
            }
                transition-all
            `}
        >
            <div className="h-full flex flex-col bg-white border-r shadow-sm justify-between">
                <div className="flex p-4 pb-2 justify-between items-center">
                    <Icon name="cloud" />
                    <span>Clima e Tempo</span>
                    <button
                        className="flex h-6 w-4 justify-center items-center"
                        onClick={() => sidebarOpen(false)}
                    >
                        <Icon name="chevron-left" />
                    </button>
                </div>

                <ul className="flex-1 px-3">
                    <li className="flex items-center py-1 px-2 my-2 font-medium rounded-md cursor-pointer">
                        <Icon name="cloud" />
                        <span>Histórico de consulta</span>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
