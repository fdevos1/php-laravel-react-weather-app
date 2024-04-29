import { IconGitHub, IconLinkedin, IconLogo } from ".";

const Icon = ({ name }) => {
    switch (name.toLowerCase()) {
        case "logo":
            return <IconLogo />;

        case "github":
            return <IconGitHub />;

        case "linkedin":
            return <IconLinkedin />;
    }
};

export default Icon;
