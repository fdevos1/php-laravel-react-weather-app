export default function WeatherMainInfos({ name, region, country, temp }) {
    return (
        <div className="flex flex-col gap-2 col-span-2 text-center">
            <p>
                {name}, {region}, {country}
            </p>

            <p className="text-3xl font-bold">{temp}&deg;</p>
        </div>
    );
}
