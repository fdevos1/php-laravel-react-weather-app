import {
    IconGitHub,
    IconLinkedin,
    IconLogo,
    IconThermometer,
    IconUV,
    IconHumidity,
    IconWind,
    IconClouds,
    IconOptions,
    IconChevronLeft,
    IconHistory,
    IconQueries,
    IconCompare,
} from ".";

const Icon = ({ name }) => {
    switch (name.toLowerCase()) {
        case "logo":
            return <IconLogo />;
        case "github":
            return <IconGitHub />;
        case "linkedin":
            return <IconLinkedin />;
        case "thermometer":
            return <IconThermometer />;
        case "uv":
            return <IconUV />;
        case "humidity":
            return <IconHumidity />;
        case "wind":
            return <IconWind />;
        case "cloud":
            return <IconClouds />;
        case "options":
            return <IconOptions />;
        case "chevron-left":
            return <IconChevronLeft />;
        case "history":
            return <IconHistory />;
        case "queries":
            return <IconQueries />;
        case "compare":
            return <IconCompare />;
    }
};

export default Icon;
