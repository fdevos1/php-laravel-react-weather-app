import { createContext, useState } from "react";

export const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);
    const [activeModal, setActiveModal] = useState(false);

    return (
        <ModalContext.Provider
            value={{
                openModal,
                setOpenModal,
                activeModal,
                setActiveModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
