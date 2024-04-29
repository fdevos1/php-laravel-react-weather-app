import {
    IconGitHub,
    IconLinkedin,
    IconLogo,
    IconThermometer,
    IconUV,
    IconHumidity,
    IconWind,
    IconClouds,
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
    }
};

export default Icon;
