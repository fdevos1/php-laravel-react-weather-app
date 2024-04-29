import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Layout({ children }) {
    return (
        <>
            <div className="flex flex-col min-h-screen justify-between bg-sky-50">
                <Header />

                <div>{children}</div>

                <Footer />
            </div>
        </>
    );
}
