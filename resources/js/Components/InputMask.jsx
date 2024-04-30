import Input from "./Input";
import { useCallback } from "react";

export default function InputMask({ isModal, ...props }) {
    const handleKeyUp = useCallback((e) => {
        e.currentTarget.maxLength = 9;
        let value = e.currentTarget.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{5})(\d)/, "$1-$2");
        e.currentTarget.value = value;
        return e;
    }, []);

    return (
        <>
            <Input isModal={isModal} {...props} onKeyUp={handleKeyUp} />
        </>
    );
}
