export default function Modal({ isOpen, children }) {
    return (
        <>
            {isOpen && (
                <div className="fixed z-10 inset-0  bg-[rgba(0,0,0,0.5)]">
                    <div className="flex w-full h-full justify-center items-center px-4">
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}
