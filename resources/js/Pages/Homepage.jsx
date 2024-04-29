import WeatherProvider from "@/Context/WeatherContext";
import Layout from "@/Layouts/Layout";

export default function Welcome() {
    return (
        <>
            <Layout>
                <WeatherProvider>
                    <p>Hello World</p>
                </WeatherProvider>
            </Layout>
        </>
    );
}
