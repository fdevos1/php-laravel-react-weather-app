import { createContext, useState } from "react";

export const SidebarContext = createContext(null);

const SidebarProvider = ({ children }) => {
    const [openSidebar, setOpenSidebar] = useState(undefined);

    return (
        <SidebarContext.Provider value={{ openSidebar, setOpenSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
