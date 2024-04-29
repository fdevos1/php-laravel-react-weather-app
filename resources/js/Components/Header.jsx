import { useContext } from "react";
import Icon from "./icons/icon";
import { SidebarContext } from "@/Context/SidebarContext";

export default function Header() {
    const { setOpenSidebar } = useContext(SidebarContext);

    return (
        <>
            <header>
                <div className="flex w-full max-h-[50px] justify-between items-center px-2">
                    <button
                        className="cursor-pointer"
                        onClick={() => setOpenSidebar(true)}
                    >
                        <Icon name="options" />
                    </button>
                    <Icon name="logo" />
                    <div></div>
                </div>
            </header>
        </>
    );
}
