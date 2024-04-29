import { createContext, useState } from "react";

export const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
    const [openHistoryModal, setOpenHistoryModal] = useState(false);

    return (
        <ModalContext.Provider
            value={{ openHistoryModal, setOpenHistoryModal }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
