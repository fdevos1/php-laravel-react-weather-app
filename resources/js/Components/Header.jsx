import Icon from "./icons/icon";

export default function Header({ sidebarOpen }) {
    return (
        <>
            <header>
                <div className="flex w-full max-h-[50px] justify-between items-center px-2">
                    <button
                        className="cursor-pointer"
                        onClick={() => sidebarOpen(true)}
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
