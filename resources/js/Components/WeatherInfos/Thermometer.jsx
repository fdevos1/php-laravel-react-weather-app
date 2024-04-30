export default function Thermometer({ value, type }) {
    const COLD_COLOR =
        (value <= 15 && type == "temp") || (value <= 2 && type == "uv");
    const COOL_COLOR =
        (value <= 20 && type == "temp") || (value <= 4 && type == "uv");
    const MODERATE_COLOR =
        (value <= 25 && type == "temp") || (value <= 6 && type == "uv");
    const WARM_COLOR =
        (value <= 30 && type == "temp") || (value <= 8 && type == "uv");
    const HOT_COLOR =
        (value <= 35 && type == "temp") || (value <= 10 && type == "uv");

    return (
        <div className="w-full h-2 bg-[rgba(0,0,0,0.2)]">
            <div
                style={{
                    width: `${
                        type === "temp"
                            ? (value / 40) * 100
                            : (value / 12) * 100
                    }%`,
                }}
                className={`h-full
                bg-gradient-to-r 
                ${
                    COLD_COLOR
                        ? "from-cyan-500 to-blue-500"
                        : COOL_COLOR
                        ? "from-blue-500 to-green-500"
                        : MODERATE_COLOR
                        ? "from-green-500 to-yellow-500"
                        : WARM_COLOR
                        ? "from-yellow-500 to-orange-500"
                        : HOT_COLOR
                        ? "from-orange-500 to-red-500"
                        : "bg-red-700"
                }
                
                `}
            ></div>
        </div>
    );
}
