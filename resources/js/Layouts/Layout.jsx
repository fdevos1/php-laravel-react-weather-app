import { useContext } from "react";

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import { SidebarContext } from "@/Context/SidebarContext";

export default function Layout({ children }) {
    const { openSidebar } = useContext(SidebarContext);

    return (
        <>
            <div className="flex min-h-screen bg-white relative">
                <Sidebar open={openSidebar} />
                <div className="flex flex-col justify-between w-full">
                    <Header />

                    <div>{children}</div>

                    <Footer />
                </div>
            </div>
        </>
    );
}
