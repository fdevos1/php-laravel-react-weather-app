export default function Thermometer({ value, type }) {
    const coldColor =
        (value <= 15 && type == "temp") || (value <= 2 && type == "uv");
    const coolColor =
        (value <= 20 && type == "temp") || (value <= 4 && type == "uv");
    const moderateColor =
        (value <= 25 && type == "temp") || (value <= 6 && type == "uv");
    const warmColor =
        (value <= 30 && type == "temp") || (value <= 8 && type == "uv");
    const hotColor =
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
                    coldColor
                        ? "from-cyan-500 to-blue-500"
                        : coolColor
                        ? "from-blue-500 to-green-500"
                        : moderateColor
                        ? "from-green-500 to-yellow-500"
                        : warmColor
                        ? "from-yellow-500 to-orange-500"
                        : hotColor
                        ? "from-orange-500 to-red-500"
                        : "bg-red-700"
                }
                
                `}
            ></div>
        </div>
    );
}
